import React from "react"
import {styles} from './style/Title'
import {View,Text} from 'react-native'

const Title = (props:{title:string,subtitle?:string}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{props.title}</Text>
			{props.subtitle && <Text style={styles.subtitle}>{props.subtitle}</Text>}
		</View>
	)
}

export default Title;
