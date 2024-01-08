import React from "react"
import { Row,Col } from '../../../app/layout/Layout'
import { View} from 'react-native'
import { styleMargin,styles,styleCardWidth,styleBorder } from '../../style/CardLayout'
import { CardLayoutWithAvatar,CardLayoutWithoutAvatar } from "../../../../type/type.profile"

const CardLayout = (
	props: CardLayoutWithoutAvatar | CardLayoutWithAvatar
):React.ReactElement => {
	
	return (	
		<>
			{props.xIcon && 
				<View style={styleCardWidth(props.cardWidth).xIcon}>
								{props.xIcon}
					</View>
			}
			<View style={
				[
					styles.container,
					styleBorder(props.borderColor).border,
					styleMargin(props.useMargin,props.useBottomSeperator).useMargin
				]}>
				<Row rowWidth={props.cardWidth} alignOption="center">
					<>
						{props.avatar && <Col colNr={2} alignOption="center">
							{props.avatar}
						</Col>}
						{props.content && <Col colNr={6} alignOption="center">
							{props.content}
						</Col>}
						{props.action && <Col colNr={2} alignOption="center">
							{props.action}
						</Col>}
					</>
				</Row>
			</View>						
		</>
	)
};

export default CardLayout

