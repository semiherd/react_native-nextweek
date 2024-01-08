import React, { useEffect, useState } from "react"
import { ActivityView,ActivityContent,ActivityTime } from './index'
import { fontStyles } from "../../../../asset/constant/FontStyles"
import { ActivityItem, ActivityType } from '../../../../type/type.roster'
import { Absence, Swap, Blocker } from '../../../../type/type.request'
import { User} from '../../../../context/user/type.user'
import AvatarContainer from './AvatarContainer'
import CardContainer from "../../../app/layout/CardContainer"
import { useUser, useShift } from "../../../../service/hook"
import { isAbsence, isBlocker, isSwap } from "../../../../service/request/HandleActivity"

type ActivityTypeUnion= Absence | Swap | Blocker

const ActivityCard= <T extends ActivityTypeUnion>({data}:{data:T}):React.ReactElement => {
	const [avatar,setAvatar]= useState<(User|null)[]>()
	const { fetchUser }= useUser()

	async function getPeoplelist<T extends ActivityTypeUnion>(item:T):Promise<(User|null)[]>{
		try{	
			if(isAbsence(item)){
				const userId= item.user
				const data:User|null= await fetchUser(userId)
				return data!==null ?[data] :[]
			}else if(isBlocker(item)){
				const userId= item.user
				const data:User|null= await fetchUser(userId)
				return data!==null ?[data] :[]
			}else if(isSwap(item)){
				const {userRequesting, userOffering}= item
				const data:(User|null)[]= await Promise.all([
					fetchUser(userRequesting),
					fetchUser(userOffering)
				])
				return data.length ?data :[]
			}
			return []
		}catch(e){
			return []
		}
	}
	
	async function handleAvatar(data:T):Promise<void>{
		try{
			if(isAbsence(data)){
				const users:(User|null)[]= await getPeoplelist<Absence>(data)
				setAvatar(users)
			}
			if(isSwap(data)){
				console.log('swap:',data)
				const users:(User|null)[]= await getPeoplelist<Swap>(data)
				setAvatar(users)
			}
			if(isBlocker(data)){
				const users:(User|null)[]= await getPeoplelist<Blocker>(data)
				setAvatar(users)
			}
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		if(data) handleAvatar(data)
	},[data])

	return (
		<>
		{data && 
			<CardContainer 
				styling={{
					container: fontStyles.Roster.Container.styles,
					width: 0.9,
					align: 'center',
				}}
			>
				<ActivityView 
					alignOption="center"
					content={<ActivityContent data={data}/>}	
					time={<ActivityTime data={data}/>}
					image={<AvatarContainer data={avatar as (User|null)[]} styling={fontStyles.Roster.Activity.avatar.style} />}	
				/>			
			</CardContainer>
		}
		</>
	)
}
export default ActivityCard