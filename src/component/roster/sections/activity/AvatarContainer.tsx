import React from "react"
import {Row} from '../../../app/layout/Layout'
import { fontStyles } from "../../../../asset/constant/FontStyles"
import AvatarImage from '../../../app/image/AvatarImage'
import { ImageCss } from '../../../app/image/type.image'
import { User } from '../../../../context/user/type.user'
import {Dimensions,View} from 'react-native'
import { profilePng } from '../../../../asset/image/bottom-tab/index'

const {width}= Dimensions.get('window')
const overlayDistance= fontStyles.Roster.Activity.avatar.overlay

const AvatarContainer= ({data,styling}:{data:(User|null)[],styling:ImageCss}) => {
	return (
		<Row rowWidth={0.25} alignOption="flex-start">
			<>
				{data?.map((item:User|null,index:number) => 
					<View key={index.toString()}
						style={{
							transform: [{translateX: -width * overlayDistance * index}],
							zIndex: index * 4
						}} >
						<AvatarImage data= {item===null ?profilePng :item} styling={styling} />
					</View>
				)}
			</>
		</Row>
	)
}
export default AvatarContainer