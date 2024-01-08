import React from "react"
import { useModalState } from '../../context/modal/ModalContext'
import { Color } from '../../asset/constant/Color'
import ModalComponent from '../../screen/modal/Modal'
import SubContainer from '../app/layout/SubContainer'
import ModalHeader from '../../screen/modal/ModalHeader'
import ModalContent from '../../screen/modal/ModalContent'
import HomeHeader from './HomeHeader'
import Sections from './sections/index'
import Home from './Home'

const HomeTab = () => {
	const modalState= useModalState()	

	const modalContainerStyle= {
		containerWidth: 1,
		containerHeight: 2,
		bgColor: Color.blue,
		borderRadius: 15,
		marginV: 0.15,
	}
	return (
		<>
			{modalState.id==null
				?	<Home 
						header={<HomeHeader />}
						content={<Sections />}
					/>
				:
					<SubContainer styles={modalContainerStyle}>
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

export default HomeTab