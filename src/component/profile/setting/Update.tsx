import React from "react"
import { Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { styles } from './style'
import SubContainer from '../../app/layout/SubContainer'
import InputWithButton from './InputWithButton'

const Update = ({route}:any) => {
	const { contact }= fontStyles.Profile.Setting

	return (	
			<GestureHandlerRootView style={{flex:1}}> 
				<SubContainer styles={styles.container}>
					<Text style={styles.title}>{contact.text.title}</Text>
					<Text style={styles.value}>{contact.text.value}</Text>
				</SubContainer>
				<InputWithButton field={route.params.field}/>
			</GestureHandlerRootView>
  )
}

export default Update
