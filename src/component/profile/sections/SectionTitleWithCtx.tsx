import React from "react"
import SectionTitle from './SectionTitle'
import { useModalDispatch } from '../../../context/modal/ModalContext'
import { ModalId, ModalName } from '../../../context/modal/type.modal'
import { ProfileSection } from "../../../type/type.profile"

const SectionTitleWithCtx = (
	{type,button,title}:
	{
		type: ProfileSection,
		button: {state:boolean,text:string|null},
		title: string
	}
) => {
	const { open } = useModalDispatch()
	
	const titleParam={
		title: title,
		button: button,
	}
	return  <SectionTitle 
						params={titleParam} 
						button={button} 
						onClickFn={() => open({
							id:'create-request' as ModalId,
							param: { type: type as ModalName}
						})}  
					/>
}

export default SectionTitleWithCtx
