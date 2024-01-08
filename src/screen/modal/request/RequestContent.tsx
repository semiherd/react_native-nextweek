import React from "react"
import Shift from './tabs/Shift'
import { TabItem } from '../../../component/app/button/tab/type.tab'
import { RequestId } from '../../../type/type.request'

function RequestContent<TVal>(props: TabItem<TVal>){
	const { id }:{id: RequestId} = props

	switch(id) {
		case "request":  
		case "blocker":   
		case "absence":   
		case "sickness":   
			return <Shift<TVal> {...props} />
		default:
			return null
	}
}
export default RequestContent
