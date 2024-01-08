import React, { useState,useEffect } from "react"
import { ShiftType } from '../../../type/type.shift'
import { fontStyles } from '../../../../asset/constant/FontStyles'
import CardContainer from '../../../app/layout/CardContainer'
import ShiftMembers from './ShiftMembers'
import NoContent from '../../../app/error/NoContent'
import { User } from '../../../../context/user/type.user'
import { useShift } from '../../../../service/hook/index'
import { UserAvatar } from "../../../app/image/type.image"

const ShiftPlan = (props:ShiftType) => {
	const [members,setMembers]= useState<UserAvatar[]>([])
	const { readPeopleInShift } = useShift()

	async function handleData():Promise<void>{
		try{
			const shifts:User[]= await readPeopleInShift({_id: props._id})		
			if(shifts.length){
				const people:UserAvatar[]= await Promise.all(shifts.map(async (item,index) => {
					return { _id: item._id, name: item.name, image:item.image }
				}))
				setMembers(people)
			}else setMembers([])
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleData()
	},[props])

	return (
		<CardContainer
			key={`${props._id}`}
			styling={{
				container: fontStyles.Roster.Shift.cardContainer.style,
				width: 0.8,
				align: "center"
			}}
		>
			{members.length
				? <ShiftMembers data={members} shift={props}  />
				: <NoContent text={`No members in this shift`} />	
			}
		</CardContainer>
	)
}

export default ShiftPlan;
