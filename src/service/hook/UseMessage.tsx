import { Message, MessageItem } from "../../type/type.message"
import { Room } from "../../component/message/type/type.message"
import { User, Manager } from "../../context/user/type.user"
import { 
	isReadQuestionParamManager,
	isReadQuestionParamUser,
} from '../api/IsCheck'
import { 
	ApiResponse,
	ApiResponseVals,
	Api_CreateMessage,
	Api_ReadMessage,
	Api_UpdateMessage,
	Api_DeleteMessage,
	Api_CreateMessage_Param,
	Api_UpdateMessage_Param,
	Api_DeleteMessage_Param,
	ApiResponse_Message,
	ApiResponse_Question,
	Api_CreateChat,
	Api_DeleteChatAsManager,
	Api_ReadChatAsManager,
	Api_ReadChatAsUser,
	ApiResponse_Chat,
	Api_DeleteQuestion,Api_DeleteQuestionAsUser,Api_DeleteQuestionAsManager,Api_DeleteQuestion_Param,
	Api_ReadChat,
	Api_CreateQuestion,Api_CreateQuestionAsUser,Api_CreateQuestionAsManager,
	Api_CreateQuestion_Param,
	Api_ReadQuestion_Param,
	Api_ReadQuestion,Api_ReadQuestionAsManager,Api_ReadQuestionAsUser,
	Api_UpdateAnswerReaction,Api_UpdateAnswerReaction_Param,
	Api_UpdateAnswerIsRead,Api_UpdateAnswerIsRead_Param,Api_UpdateQuestion_Param,Api_UpdateQuestion
} from '../../type/type.api'
import { 
	mock_createMessage,
	mock_readMessage,
	mock_updateMessage,
	mock_deleteMessage,
	mock_readChatAsManager,
	mock_readChatAsUser,
	mock_createChat,
	mock_deleteChatAsManager,
	mock_createQuestion,mock_createQuestionAsManager,
	mock_readQuestionAsUser,mock_readQuestionAsManager,
	mock_deleteQuestionAsUser,mock_deleteQuestionAsManager,
	mock_updateAnswerReaction,mock_updateAnswerIsRead,mock_updateQuestionAsManager
} from '../../__mock__/api/message'
import { ApiList } from '../../asset/constant/Api'
import { useFetchApi, useUser } from '../../service/hook/index'
import { useUserState } from '../../context/user/UserContext'
import { useProgressDispatch } from '../../context/progress/ProgressContext'
import { sortByKey } from '../../service/app/SortByKey'

