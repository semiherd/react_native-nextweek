import React, { useEffect, useState, useRef } from "react"
import { KeyboardAvoidingView, Animated, Dimensions, Platform, Pressable, Text } from "react-native"
import { useMessage } from '../../../service/hook/UseMessage'
import { Color } from "../../../asset/constant/Color"
import { InputHandle } from '../../app/input/type.input'
import { RoomRoute_Params, AttachId, AttachItem } from '../type/type.message'
import { 
	interpolationOpacity, 
	interpolationX, interpolationY, 
	interpolationReverseX, interpolationReverseY 
} from './style/Animation'
import { InputLayout,LeftIcon,RightIcon,Content,AttachedPreview,AttachmentContainer, options} from './index'
import { imagePicker } from '../../../service/app/ImagePicker'
import { ImagePickerProps } from '../../../service/app/type'
import { useProgressDispatch } from '../../../context/progress/ProgressContext'
import { useMessageState, useMessageDispatch } from '../../../context/chat/MessageContext'
import { useUserState } from "../../../context/user/UserContext"
import { 
	Api_CreateQuestionAsManager_Param,
	Api_CreateQuestionAsUser_Param,
	Api_CreateMessage_Param,
	SendMessageParam, 
	ApiResponse_Question,ApiResponse_Message,
	MessageApi_Type,QuestionApi_Type
} from '../../../type/type.api'
import { requestPermission, checkPermission } from '../../../service/app/HandlePermission'
import { PermissionStatus } from 'react-native-permissions'

const {width,height}= Dimensions.get('window')

