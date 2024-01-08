import React, { useEffect, useState } from 'react'
import { Swap } from '../../../../../type/type.request'
import { UserTitle } from './index'
import { withShiftLabel } from '../../../../app/text/index'
import { fontStyles } from '../../../../../asset/constant/FontStyles'
import { useShift,useUser } from '../../../../../service/hook/index'
import { ShiftType } from '../../../../../type/type.shift'
import { UserAvatar } from '../../../../app/image/type.image'
import TimeItem from '../../../TimeItem'

const TimeComponent= withShiftLabel(TimeItem)

const SwapContent= (props:Swap) => {
	const { readShift }= useShift()
	const { fetchUser }= useUser()
	const {_id, userRequesting,userOffering, shiftRequested, shiftOffered }=props
	const [ user,setUser]= useState<{requesting:UserAvatar|null,offering:UserAvatar|null}>({offering:null,requesting:null})
	const [ shift,setShift]= useState<{offered:ShiftType|null,requested:ShiftType|null}>({offered:null,requested:null})
	
	async function handleShiftData(){
		try{
			const shiftRequestedList:ShiftType[]|null= await readShift({_id:shiftRequested})
			const shiftOfferedList:ShiftType[]|null= await readShift({_id:shiftOffered})
			setShift({
				offered:  shiftOfferedList===null ?null :shiftOfferedList[0],
				requested: shiftRequestedList===null ?null :shiftRequestedList[0]
			})
		}catch(e){
			console.log(e)
		}
	}

	async function handleData(){
		try{
			const requesting:UserAvatar|null= await fetchUser(userRequesting)
			const offering:UserAvatar|null = await fetchUser(userOffering)
			
			setUser({
				requesting: requesting,
				offering: offering,
			})
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleShiftData()
	},[])
	
	useEffect(() => {
		if(shift && shift!==null) handleData()
	},[shift])

	return (
		<>
			{user?.offering 
				? <UserTitle text={[user.offering.name,fontStyles.Home.Activity.swap.type.text]} styling={{name:fontStyles.Home.Activity.swap.name.font.style,type:fontStyles.Home.Activity.swap.type.font.style}} />
				: null
			}
			{shift.requested
				? <TimeComponent type="shift" data={{starting: shift?.requested?.starting,ending:shift?.requested?.ending}} font={fontStyles.Home.Activity.swap.time.font.style} />
				: null
			}
		</>	
	)
}
export default SwapContent