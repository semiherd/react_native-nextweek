import React from "react"
import Shift from './tabs/Shift'
import { TabItem } from '../../../component/app/button/tab/type.tab'

function RequestContent<TVal>(props: TabItem<TVal>){
	
	switch(props.id) {
		case "swap-out":  
		case "blocker":   
		case "absence-vacation":   
		case "absence-sickness":   
			return <Shift<TVal> {...props} />
		default:
			return null
	}
}

export default RequestContent
