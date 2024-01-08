import React,{useState,useEffect} from "react"
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
import { mocked_User } from '../../../../__mock__/MockedAuthUser'

const ShiftItemList = () => {

  const { getUsers,
		readShift,
		createShift,
		deleteShift,
		updateShift,
		readPeopleInShift } = useShift()
  const { readRosterShift } = useRoster()

	const [data,setData]= useState<ShiftType[]|null>(null)
	const user:User= mocked_User
	
	const handleData= async ():Promise<void> => {
		try{
			const rosterList:GetRosterResponse[]= await readRosterShift({_id:user._id},2) // fetch Roster List for the User
			const shiftList:ShiftType[]= await selectShift({_id:user._id},2) // fetch Shift List for the User
			//const shiftIds:ShiftType['_id'][]= response.map(i => i._id)
			//const shiftData:ShiftType[]= await listShiftUsers(shiftIds)
			//console.log('response',response)
			//setData(response)
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
			{data?.length
				? data.map((item:ShiftType) => 
					<ShiftItemLayout 
						key={item._id}
						avatar= {<ShiftAvatar user={user._id} data={[]} />}
						content= {<ShiftContent {...item} font={fontStyles.Home.Shift.time.text.style} />}
						action= {<ShiftAction {...item} />}
					/>	)
				:	<LoaderPreview />						
			}
			</>
	</Row>

   )
};

export default ShiftItemList;
