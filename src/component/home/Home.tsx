import React from "react"

const Home = ({header,content}:
	{header: React.ReactElement,content: React.ReactElement}	
	) => {
	
	return (
		<>
			{header}
			{content}
		</>
	)
}

export default Home