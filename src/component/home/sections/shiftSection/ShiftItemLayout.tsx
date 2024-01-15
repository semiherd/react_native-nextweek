import React from "react"
import { View } from "react-native"
import { ShiftLayoutProps } from '../../../../type/type.shift'
import { Color } from '../../../../asset/constant/Color'
import SubContainer from '../../../app/layout/SubContainer'

const ShiftItemLayout = ({action,content,avatar}:ShiftLayoutProps):React.ReactElement => {

	const containerStyles= {
		containerHeight: 1,
		containerWidth: 0.4,
		borderRadius: 13,
		borderBottomRadius: 13,
		bgColor: Color.white, 
		paddingV: 0,
		paddingH: 0.01,
		marginH: 0.02,
		marginV: 0.01
	}
	return	<SubContainer styles={containerStyles}>				
						<>
							{avatar ?avatar :null}
							<View style={{marginTop:'5%'}}>
								{content ?content :null}
							</View>
							<View style={{marginTop:'5%'}}>
								{action ?action :null}
							</View>
						</>										
					</SubContainer>
}

export default ShiftItemLayout;
