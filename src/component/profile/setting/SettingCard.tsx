import React from "react"
import { ContainerStyles } from '../../../type/type.app'
import { ProfileStackType,ProfileSettingStackType } from '../../../type/type.nav'
import { Item } from '../../../type/type.profile'
import { fontStyles } from '../../../asset/constant/FontStyles'
import { Color } from '../../../asset/constant/Color'
import { ImageSource, ImageCss } from '../../app/image/type.image'
import SubContainer from '../../app/layout/SubContainer'
import SettingItem from './SettingItem'
import SettingTitle from './Title'
import Title from '../../app/text/Title'
import Navigated from '../../nav/Navigated'
import NavigationIcon from '../../app/icon/NavigationIcon'
import { UserUpdateParam } from "../../../type/type.user"

const arrowIconStyle:ImageCss={
	tintColor: Color.black47,
	width: 10,
	height: 10,
	borderWidth: 0,
	borderColor: Color.blue,
	borderRadius: 0,
	backgroundColor: Color.transparent,
}

const NavImageComponent= Navigated(NavigationIcon)

const NullFn= async () => true

const SettingCard = ({_id, to,icon,title,item}:
	{
		_id: ProfileSettingStackType
		to: ProfileStackType
		icon: ImageSource
		title: string,
		item: Item<UserUpdateParam>[]
	}) => {
	
	const containerStyling: ContainerStyles= {
		containerWidth: 0.85,
		marginV: 0.01,
		paddingV: 0.02,
		bgColor: Color.transparent,
		borderBottomWidth: 0.8,
		borderBottomColor: Color.black11,
	}

	const containerSubStyling: ContainerStyles= {
		containerWidth: 0.8,
		bgColor: Color.transparent,
	}

	return (
			<>
				<SubContainer styles={containerStyling}>
					<Title fontStyling={fontStyles.Profile.Setting.header.font.style} titletext={title}/>
				</SubContainer>
				<SubContainer styles={containerSubStyling}>
					{item.map(card => 
						<SettingItem 
							key={card.header}
							left={<SettingTitle title={card.header} value={card.value} />}
							right={
								<NavImageComponent 
									id={_id}
									to={to} 
									param={{ field: card.header }}
									image={icon} 
									onNavFn={NullFn} 
									styling={arrowIconStyle}
									useBorder={{color: Color.gray5,width:0.25,radius:30}}
								/>
							}				
						/>)}
				</SubContainer>
			</>
	)
}
export default SettingCard
