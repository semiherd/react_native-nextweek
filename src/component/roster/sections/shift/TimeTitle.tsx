import React from "react"
import { Title } from '../../../app/text/index'
import { BorderStyle, FontStyling } from '../../../../type/type.app'
import { fontStyles } from '../../../../asset/constant/FontStyles';
import { View } from 'react-native'
import { styles } from './Style'
import { WeekDays } from '../../../../type/type.app'

const TimeTitle = (props:{title:WeekDays|null}) => {
	
	const fontStyling:FontStyling= fontStyles.Roster.Shift.timeTitle.font.style
	const borderStyling: BorderStyle= fontStyles.Roster.Shift.timeTitle.borderStyle

	return (
		<View style={styles(borderStyling).container}>
			<Title titletext={props.title===null ?'' :props.title} fontStyling={fontStyling} />
		</View>
	)
}

export default TimeTitle
