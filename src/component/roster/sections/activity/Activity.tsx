import React, { useEffect, useState } from "react"
import { useRequest } from '../../../../service/hook/index'
import { Absence, Swap, Blocker } from '../../../../type/type.request'
import LoadMoreButton from '../../LoadMoreButton'
import NoContent from '../../../app/error/NoContent'
import ActivityList from './ActivityList'
import{
	Api_ReadAbsence, Api_ReadSwapRequest
} from '../../../../type/type.api'

type ActivityTypeUnion= Absence | Swap | Blocker

const Activity = () => {
	const { fetchAbsence,fetchRequest } = useRequest()
	const [list,setList]= useState<ActivityTypeUnion[]>([])
	const [limit,setLimit]= useState<number>(1)

	async function handleList(limit:number){
		try{
			const param:ActivityTypeUnion[]= []
			const absenceResponse:Api_ReadAbsence|null= await fetchAbsence()			
			const swapResponse:Api_ReadSwapRequest|null= await fetchRequest()			
			if(absenceResponse!==null && absenceResponse.absences.length){
				absenceResponse.absences.map( i => param.push(i))
			}
			if(swapResponse!==null){
				swapResponse.shiftSwapsOfferedToYou.map( i => param.push(i))
				swapResponse.shiftSwapsOfferedByYou.map( i => param.push(i))
			}
			const filtered:ActivityTypeUnion[]= param.filter((item,index) => index<limit)
			setList(filtered)
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleList(limit)
	},[limit])

	return (
		<>
			{list.length
				? <ActivityList data={list} limit={limit} />
				: <NoContent text={`No Activities found`} />
			}
			<LoadMoreButton onClickFn={() => setLimit(limit+parseInt('1'))} />
		</>
	)
}

export default Activity
