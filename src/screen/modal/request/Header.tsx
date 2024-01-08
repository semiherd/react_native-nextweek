import React from "react"
import { fontStyles} from '../../../asset/constant/FontStyles'
import { Title } from "../../../component/app/text/index";
import { Row } from '../../../component/app/layout/Layout'
import { FontStyling } from '../../../type/type.app'
import { Pressable } from 'react-native'
import { useModalState,useModalDispatch } from '../../../context/modal/ModalContext'
import { useRequest } from '../../../service/hook/UseRequest'
import { RequestState,	RequestId, RequestDataType } from '../../../type/type.request'

const actionStyling:FontStyling= fontStyles.Modal.CreateRequest.header.action.style
const titleStyling:FontStyling= fontStyles.Modal.CreateRequest.header.title.style


const Header = () => {
	const { close } = useModalDispatch()
	const modalState = useModalState()
	const { createRequest } = useRequest()

	async function handleNewRequest(){
		try{		
			const apiParam:RequestDataType= {
				id: 'request1',
				requestedBy: 'user1',
				requestedTo: 'user2',
				type: 'blocker' as RequestId,
				status: 'requested' as RequestState,
				created: new Date().toString(),
				range: {
					start: '2023-11-14T10:42:37.590Z',
					end: '2023-11-14T10:42:37.590Z'
				}
			}
			if(modalState?.param?.input)
				createRequest(apiParam)
			
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

export default Header;
