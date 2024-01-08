import React from "react"
import { Row } from '../../app/layout/Layout'

const HeaderLayout = (
{overtime,regularhour,vacation}:
{
	overtime: React.ReactElement,
	regularhour: React.ReactElement,
	vacation: React.ReactElement,
}):React.ReactElement => {
	return (
		<>
			<Row rowWidth={1} alignOption="space-around">
				<>
					{overtime}
					{regularhour}	
				</>		
			</Row>
			{vacation}
		</>				
	)
};

export default HeaderLayout;
