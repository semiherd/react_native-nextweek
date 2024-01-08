import React, { useEffect, useState } from "react"
import CardContainer from './card/CardContainer'
import CardList from './CardList'
import LoadMoreButton from '../../roster/LoadMoreButton'
import { useRequest } from '../../../service/hook/UseRequest'
import { useUserState } from '../../../context/user/UserContext'
import { Api_ReadSwapRequest, Api_ReadBlocker, Api_ReadAbsence } from '../../../type/type.api'
import { ProfileSection, CardContent } from '../../../type/type.profile'
import { Absence, Blocker, Swap } from '../../../type/type.request'
import { User } from '../../../context/user/type.user'
import { AuthState } from "../../../context/user/type.auth"

const SectionContainer = <TValue extends ProfileSection>(
	{type,limit} : {type:TValue,limit:number}
) => {
	const { fetchRequest,fetchBlocker,fetchAbsence } = useRequest()
	const { user }:AuthState = useUserState()
	
	const [list,setList]= useState<CardContent[]|null>(null)
	const [eof,setEof]= useState<boolean>(false)
	const [cardStyle,setCardStyle]= useState<'bottomLine'|'borderLine'>('borderLine')

	const containerStyling= {
		borderWidth: 0.5,
		containerWidth: 0.8,
		borderRadius: 10,
		marginV: 0.04,
		paddingH: 0.02,
	}
	
	async function loadMoreFn(type: ProfileSection){
		try{
	
			if(list?.length){
				const limit= list.length? list.length + 5 : 5
				await handleList(type,limit)
			}
		}catch(e){
			console.log(e)
		}
	}

	async function limitItems<T>(arr:T[]):Promise<void>{
		try{
			if(arr.length && arr?.length<limit) {
				setEof(true) 
			}
		}catch(e){
			console.log(e)
		}
	}

	const handleList= 
		async (type: ProfileSection,limit:number) => {
				try{
					
					if(type==='swap-out'){
						const data:(Api_ReadSwapRequest|null)= await fetchRequest()		
						if(data?.shiftSwapsOfferedByYou.length) await limitItems<Swap>(data.shiftSwapsOfferedByYou) 
						setList(data?.shiftSwapsOfferedByYou ?data?.shiftSwapsOfferedByYou :null)	
						setCardStyle('bottomLine')
					}else if(type==='swap-in'){
						const data:(Api_ReadSwapRequest|null)= await fetchRequest()		
						if(data?.shiftSwapsOfferedToYou.length) await limitItems<Swap>(data.shiftSwapsOfferedToYou) 
						setList(data?.shiftSwapsOfferedToYou ?data?.shiftSwapsOfferedToYou :null)	
						setCardStyle('bottomLine')
					}else if(type=='blocker'){
						const data:(Api_ReadBlocker|null)= await fetchBlocker()
						if(data?.preferredShifts.length) await limitItems<Blocker>(data.preferredShifts) 		
						setList(data?.preferredShifts ?data.preferredShifts : null)	
						setCardStyle('bottomLine')
					}else if(type=='absence'){
						const data:(Api_ReadAbsence|null)= await fetchAbsence()
						if(data?.absences.length) await limitItems<Absence>(data.absences) 
						setList(data?.absences ?data.absences : null)	
						setCardStyle('bottomLine')
					}
				}catch(e){
					console.log(e)
				}
			}

	useEffect(() => {
		handleList(type,limit)
	},[])

	return (
		<CardContainer styling={containerStyling} >
			<>
				<CardList<typeof type> data={list} type={type} cardStyle={cardStyle} />
				{!eof && <LoadMoreButton onClickFn={() => loadMoreFn(type)} /> }	
			</>
		</CardContainer>
	)
}

export default SectionContainer
