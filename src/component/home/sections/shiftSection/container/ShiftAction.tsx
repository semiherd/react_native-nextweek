import React from "react"
import { UserButton } from '../../../../app/button/index'
import { ShiftType } from '../../../../type/type.shift'
import { useShift } from '../../../../../service/hook/UseShift'

const ShiftAction = (
	props:ShiftType
) => {
	const { startShift }= useShift()
	
	return <UserButton 
				buttontext={props.finished
					?"Shift Ended"
					:props.started
					?"End Shift"
					:"Start Shift"
				}
				onClickFn={() =>startShift}
				onClickParam= {{id:props._id}}
				useBorder={true}
				width={0.25}
				fontStyles={{fontSize:13,fontWeight:'500'}}
			/>
}

export default ShiftAction;
