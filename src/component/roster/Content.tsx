import React from 'react'
import SwitchContent from './SwitchContent'
import SubContainer from '../app/layout/SubContainer'
import { View } from 'react-native'
import { styles } from './style/ContentStyles'
import { fontStyles } from '../../asset/constant/FontStyles'
import { Item } from '../type/type.roster'

const Content= ({id}:{id:Item['id']}) => {

   return (
		<View style={styles.container} >
			<SubContainer styles={fontStyles.Roster.Container.styles}>
				<SwitchContent id={id} />
			</SubContainer>
		</View>
	)
}

export default Content