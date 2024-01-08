import React from "react";
import { Modal,View } from "react-native";
import { styles } from './style/Modal';
import { ModalState } from '../../context/modal/type.modal'
import { handleMP } from '../../styling'

function ModalComponent<T>(props:ModalState<T> 
	& {top:number} & {header: React.ReactElement,content: React.ReactElement}
	){ 
	const {id,param,top,header,content}= props 		
	
	return (
		<Modal
			statusBarTranslucent={true}
			animationType= "slide"
			transparent={true}
			visible={true}		
		>	
			<View style={styles(top).container}>
				<View style={handleMP(`padding-vertical-1`)}>{header}</View>	
				<View style={handleMP(`padding-vertical-3`)}>{content}</View>	           
			</View>		
		</Modal>
  	);
}

export default ModalComponent