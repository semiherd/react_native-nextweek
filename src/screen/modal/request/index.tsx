import React, { useEffect, useState } from "react"
import SubContainer from "../../../component/app/layout/SubContainer";
import TabContent from './TabContent'
import { TabWithContent } from '../../../component/app/button/index'
import { TabItem, ButtonStyling } from '../../../component/app/button/tab/type.tab'
import { RequestId } from '../../../type/type.request'
import { Color } from "../../../asset/constant/Color";
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

	const containerStyles={
		containerWidth: 1,
		bgColor: Color.blue
	}
	const styling:ButtonStyling= fontStyles.Modal.CreateRequest.tab.button.styles
	
	return (
		<SubContainer styles={containerStyles}>
			<TabWithContent<RequestId> 
				tabs={list}
				content={<TabContent tabs={list}  />}
				styling={styling}
			/>
		</SubContainer>
	)
};

export default NewRequest
