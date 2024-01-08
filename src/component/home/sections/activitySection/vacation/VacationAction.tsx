import React, { useState } from 'react'
import { Absence } from '../../../../../type/type.request'
import { Col } from '../../../../app/layout/Layout'
import { UserButton } from '../../../../app/button/index'
import { useRequest } from '../../../../../service/hook'

type Label= 'Accept' | 'Accepted' | 'Denied'
type AcceptParamType= {id:Absence['_id'],data:{absence:Absence}}

const VacationAction= (props:Absence) => {
	const { updateAbsence }= useRequest()
	const [label,setLabel]= useState<Label>('Accept')
	
	const onAccept= async (props:AcceptParamType) => {
		try{
			console.log('accept clicked for',props)
			await updateAbsence(props.id,props.data)
			setLabel('Accepted')
		}catch(e){
			console.log(e)
		}
	}

	return (
		<Col colNr={0} alignOption="center">
			<>
				<UserButton<AcceptParamType>
					onClickParam= {{id:props._id,data:{absence:props}}}
					buttontext={label}
					onClickFn={onAccept}
					useBorder={true}
					fontStyles={{fontSize:12,fontWeight:'500'}}		
				/>
			</>
		</Col>
	)
}
export default VacationAction