import React,{ useEffect, useState } from "react"
import { useRoster } from '../../../../service/hook/index'
import { ShiftType } from '../../../type/type.shift'
import { Api_ReadRosterShift } from "../../../../type/type.api"
import LoadMoreButton from '../../LoadMoreButton'
import ShiftPlanList from './ShiftPlanList'

const Shift = () => {
	const { readRosterShift } = useRoster()
	const [list,setList]= useState<ShiftType[]>([])

	async function handleList(){
		try{
			const data:Api_ReadRosterShift= await readRosterShift()
			setList(data.shifts)
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleList()
	},[])

	return (
		<>
			<ShiftPlanList data={list} limit={10} />
			<LoadMoreButton onClickFn={() => readRosterShift()} />
		</>
	)
};

export default Shift
