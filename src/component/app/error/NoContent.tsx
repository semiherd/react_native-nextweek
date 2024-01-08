import React from "react"
import {View,Text} from 'react-native'
import { styles } from "./style/NoContent";

const NoContent = (props:{text:string}) => {
  	return (
		<View style={styles.container}>
			<Text style={styles.text}>{props.text}</Text>
		</View>
 	 )
}

export default NoContent;
