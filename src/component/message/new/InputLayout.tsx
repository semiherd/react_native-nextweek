import React from "react"
import { Row, Col } from '../../app/layout/Layout'

const InputLayout = ({left,center,right}:
	{
		left: React.ReactElement,
		center: React.ReactElement,
		right: React.ReactElement,
	}
):React.ReactElement => {
	
	return (
		<Row rowWidth={1} alignOption="center">
			<>
				{left
					?	<Col colNr={1} alignOption="center">
							{left}
						</Col>
					:	null
				}
				{center
					?	<Col colNr={7} alignOption="center">
							{center}
						</Col>
					:	null
				}
				{right
					?	<Col colNr={2} alignOption="center">
							{right}
						</Col>
					:	null
				}				
			</>
		</Row>				
	)
};

export default InputLayout

