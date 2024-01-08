import React, { useState, useEffect } from "react"
import { ContainerStyles } from '../../../../../type/type.app'
import { SwapContent,SwapAction } from '../swap/index'
import { VacationContent,VacationAction } from '../vacation/index'
import { EventContent, EventAction } from '../event/index'
import { ActivityItem } from './index'
import { ActivityTypeUnion } from '../../../../../type/type.home'
import { Absence, Swap, Blocker } from '../../../../../type/type.request'
import { useRequest } from '../../../../../service/hook/index'
import { ActivityTabId } from '../../../../../type/type.home'
import { isAbsence, isBlocker, isSwap } from "../../../../../service/request/HandleActivity"
import CardWithUser from '../CardWithUser'
import {
	Api_ReadSwapRequest,
	Api_ReadAbsence,
	Api_ReadBlocker,
} from '../../../../../type/type.api'

type dataType= ActivityTypeUnion

const ActivityList= ( {containerStyleObj,active}:{containerStyleObj:ContainerStyles,active:ActivityTabId|null}):React.ReactElement => {
	const { fetchRequest, fetchBlocker, fetchAbsence }= useRequest()

	const [itemData,setItemData]= useState<dataType[]>([])
	
	const styling= {
		containerWidth: containerStyleObj.containerWidth
	}

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
		{itemData.map((item:dataType) => {
			return (
				<ActivityItem key={`${active}_${item._id}`} styles={containerStyleObj} >
					<>{
						isSwap(item) 
							? <CardWithUser<Swap> styling={styling} data={item} Content={SwapContent} Action={SwapAction} />
							: isAbsence(item)
								? <CardWithUser<Absence> styling={styling} data={item} Content={VacationContent} Action={VacationAction} />
								: isBlocker(item)
									? <CardWithUser<Blocker> styling={styling} data={item} Content={EventContent} Action={EventAction} />
									: null
					}</>
				</ActivityItem>
			)
		})}
	</>		
}
export default ActivityList