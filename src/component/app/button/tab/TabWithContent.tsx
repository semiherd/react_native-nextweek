import React,{ useEffect, useState } from "react"
import { View } from 'react-native'
import { ButtonStyling, TabItem } from './type.tab'
import Tab from './Tab'
import { Color } from "../../../../asset/constant/Color"

function TabWithContent<T>(
	props:
	{
		tabs: TabItem<T>[],
		content: React.ReactElement
		styling: ButtonStyling
		width: number
	}
){
	const { tabs, content, width } = props
	const [tabState,setTabState]= useState<TabItem<T>[]>([])

	async function initialState():Promise<void> {
		try{
			setTabState(tabs)
		}catch(e){
			console.log(e)
		}
	}
	const onTabClick= async (item:TabItem<T>):Promise<void> => {
		try{
			const newList:TabItem<T>[]= await Promise.all(
				tabState.map(t=>{
					if(t.id===item.id)
						return {...t, state:item.state===true?false:true}
					else 
						return {...t, state:false}
			}))
			setTabState(newList)
		}catch(e){
			console.log(e)
		}
	}
	useEffect(() => {
		initialState()
	},[props])

  const clonedContent = React.cloneElement(content, {tabs: tabState} )

	return (
		<View>
			<Tab<T> width={width} tabs={tabState} onClick={onTabClick} styling={props.styling} />
			{clonedContent}
		</View>
	)
};

export default TabWithContent
