import React from "react"
import SubContainer from '../../../app/layout/SubContainer'
import { ShiftLayoutProps } from '../../../../type/type.shift'
import { Col } from '../../../app/layout/Layout'
import { Color } from '../../../../asset/constant/Color'

const ShiftItemLayout = ({action,content,avatar}:ShiftLayoutProps):React.ReactElement => {

	const containerStyles= {
		containerHeight: 1,
		containerWidth: 0.42,
		borderRadius: 13,
		borderBottomRadius: 13,
		bgColor: Color.white, 
		paddingV: 0,
		paddingH: 0.02,
		marginH: 0.02,
		marginV: 0.01
	}
	return	<SubContainer styles={containerStyles}>
						<Col colNr={0} alignOption="center">
						<>
							{avatar ?avatar :null}
							{content ?content :null}
							{action ?action :null}
						</>					
						</Col>			
					</SubContainer>
}

export default ShiftItemLayout;
