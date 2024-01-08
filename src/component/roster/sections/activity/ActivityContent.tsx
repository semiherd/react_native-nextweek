import React, { useEffect } from "react"
import { Text } from 'react-native'
import { fontStyles } from "../../../../asset/constant/FontStyles"
import { Row } from '../../../app/layout/Layout'
import { ActivityAction } from '../../../../asset/constant/RosterTabs'
import { capitalizeFirstCh } from '../../../../service/app/index'
import { Absence, Swap, Blocker } from '../../../../type/type.request'
import { isAbsence, isSwap, isBlocker } from '../../../../service/request/HandleActivity'

const regular= fontStyles.Roster.Activity.text.action.style
const bold= fontStyles.Roster.Activity.text.user.style

type ActivityTypeUnion= Absence | Swap | Blocker


const ActivityContent = (
	{data}:
	{data: ActivityTypeUnion}
) => {
	
	function isBold (item: ActivityTypeUnion ){
		try{
			if (isSwap(item)) {
				return (
					<>
						<Text style={bold}>{capitalizeFirstCh(item.userOffering)} </Text>
						<Text style={regular}>{ActivityAction.swap} </Text>
						<Text style={bold}>{item.userRequesting}</Text>
					</>
				)
			}
			if (isAbsence(item)) {
				return (
					<>
						<Text style={bold}>{capitalizeFirstCh(item.user)} </Text>
						<Text style={regular}>{ActivityAction.onVacation}</Text>
					</>
				)
			}
			if (isBlocker(item)) {
				return (
					<>
						<Text style={bold}>{capitalizeFirstCh(item.user)} </Text>
						<Text style={regular}>{ActivityAction.vacation}</Text>
					</>
				)
			}
			return null
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		isBold(data)
	},[data])

	return (
		<Row rowWidth={0.8} alignOption="flex-start">
			<Text style={regular}>{isBold(data)}</Text>
		</Row>
	)
}

export default ActivityContent
