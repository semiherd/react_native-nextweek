import React from "react"
import { Text } from 'react-native'
import { Color } from '../../../asset/constant/Color'
import { ContainerStyles } from "../../../type/type.app"
import { Item } from "../../../type/type.profile"
import { fontStyles } from '../../../asset/constant/FontStyles'
import { handleMP } from "../../../styling"
import { capitalizeFirstCh } from '../../../service/app/CapitalizeFirstCh'
import { UserUpdateParam } from "../../../type/type.user"
import { User } from "../../../context/user/type.user"
import SubContainer from "../../app/layout/SubContainer"

const Title= ({title,value}:{title:UserUpdateParam,value:User[UserUpdateParam]}) => {
	const containerStyle:ContainerStyles={
		containerWidth: 0.6,
		containerHeight: 0.35,
		bgColor: Color.transparent,
		marginV:0,
		paddingV:0,
	}
	return (
		<SubContainer styles={containerStyle}>
			<Text style={[
				fontStyles.Profile.Setting.title.font.style,
				handleMP(`margin-top-15`)
			]}>{capitalizeFirstCh(title.toString())}</Text>
			<Text style={[
				fontStyles.Profile.Setting.value.font.style,
				handleMP(`margin-top-5`),
				handleMP(`margin-bottom-15`)
			]}>{value}</Text>
		</SubContainer>
	)
}

export default Title