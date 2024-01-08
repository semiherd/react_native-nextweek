import React from 'react'
import AppNavigator from './src/navigation/AppNavigator'
import RNPermissions, {
  NotificationOption, 
  PERMISSIONS, 
  Permission
} from 'react-native-permissions'

export default function App() {
    return (
      <AppNavigator />
    )
}