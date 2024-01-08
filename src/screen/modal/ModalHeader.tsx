import React from "react"
import RequestModalHeader from './request/Header'
import { ModalState } from '../../context/modal/type.modal'

function ModalHeader<T>(props:ModalState<T>){
	switch(props.id) {
		case "create-request":   
			return <RequestModalHeader />
		case null:
			return null
		default: 
			return null
	}
}

export default ModalHeader
