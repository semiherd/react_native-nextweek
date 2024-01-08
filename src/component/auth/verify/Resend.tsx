import React from "react"
import { Text } from 'react-native'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { Row } from '../../app/layout/Layout'

const { notGet,resend }= fontStyles.Auth.Verify

const Resend= () => {
	return (
		<Row rowWidth={0.5} alignOption="flex-end">
			<>
				<Text style={notGet.font.style}>{notGet.font.text}</Text>
				<Text style={resend.font.style}>{resend.font.text}</Text>
			</>
		</Row>
	)
}
export default Resend