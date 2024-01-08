import React from "react"
import { Col } from '../../app/layout/Layout'
import CardContainer from "../../app/layout/CardContainer";
import { ImageSource } from '../../app/image/type.image'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { Text} from 'react-native'
import { IconText } from "../../app/text";
import CircularIcon from './CircularIcon'
import { ContainerStyles } from "../../../type/type.app"

const iconStyles= fontStyles.Profile.Header.icon.style
const iconBorderStyles= fontStyles.Profile.Header.icon.borderStyle
const titleFontStyles= fontStyles.Profile.Header.title.font.style

const CardLayout = (
	{icon,title,info,cardW,containerStyling}:
	{
		containerStyling: ContainerStyles,
		cardW: number
		icon: ImageSource,
		title: string,
		info: string | React.ReactElement,
	}):React.ReactElement => {
		
		return (
			<CardContainer
				styling={{
					container: containerStyling,
					width: cardW,
					align: "center"
				}}
			>
				<>
					<Col colNr={0} alignOption="space-around">
						<>
							<IconText
								icon={<CircularIcon borderStyling={iconBorderStyles} styling={iconStyles} imageSrc={icon}  />}
								text={<Text style={[{marginHorizontal:'5%',alignSelf:'center'},titleFontStyles]}>{title}</Text>}
								direction='row'
								align="center"
							/>
							{typeof info=='string'
								?<Text style={[{textAlign:'center'},titleFontStyles]}>{info}</Text>				
								: info
							}
						</>		
					</Col>
				</>
			</CardContainer>			
		)
};

export default CardLayout;

