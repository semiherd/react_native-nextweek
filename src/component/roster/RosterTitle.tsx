import React from "react"
import {Text} from 'react-native'
import CardContainer from '../app/layout/CardContainer'
import { UserButton } from '../app/button/index'
import { fontStyles } from '../../asset/constant/FontStyles'
import { styles } from './style/RosterTitle'
import { Item } from '../type/type.roster'
import { capitalizeFirstCh } from '../../service/app/CapitalizeFirstCh'

const RosterTitle = (
	{title,onRequest}:
	{title:Item,onRequest:() => void}
) => {
	return (
		<CardContainer				
			styling={{
				container: fontStyles.Roster.Title.container.containerStyles,
				width: 0.8,
				align: "space-between"
			}}
		>
			<>
				<Text style={styles(fontStyles.Roster.Title.titleFont).text}>{capitalizeFirstCh(title.title)}</Text>
				<UserButton 
					buttontext="Request"
					borderStyles={{
						borderRadius: 13,
					}}
					onClickFn={onRequest}
					onClickParam={{ id: title }}
					useBorder={true}
					fontStyles={fontStyles.Roster.Title.requestButton.font.style}
				/>
			</>
		</CardContainer>
	)
};

export default RosterTitle;
