import React,{ useState, useEffect } from "react"
import ShiftItemLayout from './ShiftItemLayout'
import ShiftContent from './container/ShiftContent'
import ShiftAction from './container/ShiftAction'
import ShiftAvatar from './container/ShiftAvatar'
import LoaderPreview from './container/LoaderPreview'
import { ShiftType } from '../../../../type/type.shift'
import { User } from '../../../../context/user/type.user'
import { Row } from '../../../app/layout/Layout'
import { fontStyles } from '../../../../asset/constant/FontStyles'
import { useShift } from '../../../../service/hook/UseShift'
import { useRoster } from '../../../../service/hook/UseRoster'
import { 
	Api_ReadRosterShift,
} from '../../../../type/type.api'
import { useUserState } from "../../../../context/user/UserContext"
import { AuthState } from "../../../../context/user/type.auth"

type ListItem= ShiftType & {
	members: User[]
}

const ShiftItemList = () => {

  const { readPeopleInShift } = useShift()
  const { readRosterShift } = useRoster()

	const [list,setList]= useState<ListItem[]|null>(null)
	const {user,manager}:AuthState= useUserState()
	
	const handleData= async ():Promise<void> => {
		try{
			const rosterList:Api_ReadRosterShift= await readRosterShift() 
			if(!rosterList.shifts.length){
				setList([])
			}else{
				const list= await Promise.all(rosterList.shifts.map(async item => {
					const members:User[]= await readPeopleInShift({_id: item._id})	
					return {
						...item,
						members
					}
				}))
				setList(list)
			}
		}catch(e){
			console.log(e)
		}
	}
	
	useEffect(() => {
		handleData()
	},[])
	
  return (
		<Row rowWidth={1} alignOption="center">
			<>
			{list?.length
				? list.map((item:ListItem) => {
					const {members,...shift}= item
					return (
						<ShiftItemLayout 
							key={item._id}
							avatar={<ShiftAvatar user={manager ?manager._id :user ?user._id :''} data={item.members} />}
							content= {<ShiftContent {...shift} font={fontStyles.Home.Shift.time.text.style} />}
							action= {<ShiftAction {...item} />}
						/>
					)
				})
				:	<LoaderPreview />						
			}
			</>
	</Row>

   )
};

export default ShiftItemList
