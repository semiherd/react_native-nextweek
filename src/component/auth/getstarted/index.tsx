import React from "react"
import { View,Dimensions, ImageStyle } from 'react-native'
import { NavButton } from '../../app/button/index'
import { Color } from '../../../asset/constant/Color'
import { GetStartedButton } from './ButtonProps'
import StyledView from '../../app/image/StyleView'
import ImageItem from '../../app/image/ImageItem'
import BottomContainer from "../../app/layout/BottomContainer"
import TextContainer from './TextContainer'
import getStarted from '../../../asset/image/auth/getStarted.png'
import shieldTick from '../../../asset/image/auth/shieldTick.png'

const { width,height } = Dimensions.get('window')

const imageCss:ImageStyle= {position:'relative',transform:[{scale:1}]}
const imageCss2:ImageStyle= {position:'relative',top:'-40%',transform:[{scale:2}]}

const ShiledImage= () => <View style={imageCss}><ImageItem width={width*0.25} height={width*0.25} image={shieldTick} /></View>
const BgImage= () => <View style={imageCss2}><ImageItem width={width*0.25} height={width*0.25} image={getStarted} /></View>

const GetStarted= () => {	

	return (
		<BottomContainer w={1} p={{paddingV: height*0.1}}>
			<StyledView styling={{
				width: 1,
				height: 0.25,
				backgroundColor: Color.transparent,
			}}>
				<>				
					<ShiledImage />
					<BgImage />					
				</>
			</StyledView>
			<TextContainer />
			<NavButton
				id={`SignIn`} 
				styling={GetStartedButton}
				onNavFn={null}
			/>
		</BottomContainer>
	)
}
export default GetStarted