import React from "react"
import Header from '../app/header/Header'
import SubContainer from '../app/layout/SubContainer'
import { View,Text,ViewStyle,TextStyle} from 'react-native'
import { Color } from '../../asset/constant/Color'
import { Title } from '../app/text/index'
import { fontStyles } from "../../asset/constant/FontStyles"
import { ContainerStyles, FontStyling } from "../../type/type.app"
import { useUserState } from "../../context/user/UserContext"
import { User } from '../../context/user/type.user'
import { AuthState } from '../../context/user/type.auth'

const mpStyle:ViewStyle= {	
	marginHorizontal: '3%',
	paddingHorizontal: '2%'
}
const subtitleFont:TextStyle= {
	...fontStyles.Header.subtitle.font.style,
}
const titleFont:FontStyling= {
	...fontStyles.Header.title.font.style,
}

const TextComponent= ({username}:{username:User['name']}) => <View style={mpStyle}><Text style={subtitleFont}>Good Morning, {username}</Text></View>

const TitleComponent= () => {
	return (
		<View style={[
			{marginHorizontal: '6%',marginTop:'5%'}
		]}>
			<Title fontStyling={titleFont} titletext="Home" />
		</View>
	)
}

const HomeHeader = () => {
	const { user,manager }:AuthState= useUserState()
	
	const headerContainer:ContainerStyles= {
		containerWidth: 1,
		containerHeight: 0.3,
		bgColor: Color.blue,
		borderBottomRadius: 25,

	}
	return (
		<SubContainer styles={headerContainer}>
			<Header 
				title={<TitleComponent />}
				text={<TextComponent username={user!==null	?user.name :manager!==null ?manager.name :''} />}
				icon={null}
			/>		
		</SubContainer>
	)
}

export default HomeHeader
