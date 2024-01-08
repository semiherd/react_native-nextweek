import logoWhite from '../../asset/image/auth/applogow.png'
import logo  from '../../asset/image/auth/applogo.png'
import { Dimensions } from 'react-native'

import ImageItem from '../app/image/ImageItem'

const {width}= Dimensions.get('window')

export const AppLogo= (props:{state: boolean}) => {

	return <ImageItem width={width*0.3} height={width*0.3} image={props.state===true ?logoWhite :logo} />
}