import React from 'react'
import { Col } from '../../app/layout/Layout'

const ContentLayout= ({first,second}:{first:React.ReactElement,second:React.ReactElement}) => {
	
	return (
		<Col colNr={0} alignOption="space-between">
			<>
				{first}
				{second}
			</>
		</Col>
	)
}
export default ContentLayout
