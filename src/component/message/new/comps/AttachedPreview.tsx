import React from "react"
import { View, Pressable,Dimensions } from 'react-native'
import { Color } from "../../../../asset/constant/Color"
import { AttachItem } from '../../../../component/message/type/type.message'
import { Row } from '../../../app/layout/Layout'
import { useMessageDispatch } from '../../../../context/chat/MessageContext'
import ImageItem from "../../../app/image/ImageItem"
import TextInCircle from '../../../app/text/TextInCircle'

const {width,height}= Dimensions.get('window')


const  AttachedPreview=({data}:{data:AttachItem[]}) => {
	const { removeFile }= useMessageDispatch()

	return (
		<View style={{ overflow: 'hidden',borderRadius:5, alignSelf:'center' }}>
			<Row rowWidth={1} alignOption="center">
			<>
					{data.map( (item: AttachItem) => {
						return (
							<View key={item.id} style={{ marginHorizontal:'1%'}}>
								<Pressable onPress={() => removeFile(item)} style={{ zIndex:2, position: 'relative', top:'8%',left: '40%'}}>
									<TextInCircle text={`x`} borderColor={Color.transparent} size={20} color={Color.white} backgroundColor={Color.gray} fontSize={12} fontWeight={`700`} />
								</Pressable>
								<ImageItem
									image={{uri:item.sourceURL}}
									width={width*0.25}
									height={height*0.25}
									styling={{
										borderRadius: 10,
										width: width*0.25,
										height: width*0.25,
									}}
								/>
							</View>
						)}
					)}
			</>
			</Row>
		</View>
	)
}
export default AttachedPreview
