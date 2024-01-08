import React from "react"
import { Row } from './Layout'
import { AlignOptions } from '../../../type/type.app'
import { ContainerStyles } from '../../../type/type.app'
import SubContainer from './SubContainer'

const CardContainer= (
	{styling,children}:
	{	
		styling:{
			container: ContainerStyles,
			width: number,
			align: AlignOptions
		}
		children:React.ReactElement
	}):React.ReactElement => {
	
	return (
		<SubContainer styles={styling.container}>
			<Row rowWidth={styling.width} alignOption={styling.align}>
				{children}
			</Row>
		</SubContainer>
	)
}
export default CardContainer