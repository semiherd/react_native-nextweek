import React, { useEffect, useState } from "react"
import TabContent from './TabContent'
import { TabWithContent } from '../../../component/app/button/index'
import { TabItem, ButtonStyling } from '../../../component/app/button/tab/type.tab'
import { RequestId } from '../../../type/type.request'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { useModalState } from '../../../context/modal/ModalContext'
import { tabs } from './Tabs'

const NewRequest = () => {
	const modalState= useModalState()
	const [list,setList]= useState<TabItem<RequestId>[]>(tabs)

	async function handleActiveTab(){
		try{
			const data:((TabItem<RequestId>)[])= await Promise.all(
				tabs.map(item => {
					if(modalState.param===null){
						return { ...item, state: false }
					}
					return item.id === modalState.param.type
						? { ...item, state: true }
						: { ...item, state: false }
				})
			)
			setList(data)
		}catch(e){
			console.log(e)
		}
	}
	
	useEffect(() => {
		handleActiveTab()
	},[modalState.param])

	const styling:ButtonStyling= {
		...fontStyles.Modal.CreateRequest.tab.button.styles,
		...fontStyles.Modal.CreateRequest.tab.font.style
	
	}
	return (
			<TabWithContent<RequestId> 
				tabs={list}
				content={<TabContent tabs={list}  />}
				styling={styling}
				width={0.85}
			/>	
	)
}

export default NewRequest
