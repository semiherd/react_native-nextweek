import { UserType } from '../../type/type.app'
import Photo2 from '../../asset/image/profile/photo2.png'

export const fetchUserData= async (id:string):Promise<UserType|null> => {
	try{
		const data:UserType= {
				id: 'request1' as string,
				name: 'test1',
				imageUrl: Photo2,
				manager: 'manager1',
				overtime : 13,
				vacation: {
					total: 50,
					used: 20,
				},
				monthlyHour:{
					capacity: 116,
					completed: 60
				}
		}
		return data
	}catch(e){
		console.log(e)
		return null
	}
}