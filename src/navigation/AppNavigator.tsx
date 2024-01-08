import React from 'react'
import {WithNavCon} from './WithNavCon'
import {StackNav} from './StackNav'
import { ModalProvider } from '../context/modal/ModalContext'
import { UserProvider } from '../context/user/UserContext'
import { ProgressProvider } from '../context/progress/ProgressContext'

const MainNavigation = WithNavCon(StackNav);

export default function AppNavigator() {
	
	return (
		<UserProvider>
		<ModalProvider>
		<ProgressProvider>
			<MainNavigation>
			</MainNavigation>
		</ProgressProvider>
		</ModalProvider>
		</UserProvider>
	)
}