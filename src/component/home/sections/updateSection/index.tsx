import React from "react"

const UpdateSection = ({title,content}:{title:React.ReactElement,content:React.ReactElement}) => {

   return (
		<>
			{title}
			{content}
		</>
   )
}

export default UpdateSection;
