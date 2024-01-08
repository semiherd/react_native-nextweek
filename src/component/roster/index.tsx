import React from "react"
import { View } from 'react-native'
import {styles} from './style/RosterList'
import RosterList from './RosterList'

const RosterHome= () => {

	return (   
		<View style={[
			styles.container,
		]}>                          
			<RosterList />			
		</View>     
	)
}
export default RosterHome

