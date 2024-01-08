import React from "react"
import { View,Text } from 'react-native'
import { AppLogo } from './AppLogo'
import { AuthStackType } from "../../type/type.nav"
import { styles } from "./style/Header"

const Header = ({logo}:{logo:boolean}) => {
	
  return (
		<>
			<View style={styles(logo).logo}>
				<AppLogo state={logo} />
			</View>
			<Text style={styles(logo).appName}>{`Next Week`}</Text>		
		</>
  )
}

export default Header
