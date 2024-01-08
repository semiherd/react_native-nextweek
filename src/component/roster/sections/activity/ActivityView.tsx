import React from "react"
import { AlignOptions } from "../../../../type/type.app"
import { Row, Col } from '../../../app/layout/Layout'

const ActivityView = (
	{alignOption,time,content,image}:
	{	
		alignOption: AlignOptions,
		image: React.ReactElement,
		time: React.ReactElement,
		content: React.ReactElement
	}
) => {
	return (
		<Row rowWidth={0.8} alignOption="space-between">							
			<>
			<Col colNr={2} alignOption={alignOption}>
				{image}
			</Col>
			<Col colNr={4} alignOption={alignOption}>
				<>
					{content}
					{time}
				</>
			</Col>
			</>
		</Row>
	)
}

export default ActivityView;
