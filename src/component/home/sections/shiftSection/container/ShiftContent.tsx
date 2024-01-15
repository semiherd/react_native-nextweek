import React from "react"
import { FontStyling } from "../../../../../type/type.app"
import { ShiftType } from '../../../../../type/type.shift'
import TimeItem from '../../../TimeItem'

import {withShiftLabel} from '../../../../app/text/index'

const TimeComponent= withShiftLabel(TimeItem)

const ShiftContent = (props:ShiftType & {font:FontStyling}) => {
	
	return 	<TimeComponent 
						type="shift" 
						data={{starting:props.starting,ending:props.ending} }
						font={props.font} 
					/>	
}

export default ShiftContent;
