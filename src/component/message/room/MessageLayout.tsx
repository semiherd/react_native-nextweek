import React from "react"

const MessageLayout = ({header,content,action}:
	{
		header: React.ReactElement,
		content: React.ReactElement,
		action: React.ReactElement,
	}
):React.ReactElement => {	
	
	return (
		<>
				{header
					?	<>{header}</>
					:	null
				}
				{content
					?	<>{content}</>
					:	null
				}		
				{action
					?	<>{action}</>
					:	null
				}		
			</>				
	)
};

export default MessageLayout