const MessageInput= (props: RoomRoute_Params) => {
	const { id, title }= props
	const messageRef= useRef<InputHandle>(null)
	const { createMessage,createQuestion }= useMessage()
	const { user, manager }= useUserState()
	const { resetLoading, updateError, updateLoading } = useProgressDispatch()
	const { attachment } = useMessageState()
	const { addFile,removeFile } = useMessageDispatch()
	
	const [attachOptions,setAttachOptions]= useState<boolean>(false)
	const [animation,setAnimation]= useState(new Animated.Value(0))

	const InputFieldProps={
		h: height*0.0015
	}
	const animatedStyle =              
		{
			opacity: animation.interpolate(interpolationOpacity),
			transform: [
				{	translateX: animation.interpolate(attachOptions ?interpolationX :interpolationReverseX ) },   
				{	translateY: animation.interpolate(attachOptions ?interpolationY :interpolationReverseY ) },   
			]
		}
	
	useEffect(() => {
			Animated.timing(animation, {
				toValue: attachOptions ?1 :0,
				duration: 500,
				useNativeDriver: true
		 	}).start()
	},[attachOptions])

	
	async function switchMessageType(type:'message'|'question',content:string):Promise<ApiResponse_Message<MessageApi_Type>|ApiResponse_Question<QuestionApi_Type>|null>{
		switch(type){
			case 'message':
				const param:Api_CreateMessage_Param={
					employeeType: 1,
					priority: 1,
					content,
				}
				const response:SendMessageParam<typeof type>= await createMessage(param)
				return response		
			case 'question':
				if(manager!==null){
					const param:Api_CreateQuestionAsManager_Param={
						param: {
							employeeType: 1,
							priority: 1,
							content,
							solved: true
						}
					}	
					const response:SendMessageParam<typeof type>= await createQuestion(param)
					return response
				}else if(user!==null){
					const param:Api_CreateQuestionAsUser_Param={
						id,
						param: {
							content
						}
					}
					const response:SendMessageParam<typeof type>= await createQuestion(param)
					return response
				}		
			default:
				return null
		}
	}
	
	const sendMessage= async (type:'message'|'question'):Promise<void> => {
		try{
			if(messageRef.current!==null){
				updateLoading({ state:true, description: 'messageSend request' })
				const messageContent= messageRef.current.getValue()
				console.log(type,messageContent,attachment)
				const response= await switchMessageType(type,messageContent)
				// no param exist for attached files => attachment 
				// use attachment property on MESSAGE-CONTEXT	
				
				if(response?.state==='success'){
					await Promise.all(attachment.map((i) => removeFile(i)))
					messageRef.current.resetValue()
				}else{
					updateError({
						state: true,
						error: type==='question' 
							? 'fail-createQuestion-api-response'
							: type==='message'
								? 'fail-createMessage-api-response'
								: null,
						description: 'Message can not be sent'
					})
				}	
			}
		}catch(e){
			updateLoading({state:false,description: ''})
			updateError({
				state: true,
				error: e,
				description: 'Message can not be sent'
			})
		}finally{
			updateLoading({ state:false, description: '' })
		}
	}

	async function onPressPlusIcon(){
		try{
			setAttachOptions((state) => !state)
		}catch(e){
			updateError({
				state: true,
				error: e,
				description: 'Attachment options can not be displayed'
			})
		}
	}

	async function onOptionCancel(){
		try{
			setAttachOptions(false)
		}catch(e){
			updateError({
				state: true,
				error: e,
				description: 'Attachment Option cancel failed'
			})
		}
	}

	async function onOptionSelect(id:AttachId){
		try{
			setAttachOptions(false)
			await handleAction(id)
		}catch(e){
			updateError({
				state: true,
				error: e,
				description: 'Image Attachment can not be selected'
			})
		}
	}

	async function handlePermission():Promise<boolean>{
		try{
				
			const response_checkPermission:PermissionStatus= await checkPermission('photo')
			if(response_checkPermission!=='granted'){
				const response_requestPermission= await requestPermission('photo')
				return response_requestPermission==='granted'		
			}else
				return true
		}catch(e){
			updateError({
				state: true,
				error: e,
				description: 'Gallery Permission can not be granted.'
			})
			return false
		}
	}

	async function pickImages():Promise<AttachItem[]|null>{
		try{
			updateLoading({
					state: true,
					description: 'Loading Image'
			})
			const param:ImagePickerProps={ 
					errorFn: () => console.log('imagePicker error'), 
					multiple: true, 
					minFiles: 1, 
					maxFiles: 3, 
					filetype:'photo' 
			}
			const images= await imagePicker(param)
			if(!images) {
				return null
			}
			const permissionState:boolean= await handlePermission()
			if(!permissionState){
				return null
			}
			if(Array.isArray(images)){
				return await Promise.all(images?.map(item => {
					return {
						id: item.localIdentifier,
						sourceURL: item.sourceURL, 
						mime: item.mime,
						filename: item.filename
					}
				}))
				
			}
			return null
		}catch(e){
			updateError({
				state: true,
				error: e,
				description: 'New photos can not be selected.'
			})
			return null
		}finally{
			resetLoading()
		}
	}

	async function handleAction(id:AttachId):Promise<void>{
		try{
			if(id==='image'){
				const images:AttachItem[]|null= await pickImages()
				if(Array.isArray(images)){
					addFile(images)		
				}
			}		
		}catch(e){
			updateError({
				state: true,
				error: e,
				description: 'Handling Attachment Type on MessageInput failed'
			})
		}
	}

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			keyboardVerticalOffset={0}  
			style={{
				backgroundColor: Color.blue,
				alignSelf:'center', 
				justifyContent:'center',
				position: 'absolute', left: 0, right: 0, bottom: 0,
			}}
    >
			{attachOptions 
					? <Animated.View style={[animatedStyle,{position:'absolute',left:0,bottom:height*0.1}]}>
							<AttachmentContainer data={options} onPress={onOptionSelect} />
							<Pressable style={{ overflow: 'hidden',width:'90%',borderRadius: 10, alignSelf:'center' }} onPress={onOptionCancel} >
								<Text style={{
									marginTop: '1%',
									fontFamily: 'Lato',
									fontSize: 18,
									fontWeight: '700',
									textAlign: 'center',
									color: Color.blue102_1,
									backgroundColor: Color.white,
								}}>{`Cancel`}</Text>
							</Pressable>
						</Animated.View>
					: null
			}
			{!attachOptions && attachment?.length 
					? <Animated.View style={[{ width,padding: '2%',backgroundColor:Color.gray92,position:'absolute',left:0,bottom:height*0.11}]}>
							<AttachedPreview data={attachment} />
						</Animated.View>
					: null
			}
			<InputLayout 
				left={<LeftIcon onPress={onPressPlusIcon} />}
				center={<Content h={InputFieldProps.h} ref={messageRef} />}
				right={<RightIcon onPress={sendMessage}/>}
			/>			
		</KeyboardAvoidingView>
	)
}
export default MessageInput