import React from "react"
import { View,Text, } from 'react-native'
import { fontStyles } from '../../asset/constant/FontStyles'
import { Title } from '../app/text/index'
import { AuthStackType } from "../../type/type.nav"
import { styles } from "./style/Title"

const { SignIn, SignUp }= fontStyles.Auth

const TitleItem = (props:{version:number,name:AuthStackType}) => {
	const { version, name }= props

	const styling= 
		name==='SignIn'
			? SignIn
			: name==='SignUp'
				? SignUp
				: null	
	
	
	const title:string= 
		version===0
			?	name==='SignIn'
				? SignIn.title.font.text.v0
				: name==='SignUp'
					? SignUp.title.font.text.v0
					: ''	
			: version===1
				? name==='SignIn'
					?	SignIn.title.font.text.v1
					: name==='SignUp'
						? SignUp.title.font.text.v1
						: ''
				: ''


	const text:string|''= 
		version===0
			?	name==='SignIn'
				? SignIn.description.font.text.v0
				: name==='SignUp'
					? SignUp.description.font.text.v0
					: ''	
			: version===1
				? name==='SignIn'
					?	SignIn.description.font.text.v1
					: name==='SignUp'
						? SignUp.description.font.text.v1
						: ''
				: ''
	
  return (
		<View style={styles(version,name).container}>
			<>
				{styling===null
					? null
					:	<View style={styles(version,name).textContainer}>
							<Title fontStyling={styles(version,name).title} titletext={title} />
							<Text style={styles(version,name).text}>{text}</Text>
						</View>
				}
			</>
		</View>
  )
};

export default TitleItem
