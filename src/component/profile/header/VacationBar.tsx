import React from "react"
import { TextStyle,ViewStyle,View,Text,Dimensions } from 'react-native'
import { fontStyles } from '../../../asset/constant/FontStyles'

const { width } = Dimensions.get('window')

const VacationBar = ({c,l,cColor,lColor}:{c:number,l:number,cColor:string,lColor: string}) => {
	const barWidth:number= width * 0.6
	const styles:ViewStyle={
		backgroundColor: cColor,
		width: (barWidth / c)* c,
		borderRadius: 5,
	}
	const lStyle:TextStyle={
		backgroundColor: lColor,
		borderRadius: 5,
		width: (barWidth / c)*l,
		overflow: 'hidden',
	}
	const labelStyling= fontStyles.Profile.Header.vacation.label.style
	
	return (
		<View >
			<Text style={[{alignSelf: 'flex-end'},labelStyling]}>{c-l} left</Text>
			<View style={styles}>
				<Text style={lStyle}></Text>
			</View>
		</View>
	)
};

export default VacationBar;
