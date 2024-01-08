import React from "react"
import { View,Text,ViewStyle } from 'react-native'
import { Row } from '../../../../app/layout/Layout'
import { SubType } from '../../../../../type/type.app'
import { User } from '../../../../../context/user/type.ctx.user'
import { IconText } from '../../../../app/text/index'
import { styles } from '../style/Label'
import { handleMP } from "../../../../../styling"
import AvatarItem from './AvatarItem'
import { Color } from "../../../../../asset/constant/Color"
import VectorIcon from '../../../../app/icon/VectorIcon'

type AvatarDataType=SubType<User,'_id'|'name'|'image'>

const ShiftAvatar = ({data,user}:{data:AvatarDataType[],user:User['_id']}) => {
	return (
		<View style={handleMP(`margin-top-15`) as ViewStyle}>
			<Row rowWidth={0.4} alignOption="space-around">
				<>
				{data.length
					?  data?.map((item:AvatarDataType) => {
						if(item._id===user) return null
						return <IconText
								key={item._id}
								icon={<AvatarItem {...item} />}
								text={<Text style={styles.label}>{item.name}</Text>}
								direction='column'
								align="center"
							/>
						})
					:	<VectorIcon type="fontawesome5" name="users-slash" color={Color.blue24} size={30} />
				}
				</>
			</Row>
		</View>
	)
};

export default ShiftAvatar;
