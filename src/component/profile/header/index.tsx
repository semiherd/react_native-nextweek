import React from "react"
import { fontStyles } from '../../../asset/constant/FontStyles'
import { View } from 'react-native'
import HeaderLayout from './HeaderLayout'
import { timePng } from '../../../asset/image/home/index'
import { calendarPng } from '../../../asset/image/roster/index'
import CardLayout from './CardLayout'
import VacationBar from './VacationBar'
import { useUserState } from "../../../context/user/UserContext"
import { AuthState } from "../../../context/user/type.auth"
import { User } from "../../../context/user/type.user"

const vacationContainerStyles= fontStyles.Profile.Header.vacation.container.style
const overviewContainerStyles= fontStyles.Profile.Header.overtime.container.style
const { vacation}= fontStyles.Profile.Header

const BarItem= ({c,l}:{c:number,l:number}) => <VacationBar cColor={vacation.bar.cColor} lColor={vacation.bar.lColor} c={c} l={l} />

const Overview = ():React.ReactElement => {
	const {user,manager,role}:AuthState= useUserState()
	
	return (
		<View style={{marginVertical: '2%'}}>
			{user===null 
				? null
				: <HeaderLayout 
						overtime={<CardLayout containerStyling={overviewContainerStyles} 
							cardW={0.4} info={`${user.breakTimer}h`} 
							title="Overtime" 
							icon={timePng} />
						}
						regularhour={<CardLayout containerStyling={overviewContainerStyles} 
							cardW={0.4} 
							info={user.monthlyHours.toString()} 
							title="Monthly Hours" 
							icon={timePng} />
						}
						vacation={<CardLayout containerStyling={vacationContainerStyles} 
							cardW={0.8} 
							info={<BarItem c={user.vacationDays} l={5} />} 
							title="Vacation Days" 
							icon={calendarPng} />
						}
					/>
			}
		</View>
	)			
}

export default Overview

	
	
	