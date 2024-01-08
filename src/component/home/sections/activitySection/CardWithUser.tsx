import React, { useState, useEffect } from "react"
import { ContainerStyles } from '../../../../type/type.app'
import { useUser } from '../../../../service/hook/index'
import { User } from "../../../../context/user/type.user"
import { UserAvatar } from "../../../app/image/type.image"
import { ActivityTypeUnion } from '../../../../type/type.home'
import { isAbsence, isBlocker, isSwap } from "../../../../service/request/HandleActivity"
import { Swap, Blocker, Absence } from '../../../../type/type.request'
import AvatarImage from '../../../app/image/AvatarImage'
import ActivityLayout from './ActivityLayout'
import DeclineIcon from './tab/DeclineIcon'

function CardWithUser<T extends ActivityTypeUnion>({ Content, Action, data, styling}:
	{
		Content: React.ComponentType<T>,
		Action: React.ComponentType<T>,
		data: T,
		styling:{
			containerWidth:ContainerStyles['containerWidth']
		}
	}
){
	const { fetchUser }= useUser()
	const [user,setUser]= useState<UserAvatar|null>(null)
	
	const avatarStyling={
		width: 50,
		height: 50,
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

	useEffect(() => {
		getAvatar()
	},[data])

	return (
		<ActivityLayout 
			declineIcon={(onDecline) => <DeclineIcon text="X" onClickFn={onDecline}/>}
			userAvatar={user ?<AvatarImage data={user as UserAvatar} styling={avatarStyling} /> :null} 
			content={<Content {...data} />}
			action={<Action {...data} />}
		/>
	)
}
export default CardWithUser

