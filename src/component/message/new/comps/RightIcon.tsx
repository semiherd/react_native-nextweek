import React from "react"
import { Dimensions,Pressable } from "react-native"
import Message from '../../../../asset/image/message/Message.png'
import Question from '../../../../asset/image/message/Question.png'
import ImageItem from '../../../app/image/ImageItem'
import { Row } from '../../../app/layout/Layout'

const { width}= Dimensions.get('window')

const RightIcon= ({onPress}:{onPress: (type:'message'|'question') => void}) => {

	return (
		<Row rowWidth={0.2} alignOption='center'>
			<>
				<Pressable style={{ marginHorizontal: width*0.015}} onPress={() => onPress(`message`)}>
					<ImageItem 
						image={Message}
						width={24}
						height={24}
					/>
				</Pressable>
				<Pressable style={{ marginHorizontal:width*0.015}} onPress={() => onPress(`question`)}>
					<ImageItem 
						image={Question}
						width={24}
						height={24}
					/>
				</Pressable>
			</>
		</Row>
				  
	)
}
export default RightIcon;