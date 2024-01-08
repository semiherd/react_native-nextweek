import React from "react"

const ShiftSection = (
	{title,content}:
	{title:React.ReactElement,content:React.ReactElement}
) => {

   return (
		<>
			{title}
			{content}
		</>
   )
}
export default ShiftSection
