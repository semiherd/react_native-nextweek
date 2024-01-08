import React from "react"
import { View,Text,Dimensions } from 'react-native'
import { Color } from '../../../asset/constant/Color'
import { ContainerStyles } from '../../../type/type.app'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { ImageSource } from '../../app/image/type.image'
import StyledView from '../../app/image/StyleView'
import ImageItem from '../../app/image/ImageItem'
import SubContainer from '../../app/layout/SubContainer'
import envLogo from '../../../asset/image/auth/env.png'

const { title,description }= fontStyles.Auth.Verify
const { width } = Dimensions.get('window')

const EnvImage= (image: ImageSource) => <ImageItem width={width*0.25} height={width*0.25} image={envLogo} />

const headerContainerStyling:ContainerStyles={
	containerWidth: 0.8,
	marginV: 0.08,
	bgColor: Color.transparent
}

const VerifyHeader= () => {	
	return (
		<View style={{marginTop: '14%'}}>
			<StyledView styling={{
				width: 0.4,
				height: 0.22,
				borderRadius: 100,
				backgroundColor: Color.blue102_11,
			}}>
				<EnvImage />
			</StyledView>
			<SubContainer styles={headerContainerStyling}>
				<>
					<Text style={[
						{marginTop: 0,textAlign:'center'},
						title.font.style
					]}>{title.font.text}</Text>
					<Text style={[
						{marginTop: '3%',textAlign:'center'},
						description.font.style
					]}>{description.font.text}</Text>
				</>
			</SubContainer>
		</View>
	)
}
export default VerifyHeader