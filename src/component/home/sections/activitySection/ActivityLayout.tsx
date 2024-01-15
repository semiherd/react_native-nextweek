import React from "react"
import { Dimensions,View } from "react-native"
import { ActivityLayoutProps } from '../../../../type/type.home'
import { Col, Row } from '../../../app/layout/Layout'
import { ActivityTypeUnion } from '../../../../type/type.home'

const { height }= Dimensions.get('window')

const ActivityLayout= <T extends ActivityTypeUnion>(props : ActivityLayoutProps) => {

	const { action, content, userAvatar, declineIcon, w }= props

	return (
		<>	
			<View>
				
				<Row rowWidth={w} alignOption="center">
					<>
					{userAvatar 
							?	<Col colNr={2} alignOption="center">
									<>{userAvatar}</>
								</Col>
							:	null
						}
						{content 
							?	<View>
								<Col colNr={2} alignOption="center">
									{content}
								</Col>
							</View>
							: null
						}
						{action 
							?	<Col colNr={1} alignOption="flex-end">
									{action}
								</Col>
							: null 
						}
						<View style={{
							position: 'absolute',top: '-15%',left: '100%',
						}}>
							{declineIcon}
						</View>
					</>
				</Row>
				</View>	
		</>

	)
}

export default ActivityLayout;
