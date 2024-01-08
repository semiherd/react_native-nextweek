import React from "react"
import TimeItem from '../../../home/TimeItem'
import { Col } from '../../../app/layout/Layout'
import { fontStyles } from '../../../../asset/constant/FontStyles'
import { StartEnd } from '../../../../type/type.shift'
import { withShiftLabel } from '../../../app/text/index'

const FormattedLabel= withShiftLabel(TimeItem)

const ShiftTime= (props:{time:StartEnd}) => {
	
	return <>
		<Col colNr={1} alignOption="center">
			<>
				<FormattedLabel type="weekday" data={props.time} font={fontStyles.Roster.MyShiftItem.dayFont} />
				<FormattedLabel icon type="timeRange" data={props.time} font={fontStyles.Roster.MyShiftItem.timeFont} />
			</>
		</Col>
	</>
}
export default ShiftTime