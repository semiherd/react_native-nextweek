import React from "react"
import { Row,Col } from '../../app/layout/Layout'

const MessageLayout = ({avatar,content,info}:
	{
		avatar: React.ReactElement,
		content: React.ReactElement,
		info: React.ReactElement,
	}
):React.ReactElement => {
	
	
	return (
		<Row rowWidth={0.9} alignOption="center">
			<>
				{avatar
					?	<Col colNr={2} alignOption="center">
							{avatar}
						</Col>
					:	null
				}
				{content
					?	<Col colNr={5} alignOption="space-between">
							{content}
						</Col>
					:	null
				}
				{info
					?	<Col colNr={1} alignOption="center">
							{info}
						</Col>
					:	null
				}				
			</>
		</Row>				
	)
};

export default MessageLayout

