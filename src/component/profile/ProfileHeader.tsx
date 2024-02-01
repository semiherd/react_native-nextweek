import React from "react"
import Header from '../app/header/Header'
import SubContainer from '../app/layout/SubContainer'
import { Row } from '../app/layout/Layout'
import { View } from 'react-native'
import { Color } from '../../asset/constant/Color'
import { Title } from '../app/text/index'
import { fontStyles } from "../../asset/constant/FontStyles"
import { ContainerStyles, FontStyling } from "../../type/type.app"
import { NavButtonProps } from '../../type/type.nav'
import { NavButton } from '../../component/app/button/index'

const titleFont:FontStyling= {
	...fontStyles.Header.title.font.style,
}

const TitleComponent= () => {
	return (
		<View style={[
			{marginHorizontal: '6%',marginTop:'5%'}
		]}>
			<Title fontStyling={titleFont} titletext="Profile" />
		</View>
	)
}

const SettingIcon= () => {

	const navButton:NavButtonProps={
		text: fontStyles.Profile.Header.setting.font.text,
		useBorder: true,
		font: fontStyles.Profile.Header.setting.font.style,
		width: 0.2,
		border: {
			borderRadius: 10,
			borderColor: Color.transparent,
			borderWidth: 0,
			borderBottomWidth: 0,
			borderBottomColor: Color.transparent
		}
	}
	return (
		<NavButton
			id={`ProfileSetting`} 
			styling={navButton}
			onNavFn={null}
		/>
		
	)
}
const ProfileHeader = ({setting,backbutton}:{setting:boolean,backbutton:boolean}) => {

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
					icon={setting ?<SettingIcon /> :null}
					text={null}
					backbutton={backbutton}
				/>
			</SubContainer>
  	)
}
export default ProfileHeader
