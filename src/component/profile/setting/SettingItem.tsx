import React from "react"
import { View } from 'react-native'
import { Row } from '../../app/layout/Layout'

type TitleNavProps= {
	left: React.ReactElement
	right: React.ReactElement
}

const TitleNav = (props:TitleNavProps) => {
		
	return (
		<Row rowWidth={0.8} alignOption={`space-between`}>
			<>
				<View style={{alignSelf:'center'}}>{props.left}</View>
				<View style={{alignSelf:'center'}}>{props.right}</View>
			</>
		</Row>
	)
};

export default TitleNav;
