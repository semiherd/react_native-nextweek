import React from "react"
import { ContainerStyles } from '../../../../type/type.app'
import SubContainer from '../../../app/layout/SubContainer'

const CardContainer= (
	{styling,children}:	
	{	
		styling: ContainerStyles,
		children: React.ReactElement
	}):React.ReactElement => {
	
	return (
		<SubContainer styles={styling}>
			{children}
		</SubContainer>
	)
}
export default CardContainer