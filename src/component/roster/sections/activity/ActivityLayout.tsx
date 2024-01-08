import React from "react"
import {Col} from '../../../app/layout/Layout'

type ActivityLayout={
	button: React.ReactElement
	list: React.ReactElement
}

const ActivityLayout = (props:ActivityLayout) => {
	return (
		<Col colNr={0} alignOption="center">
			<>
				{props.list}
				{props.button}
			</>
		</Col>
	)
};

export default ActivityLayout;
