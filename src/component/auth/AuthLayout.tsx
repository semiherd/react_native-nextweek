import React from "react"
import { View } from "react-native"

type AuthLayoutProps={
	head: React.JSX.Element | null
	title: React.JSX.Element | null
	content: React.JSX.Element | null
}

const AuthLayout = (
	{
		head,title,content,
	}:
	AuthLayoutProps
) => {
	
	return (		
			<>
				{head}
				{title}
				{content}
			</>
	)
}

export default AuthLayout;
