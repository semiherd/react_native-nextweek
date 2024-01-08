import React from "react"
import { ScrollView,Dimensions } from 'react-native'
import { useModalState } from '../../context/modal/ModalContext'
import { Color } from '../../asset/constant/Color'
import ProfileHeader from './ProfileHeader'
import Overview from '../profile/header'
import Container from './Container'
import ModalComponent from '../../screen/modal/Modal'
import SubContainer from '../app/layout/SubContainer'
import ModalHeader from '../../screen/modal/ModalHeader'
import ModalContent from '../../screen/modal/ModalContent'

const { height} = Dimensions.get('window')

const ProfileHome = () => {
	const modalState= useModalState()
	
	return (
		<>
			{modalState.id==null
			?
				<>
					<ProfileHeader backbutton setting />
					<ScrollView contentContainerStyle={{paddingBottom: height * 0.05}}>
						<>
							<Overview />
							<Container id="swap-in" button={{state:false,text:null}} title="request for you" limit={5} />
							<Container id="swap-out" button={{state:true,text:'request'}} title="my request" limit={5} />
							<Container id="blocker" button={{state:true,text:'blocker'}} title="blocker" limit={5} />
							<Container id="absence" button={{state:true,text:'absence'}} title="absence" limit={5} />
						</>
					</ScrollView>
				</>
			:
				<SubContainer styles={{
					containerWidth: 1,
					containerHeight: 2,
					bgColor: Color.blue,
					borderRadius: 15,
					marginV: 0.15,
				}}>
					<ModalComponent 
						{...modalState} top={0.1} 
						header={<ModalHeader {...modalState} />}
						content={<ModalContent {...modalState} />}
					/>
				</SubContainer>
			}
		</>
	)
}

export default ProfileHome