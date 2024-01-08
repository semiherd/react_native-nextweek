import React from "react"
import Header from '../app/header/Header'
import SubContainer from '../app/layout/SubContainer'
import { View } from 'react-native'
import { Color } from '../../asset/constant/Color'
import { Title } from '../app/text/index'
import { fontStyles } from "../../asset/constant/FontStyles"
import { ContainerStyles, FontStyling } from "../../type/type.app"

const titleFont:FontStyling= {
	...fontStyles.Header.title.font.style,
}

const TitleComponent= () => {
	return (
		<View style={[
			{marginHorizontal: '6%',marginTop:'5%'}
		]}>
			<Title fontStyling={titleFont} titletext="Roster" />
		</View>
	)
}

const RosterHeader = () => {

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
				text={null}
				icon={null}
			/>	
		</SubContainer>

  	)
};

export default RosterHeader;
