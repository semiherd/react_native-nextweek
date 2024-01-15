import React from "react"
import { View,Text,ViewStyle } from 'react-native'
import { Row } from '../../../../app/layout/Layout'
import { SubType } from '../../../../../type/type.app'
import { User } from '../../../../../context/user/type.user'
import { IconText } from '../../../../app/text/index'
import { styles } from '../style/Label'
import { handleMP } from "../../../../../styling"
import { Color } from "../../../../../asset/constant/Color"
import VectorIcon from '../../../../app/icon/VectorIcon'
import AvatarItem from './AvatarItem'

type AvatarDataType=SubType<User,'_id'|'name'|'image'>

const ShiftAvatar = ({data,user}:{data:User[],user: User['_id']}) => {

	return (
		<View>
			<Row rowWidth={0.4} alignOption="space-around">
				<>
				{data.length
					?  data?.map((item:AvatarDataType) => {
						if(item._id===user) return null
						return (
							<View key={item._id} style={{ alignSelf:'flex-start',width:'45%',}}>
								<AvatarItem {...item} />
								<Text style={styles.label}>{item.name.length>10 ?`${item.name.slice(0,10)}...` :item.name}</Text>
							</View>
						)						
					})
					:	<VectorIcon type="fontawesome5" name="users-slash" color={Color.blue24} size={30} />
				}
				</>
			</Row>
		</View>
	)
}

export default ShiftAvatar;
