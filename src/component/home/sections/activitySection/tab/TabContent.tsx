import React,{useEffect, useState} from "react"
import { NoContent } from '../../../../app/error/index'
import { Color } from '../../../../../asset/constant/Color'
import { ContainerStyles } from '../../../../../type/type.app'
import { TabItem } from '../../../../app/button/tab/type.tab'
import { useRequest } from '../../../../../service/hook/UseRequest'
import { Absence, Swap, Blocker } from '../../../../../type/type.request'
import ActivityList  from './ActivityList'
import { ActivityTabId } from '../../../../../type/type.home'

type ActivityTypeUnion= Absence | Swap | Blocker

function TabContent<TVal extends ActivityTabId>({tabs}:{tabs:TabItem<TVal>[]}){
	
	const { fetchRequest }= useRequest()
	const [active,setActive]=useState<TabItem<TVal>|null>(null)

	const containerStyles:ContainerStyles={
		containerHeight: 0.3,
		containerWidth: 0.85,
		borderRadius: 13,
		bgColor: Color.white, 
		paddingV: 0.01,
		paddingH: 0.01,
		marginV: 0.04
	}

	async function handleTab(){
		try{
			const item:TabItem<TVal>[]= tabs?.filter(item => item.state===true)
			setActive(item[0])
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleTab()
	},[tabs])
	
	return (
		<>
			{active===null
				?	<NoContent text="Please Select a Tab" /> 
				:	<ActivityList
						containerStyleObj={containerStyles}
						active={active?.id ?active.id :null}
					/>				
			}
		</>
	)
}

export default TabContent