export const useMessage = () => {
	const { user,manager,token,useMocked }= useUserState()
	const { updateError, updateLoading }= useProgressDispatch()
	const { getApi, postApi, isLoading, error }= useFetchApi()
	const { fetchUser }= useUser()
	const role:'user'|'manager'= manager!==null ?'manager' :'user'

	const createQuestion= async <T extends Api_CreateQuestion_Param<typeof role>>(props: T ):Promise<ApiResponse_Question<Api_CreateQuestion>> => {
		try{		
			const urlString:string|null= role=='manager'
				? `${ApiList.question.createAnswerAsManager.url}` 
				: role==='user'
					? `${ApiList.question.createAnswerAsUser.url}/${props.id}`
					:null
			
			if(urlString===null){
				return { state: 'fail', error: 'url is missing'}
			}
			const response:Api_CreateQuestion|null= manager
					? await getApi<Api_CreateQuestionAsManager,{}>(urlString,token,props.param)
					: user
						? await getApi<Api_CreateQuestionAsUser,{}>(urlString,token,props.param)
						: null
			return { 
				state: 'success', 
				data: useMocked 
					? manager!==null
						? mock_createQuestionAsManager 
						: user!==null
							? mock_createQuestion
							: null
					:response 
			}		
		}catch(e){
			return { state: 'fail', error: e }
		}
	}
	
	const readQuestion= async <T extends Api_ReadQuestion_Param>(props: T ):Promise<ApiResponse_Question<Api_ReadQuestion>> => {
		try{
			const urlParam:string|null= isReadQuestionParamManager(props)	
				? `${props.date}/${props.datetime}`
				:	isReadQuestionParamUser(props)
					? `${props.id}`
					: null

			const urlString= manager 
				? `${ApiList.question.readAnswerAsManager.url}/${urlParam}` 
				: `${ApiList.question.readAnswerAsUser.url}/${urlParam}`
		
			const response:Api_ReadQuestion|null= manager
					? await getApi<Api_ReadQuestionAsManager,{}>(urlString,token)
					: user
						? await getApi<Api_ReadQuestionAsUser,{}>(urlString,token)
						: null
			return { 
				state: 'success', 
				data: useMocked 
					? manager!==null
						? mock_readQuestionAsManager 
						: user!==null
							? mock_readQuestionAsUser
							: null
					:response 
			}		
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const deleteQuestion= async <T extends Api_DeleteQuestion_Param>(props: T ):Promise<ApiResponse_Question<Api_DeleteQuestion>> => {
		try{
			const urlParam:string= `${props.id}`

			const urlString= manager 
				? `${ApiList.question.deleteAnswerAsManager.url}/${urlParam}` 
				: `${ApiList.question.deleteAnswerAsUser.url}/${urlParam}`
		
			const response:Api_DeleteQuestion|null= manager
					? await getApi<Api_DeleteQuestionAsManager,{}>(urlString,token)
					: user
						? await getApi<Api_DeleteQuestionAsUser,{}>(urlString,token)
						: null
			return { 
				state: 'success', 
				data: useMocked 
					? manager!==null
						? mock_deleteQuestionAsManager 
						: user!==null
							? mock_deleteQuestionAsUser
							: null
					:response 
			}		
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const updateAnswerReaction= async <T extends Api_UpdateAnswerReaction_Param>(props: T ):Promise<ApiResponse_Question<Api_UpdateAnswerReaction>> => {
		try{
			const urlParam:string= `${props.id}/${props.type}`
			const urlString= `${ApiList.question.updateAnswerReaction.url}/${urlParam}` 			
			const response:Api_UpdateAnswerReaction|null= await getApi<Api_UpdateAnswerReaction,{}>(urlString,token)				
			if(!useMocked && response===null){
				return {
					state: 'fail', error: 'null-response'
				}
			}
			return { 
				state: 'success', 
				data: useMocked 
					?	mock_updateAnswerReaction 
					: response 
			}		
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const updateAnswerIsRead= async <T extends Api_UpdateAnswerIsRead_Param>(props: T ):Promise<ApiResponse_Question<Api_UpdateAnswerIsRead>> => {
		try{
			const urlString= `${ApiList.question.updateAnswerIsRead.url}` 			
			const response:Api_UpdateAnswerIsRead|null= await getApi<Api_UpdateAnswerIsRead,{}>(urlString,token)				
			return { 
				state: 'success', 
				data: useMocked 
					?	mock_updateAnswerIsRead
					:response 
			}		
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const updateQuestion= async <T extends Api_UpdateQuestion_Param>(props: T ):Promise<ApiResponse_Question<Api_UpdateQuestion>> => {
		try{
			const urlString= `${ApiList.question.updateQuestionAsManager.url}/${props.id}` 			
			const response:Api_UpdateQuestion|null= await getApi<Api_UpdateQuestion,{}>(urlString,token,props.param)				
			return { 
				state: 'success', 
				data: useMocked 
					?	mock_updateQuestionAsManager
					:response 
			}		
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const createMessage= async <T extends Api_CreateMessage_Param>(data:T):Promise<ApiResponse_Message<Api_CreateMessage>> => {
		try{
			const data= {
				"content": "Dritte Message eines Managers",
				"employeeType": 0,
				"priority": 1
		  }
			const urlString= ApiList.message.createMessage.url
			const response:Api_CreateMessage|null= await getApi<Api_CreateMessage,{}>(urlString,token,data)
			if(!useMocked && response===null){
				return {
					state: 'fail',
					error: 'null-response'
				}
			}
			return { 
				state: 'success', 
				data: useMocked ?mock_createMessage :response 
			}
			
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const listInboxItems= async ():Promise<MessageItem[]> => {
		try{
			const response:ApiResponse_Chat<Api_ReadChat> = await readChat()
			if(response.state==='success' && response.data!==null){
				const returnList:MessageItem[]= await Promise.all(
					response.data.chat.map( async (item:Message,_) => {
						const userData:User= await fetchUser(item.sendBy)
						const param:MessageItem={
							from: userData,
							item: item,
							type: 'Text'
						}
						return param
					})
				)
				if(returnList?.length) return returnList
				else return []
			}
			return []
		}catch(e){
			updateError({state: true,description:'no-message-in-the-inbox'})
			return []
		}
	}

	const listRoomItems= async (room:Room['id']):Promise<MessageItem[]> => {
		try{
				const response:ApiResponse_Chat<Api_ReadChat> = await readChat()
				
				if(response.state==='success' && response.data!==null){
					const returnList:MessageItem[]= await Promise.all(
						response.data.chat.map( async (item:Message,_) => {
							const userData:User= await fetchUser(item.sendBy)
							const param:MessageItem={
								from: userData,
								item: item,
								type: 'Text'
							}
							return param
						})
					)
					if(returnList?.length) return returnList
					else return []
				}
				return []
		}catch(e){
			updateError({state: true,description:`no-message-in-the-room-${room}`})
			return []
		}
	}

	const createChat= async ():Promise<ApiResponse_Chat<Api_CreateChat>> => {
		try{	
			const urlString= ApiList.chat.createChat.url
			const response:Api_CreateChat|null= await getApi<Api_CreateChat,{}>(urlString,token)
			return { 
				state: 'success', 
				data: useMocked ?mock_createChat :response 
			}			
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const readChat= async ():Promise<ApiResponse_Chat<Api_ReadChatAsManager|Api_ReadChatAsUser>> => {
		try{
			const urlString:string|null= manager 
				? ApiList.chat.readChatAsManager.url 
				:	user 
					? ApiList.chat.readChatAsUser.url 
					:	null		
					
			if(urlString===null){
				return { state: 'fail' , error: 'urlString is missing' }
			}else{
				const response:Api_ReadChatAsManager|Api_ReadChatAsUser|null= manager
					? await getApi<Api_ReadChatAsManager,{}>(urlString,token)
					: user
						? await getApi<Api_ReadChatAsUser,{}>(urlString,token)
						: null
				return { 
					state: 'success', 
					data: useMocked 
						? manager
							? mock_readChatAsManager 
							: user
								? mock_readChatAsUser
								: null
						:response 
				}
			}			
		}catch(e){
			return { state: 'fail' , error: e }
		}
	}
	
	const readMessage= async (room:Room['id']):Promise<ApiResponse_Message<Api_ReadMessage>> => {
		try{
			const urlString= ApiList.message.readMessage.url
			const response:Api_ReadMessage|null= await getApi<Api_ReadMessage,{}>(urlString,token)
			return { state: 'success', data: useMocked ?mock_readMessage :response }			
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const updateMessage= async (room:Room['_id']):Promise<ApiResponse_Message<Api_UpdateMessage>> => {
		try{
			const data:Api_UpdateMessage_Param={
				content: `test message update`,
				employeeType: 1,
				priority: 1
			}	
			const urlString= ApiList.message.updateMessage.url
			const response:Api_UpdateMessage|null= await postApi<Api_UpdateMessage,{}>(urlString,token,data)
			return { state: 'success', data: useMocked ?mock_updateMessage :response }			
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const deleteMessage= async (id:Api_DeleteMessage_Param):Promise<ApiResponse_Message<Api_DeleteMessage>> => {
		try{
			
			const urlString= `${ApiList.message.updateMessage.url}/id`
			const response:Api_DeleteMessage|null= await postApi<Api_DeleteMessage,{}>(urlString,token)
			return { state: 'success', data: useMocked ?mock_deleteMessage :response }			
		}catch(e){
			return { state: 'fail', error: e }
		}
	}
	const deleteChat= async (id:Api_DeleteChatAsManager_Param):Promise<ApiResponse_Chat<Api_DeleteChatAsManager>> => {
		try{
			if(manager){
				const urlString= `${ApiList.chat.deleteChatAsManager.url}/id`
				const response:Api_DeleteChatAsManager|null= await postApi<Api_DeleteChatAsManager,{}>(urlString,token)
				return { 
					state: 'success', 
					data: useMocked ?mock_deleteChatAsManager :response 
				}			
			}
			return { state: 'fail', error: 'user is not of manager-role' }
		}catch(e){
			return { state: 'fail', error: e }
		}
	}

	const filterMessage= async (
		{arr,limit}:
		{arr: Message[],limit: number}
	) => {
		try{		
			return arr
				.filter((_,index) => index < limit )
		}catch(e){
			console.log(e)
		}
	}

	return {
		listRoomItems,
		listInboxItems,
		createMessage,
		readMessage,
		updateMessage,
		filterMessage,
		deleteMessage,
		readChat,
		deleteChat,
		createChat,
		createQuestion,
		readQuestion,
		deleteQuestion,
		updateAnswerReaction,
		updateAnswerIsRead,
		updateQuestion,
	}
}
