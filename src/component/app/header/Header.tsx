import React from "react"
import {HeaderProps} from '../../../type/type.app'
import {Color} from '../../../asset/constant/Color'
import { Row, Col } from '../layout/Layout'
import { ImageCss } from '../../app/image/type.image'
import SubContainer from '../layout/SubContainer'
import NavigationIcon from '../icon/NavigationIcon'
import Navigated from '../../nav/Navigated'
import backIcon from '../../../asset/image/roster/back.png'

const NavImageComponent= Navigated(NavigationIcon)

const styling={
	containerWidth: 1,
	containerHeight: 0.25,
	bgColor: Color.blue,
	borderBottomRadius: 25,
}
const arrowIconStyle:ImageCss={
	width: 25,
	height: 25,
	tintColor: Color.white,
	borderWidth: 0,
	borderColor: Color.blue,
	borderRadius: 0,
	backgroundColor: Color.transparent,
}

const Header = (props:HeaderProps) => {
	
  return (
	 		<SubContainer styles={styling}>
				<Row rowWidth={1} alignOption="space-between">
					<>
					<Col colNr={props.backbutton ?1:0} alignOption="flex-end">
						<>
						{props.backbutton && 
							<NavImageComponent 
								id={`Back`} 
								to={`Back`}
								param={{ field: `back` }}
								styling={arrowIconStyle}
								image={backIcon} 
								onNavFn={null}
								useBorder={{color: Color.transparent,width:0,radius:50}}
							/>
						}</>
					</Col>
					<Col colNr={4} alignOption="space-around">
						<>
							{props.title}
							{props.text}
						</>
					</Col>
					<Col colNr={1} alignOption="space-around">
						<>{props.icon===null
							? null
							: <>{props.icon}</>	
						}</>
					</Col>
					</>
				</Row>
			</SubContainer>	 
	
	)
}

export default Header
