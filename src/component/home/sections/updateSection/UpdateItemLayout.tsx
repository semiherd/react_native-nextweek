import React from "react"
import { UpdateLayoutProps } from '../../../type/type.update'
import { Col,Row } from '../../../app/layout/Layout'

const UpdateItemLayout = ({action,content}:UpdateLayoutProps):JSX.Element => {

	return (
		<Row rowWidth={0.88} alignOption="center">
			<>
				<Col colNr={3} alignOption="center">
					{content}
				</Col>
				<Col colNr={2} alignOption="center">
					{action}
				</Col>
			</>
		</Row>
	)
}

export default UpdateItemLayout;
