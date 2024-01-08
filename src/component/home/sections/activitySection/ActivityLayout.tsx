import React from "react"
import { Dimensions,View } from "react-native"
import {ActivityLayoutProps} from '../../../../type/type.home'
import {Col,Row} from '../../../app/layout/Layout'
import {ContainerStyles} from '../../../../type/type.app'

const {height}= Dimensions.get('window')

const ActivityLayout = ({action,userAvatar,content,declineIcon}:ActivityLayoutProps) => {
	
	const onDecline= () => console.log('onclick decline')
	const rowWidth:number= 0.75
	const declineStyle:({containerWidth: ContainerStyles['containerWidth']})= {
		containerWidth: rowWidth,
	}
	
	return (
		<>	
			<View>
				<View style={{
					position: 'absolute',top: '-40%',left: '93%',
				}}>
					{declineIcon(onDecline,declineStyle)}
				</View>
				<View style={{ alignSelf: 'center',transform: [{translateY: height * 0.02}]}}>
				<Row rowWidth={rowWidth} alignOption="center">
					<>
						{userAvatar 
							?	<Col colNr={1} alignOption="center">
									{userAvatar}
								</Col>
							:	null
						}
						{content 
							?	<View>
								<Col colNr={1} alignOption="center">
									{content}
								</Col>
							</View>
							: null
						}
						{action 
							?	<Col colNr={1} alignOption="center">
									{action}
								</Col>
							: null }
					</>
				</Row>
				</View>
			</View>
			
		</>

	)
}

export default ActivityLayout;
