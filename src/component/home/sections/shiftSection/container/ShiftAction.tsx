import React,{ useState } from "react"
import { UserButton } from '../../../../app/button/index'
import { ShiftType } from '../../../../../type/type.shift'
import { useShift } from '../../../../../service/hook/UseShift'
import { useProgressDispatch } from "../../../../../context/progress/ProgressContext"
import { Api_UpdateShift, UpdateShiftOptions } from "../../../../../type/type.api"

const ShiftAction = (
	props:ShiftType
) => {
	const { updateShift }= useShift()
	const { updateError }= useProgressDispatch()
	const [label,setLabel]= useState<'Start Shift'|'End Shift'|'Shift Ended'>(props.ending
		? "Shift Ended"
		: props.starting
			? "End Shift"
			: "Start Shift"
	)

	async function updateFn():Promise<void>{
		try{		
			const type:UpdateShiftOptions|null= props.ending ?null :props.starting ?'shiftEnded' :'shiftStarted'
			if(type!==null){
				const response:Api_UpdateShift|null= await updateShift<string>(props._id,type)
				if(response.changed){
					setLabel('End Shift')
				}
			}
		}catch(e){
			updateError({
				state: true,
				error: e,
				description: 'Update Shift Failed'
			})
		}
	}
	return 	<UserButton 
						buttontext={label}
						onClickFn={updateFn}
						onClickParam= {{id:props._id}}
						useBorder={true}
						width={0.25}
						borderStyles={{
							borderRadius: 13,
						}}
						fontStyles={{fontSize:13,fontWeight:'500'}}
					/>
}

export default ShiftAction
