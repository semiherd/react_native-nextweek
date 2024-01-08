import React from "react"
import SubContainer from '../../app/layout/SubContainer'
import { Text } from 'react-native'
import { ContainerStyles } from '../../../type/type.app'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { Color } from '../../../asset/constant/Color'

const headerContainerStyling:ContainerStyles={
	containerWidth: 0.8,
	marginV: 0.1,
	bgColor: Color.transparent
}

const { title,description }= fontStyles.Auth.GetStarted

const TextContainer= () => {
	return (
			<SubContainer styles={headerContainerStyling}>
					<>
						<Text style={[
							{marginTop: '1%',textAlign:'center'},
							title.font.style
						]}>{title.font.text}</Text>
						<Text style={[
							{marginTop: '3%',textAlign:'center'},
							description.font.style
						]}>{description.font.text}</Text>
					</>
			</SubContainer>
	)
}

export default TextContainer
