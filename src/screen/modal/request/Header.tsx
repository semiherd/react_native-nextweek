import React from "react"
import { fontStyles} from '../../../asset/constant/FontStyles'
import { Title } from "../../../component/app/text/index";
import { Row } from '../../../component/app/layout/Layout'
import { FontStyling } from '../../../type/type.app'
import { Pressable } from 'react-native'
import { useModalState,useModalDispatch } from '../../../context/modal/ModalContext'
import { useUserState } from '../../../context/user/UserContext'
import { useRequest } from '../../../service/hook/UseRequest'
import { useProgressDispatch } from "../../../context/progress/ProgressContext";

const actionStyling:FontStyling= fontStyles.Modal.CreateRequest.header.action.style
const titleStyling:FontStyling= fontStyles.Modal.CreateRequest.header.title.style

const Header = () => {
	const modalState = useModalState()
	const { close } = useModalDispatch()
	const { updateError,updateLoading, resetError,resetLoading }= useProgressDispatch()
	const { createAbsence,createBlocker,createShiftSwapRequest } = useRequest()
	
	async function handleNewRequest(){
		try{	
			await updateLoading({})
			if(modalState.param?.type==='absence-vacation'){
				if(modalState.param.input){
					await createAbsence({
						starting: modalState.param.input.start,
						ending: modalState.param.input.end,
						typeOfAbsence: 0,
					})
				}
			}else if(modalState.param?.type==='absence-sickness'){
				if(modalState.param.input){
					await createAbsence({
						starting: modalState.param.input.start,
						ending: modalState.param.input.end,
						typeOfAbsence: 1,
					})
				}
			}else if(modalState.param?.type==='blocker'){
				await createBlocker("") //shiftRosterTemplate: "" //SHIFTROSTER_ID
			}else if(modalState.param?.type==='swap-out'){
				await createShiftSwapRequest("") //SHIFT_ID
			}
		}catch(e){
			console.log(e)
		}
	}
	return (
		<Row rowWidth={1} alignOption="space-around">
			<>
				<Pressable onPress={() => close()}>
					<Title titletext="cancel" fontStyling={ actionStyling } />
				</Pressable>			
				<Title titletext="Request" fontStyling={ titleStyling } />			
				<Pressable onPress={() => handleNewRequest()}>
					<Title titletext="add" fontStyling={ actionStyling } />
				</Pressable>
			</>
		</Row>
	)
};

export default Header
