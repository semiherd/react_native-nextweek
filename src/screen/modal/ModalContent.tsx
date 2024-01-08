import React from "react"
import NewRequest from './request/index'
import { ModalState } from '../../context/modal/type.modal'

function ModalContent<T>(props:ModalState<T>){
	switch(props.id) {
		case "create-request":   
			return <NewRequest />
		case null:
			return null
		default: 
			return null
	}
}

export default ModalContent
