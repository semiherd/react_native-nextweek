import React, { useState, useEffect } from "react"
import { ContainerStyles } from '../../../../../type/type.app'
import { ActivityTypeUnion } from '../../../../../type/type.home'
import { useRequest } from '../../../../../service/hook/index'
import { ActivityTabId } from '../../../../../type/type.home'
import {
	Api_ReadSwapRequest,
	Api_ReadAbsence,
	Api_ReadBlocker,
} from '../../../../../type/type.api'
import ActivityCard from './ActivityCard'

type dataType= ActivityTypeUnion

const ActivityList= ( {containerStyleObj,active}:{containerStyleObj:ContainerStyles,active:ActivityTabId|null}):React.ReactElement => {
	const { fetchRequest, fetchBlocker, fetchAbsence }= useRequest()

	const [itemData,setItemData]= useState<dataType[]>([])

	async function handleData(){
		try{
			if(active===null){
				setItemData([])
			}else if(active==='swap'){
				const data:Api_ReadSwapRequest|null= await fetchRequest()
				if(data!==null)	setItemData(data.shiftSwapsOfferedToYou)
			}else if(active==='event'){
				const data:Api_ReadBlocker|null= await fetchBlocker()
				if(data!==null) setItemData(data.preferredShifts)
			}else if(active==='vacation'){
				const data:Api_ReadAbsence|null= await fetchAbsence()			
				if(data!==null) setItemData(data.absences)
			}			
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleData()
	},[active])

	return <>
		{
			itemData?.map((item:dataType) => <ActivityCard key={item._id} data={item} active={active} styling={containerStyleObj} />
		)}
	</>		
}
export default ActivityList