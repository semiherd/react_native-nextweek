import React, { useState, useEffect } from "react"
import { ActivityItem } from './tab/index'
import { useUser,useRequest } from '../../../../service/hook/index'
import { User } from "../../../../context/user/type.user"
import { UserAvatar } from "../../../app/image/type.image"
import { ActivityTypeUnion } from '../../../../type/type.home'
import { isAbsence, isBlocker, isSwap } from "../../../../service/request/HandleActivity"
import { Swap, Blocker, Absence } from '../../../../type/type.request'
import { useProgressDispatch } from "../../../../context/progress/ProgressContext"
import { ApiResponse, Api_UpdateSwapOffer } from "../../../../type/type.api"
import { ContainerStyles } from "../../../../type/type.app"
import { ActivityTabId } from '../../../../type/type.home'
import AvatarImage from '../../../app/image/AvatarImage'
import ActivityLayout from './ActivityLayout'
import DeclineIcon from './tab/DeclineIcon'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const CardWithUser= <T extends ActivityTypeUnion>(props:
	{
		Action: React.JSX.Element
		Content: React.JSX.Element
		data: T
		styling: ContainerStyles
		active: ActivityTabId|null
	}
) => {
	const { Action, Content, data } = props
	const { fetchUser }= useUser()
	const { updateSwap }= useRequest()
	const { updateError }= useProgressDispatch()
	
	const [user,setUser]= useState<UserAvatar|null>(null)
	const [removed,setRemoved]=useState<typeof props.data._id|null>(null)

	async function onDecline(){
		try{			
			if(isSwap(props.data)){
				const response:Api_UpdateSwapOffer|null= await updateSwap(props.data._id,'revoked')
				if(response===ApiResponse.swapUpdate.success) {
					setRemoved(props.data._id)
				}
			}else{
				return null			
			}
		}catch(e){
			updateError({
				state:true,
				error: 'error on CardWithUser-onDeclineFn component',
				description: 'Activity-Decline-Fn-Error'
			})
		}
	}
	
	const avatarStyling={
		width: width * 0.18,
		height: width * 0.18,
	}
	
	async function getAvatar(){
		try{
			const param:User|null= await getUserInfo()
			if(param!==null){
				const userAvatar:UserAvatar= {
					_id: param._id,
					name: param.name,
					image: param.image,
				}
				setUser(userAvatar)
			}else setUser(null)
		}catch(e){
			console.log(e)
		}
	}

	async function getUserInfo():Promise<User|null>{
		try{			
			if(isAbsence(data)){
				const {user}:Absence = data
				const userData:User|null= await fetchUser(user)
				return userData!==null ?userData :null
			}else if(isBlocker(data)){
				const {user}:Blocker = data
				const userData:User|null= await fetchUser(user)
				return userData!==null ?userData :null
			}else if(isSwap(data)){
				const {userRequesting}:Swap = data
				const userData:User|null= await fetchUser(userRequesting)
				return userData
			}else
				return null			
		}catch(e){
			console.log(e)
			return null
		}
	}

	const componentWidth:number= 0.75
	
	useEffect(() => {
		getAvatar()
	},[data])

	return (
		<>{removed=== data._id
			? null
			:	<ActivityItem key={`${ props.active}_${data._id}`} styles={ props.styling} >
					<ActivityLayout
						w={componentWidth}
						declineIcon={<DeclineIcon text="X" onClickFn={onDecline}/>}
						userAvatar={user ?<AvatarImage data={user} styling={avatarStyling} /> :null} 
						content={Content}			
						action={Action}			
					/>
				</ActivityItem>
			}
		</>
	)
}
export default CardWithUser

