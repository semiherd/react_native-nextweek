import React, { useEffect } from "react"
import { NavigationContainer } from '@react-navigation/native'
import { NavConProps } from '../type/type.nav'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useProgressState } from '../context/progress/ProgressContext'

const WithNavCon = <TProps extends NavConProps>(
	Component:React.ComponentType<TProps>,
) => {
	
	return (props:TProps ) => {
		const progress= useProgressState()

		useEffect(() => {
			console.log('progress context update', progress)
		},[progress])
		
		return (
			<SafeAreaProvider>
				<NavigationContainer>
					<Component {...props} />
				</NavigationContainer>
			</SafeAreaProvider>
		)
	}
}

export { WithNavCon }
