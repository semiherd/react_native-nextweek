import React, { useEffect } from "react"
import { NavigationContainer } from '@react-navigation/native'
import { NavConProps } from '../type/type.nav'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const WithNavCon = <TProps extends NavConProps>(
	Component:React.ComponentType<TProps>,
) => {
	
	return (props:TProps ) => {
		
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
