import React,{ useEffect, useState } from 'react'

function WithLoading<T>(
	{item,loader,content}:
	{
		item: T,
		loader: React.ReactElement,
		content: React.ReactElement
	}
){		
		console.log('item data in withloading component:',item)
		const [state,setState]= useState<boolean>(false)
		
		function handleState():void{
			item===null
				? setState(false)
				: setState(true)
		}
		
		useEffect(() => {
			handleState()
		},[item])

		return (
			<>
				{state 
					? {content} 
					: {loader}
				}
			</>
		)
}	
export default WithLoading 