import React,{useEffect, useState} from "react"
import { Pressable, ScrollView, Dimensions } from 'react-native'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { Color } from '../../../asset/constant/Color'
import { sectionList } from './StackList'
import { AuthState } from "../../../context/user/type.auth"
import { Manager,User } from "../../../context/user/type.user"
import { SettingSectionType } from '../../../type/type.profile'
import { useUserDispatch, useUserState } from "../../../context/user/UserContext"
import ProfileHeader from '../ProfileHeader'
import SettingCard from './SettingCard'
import { NavButtonProps } from '../../../type/type.nav'
import { NavButton, NavigationButton } from "../../app/button"

const { height} = Dimensions.get('window')

const ProfileSetting = () => {
	const { user, manager }:AuthState= useUserState()
	const { signOut }= useUserDispatch()
	const [data,setList]=useState<SettingSectionType[]>([])
	
	async function handleList(){
		try{
			const response:SettingSectionType[]=[]
			await Promise.all(sectionList.map(section => {
				if(section._id==='Contact'){
					const data:SettingSectionType= {
						...section,
						item:[
							{header: 'name', value: user ?user.name :manager	?manager.name :''} ,
							{header: 'email', value: user ?user.email :manager ?manager.email :''}
						]
					}
					response.push(data)
				}else if(section._id==='Security'){
					const data:SettingSectionType= {
						...section,
						item:[
							{header: 'password', value: '*****'},
						]
					}
					response.push(data)
				}else if(section._id==='Personal'){
					const data:SettingSectionType= {
						...section,
						item:[
							{header: 'postalCode', value: user ?user.postalCode :manager ?manager.postalCode :'' },
						]
					}
					response.push(data)
				}
			}))
			setList(response)
		}catch(e){
			console.log(e)
		}
	}

	const SignOutProps:NavButtonProps={
		text: 'Sign Out',
		useBorder: true,
		font: fontStyles.Auth.signup.font.style,
		width: 0.3,
		height: 0.1,
		border: {
			borderRadius: 20,
		}
	}

	async function onSignOut():Promise<boolean> {
		try{
			await signOut()
			return true
		}catch(e){
			console.log(e)
			return false
		}
	}
	
	useEffect(() => {
		handleList()
	},[user])

	return (
		<>
			<ProfileHeader backbutton setting={false} />
			<ScrollView 
				contentContainerStyle={{
					backgroundColor:Color.white,
					paddingBottom: height * 0.05
				}}
			>
				{data.map((item: SettingSectionType, index:number) => <SettingCard key={index.toString()} {...item} /> )}
				<Pressable onPress={() =>onSignOut() }>
					<NavigationButton styling={SignOutProps} />
				</Pressable>
			</ScrollView>
		</>
	)
}

export default ProfileSetting