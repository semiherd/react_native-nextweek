import { User } from '../../context/user/type.ctx.user'
import { Api_ReadUser,Api_UpdateUser, ApiResponse, ApiResponseVals } from '../../type/type.api'
import { UserUpdateParam } from '../../type/type.user'
import { useUserState } from '../../context/user/UserContext'
import { userList } from '../../__mock__/User'
import { AuthState } from '../../context/user/type.auth'
import { 
	ApiList
} from '../../asset/constant/Api'
import {
	mock_readUser,
	mock_updateUser,
} from '../../__mock__/api/user'
import { 
	useFetchApi
} from './UseFetchApi'

const { user }= ApiList

type updateParam<T extends keyof User>={
	type: T
	data: User[T]
	id: User['_id']
}

export const useUser = () => {
	const { useMocked,user,token }:AuthState= useUserState()
	const { getApi } = useFetchApi()

	const fetchUser= async (user:User['_id']):Promise<User|null> => {
		try{
			const { url }= ApiList.user.readUserasUser
			const urlString= `${url}/user/${user}`
			
			if(token){
				const response:Api_ReadUser|null= await getApi<Api_ReadUser>(urlString,token)			
				
				return useMocked 
					?	userList.filter(i => i._id===user).length 
						?	userList.filter(i => i._id===user)[0] 
						: null
					:	response===null 
						?	null
						:	response.user
			}else{
				return null
			}
		}catch(e){
			return null
		}
	}

	const fetchUserAsManager= async <T extends User> (user:{id:string}|string):Promise<T|null> => {
		try{
			const { url }= ApiList.user.readUserasUser
			return await getApi<User>(url,token) as T|null
		}catch(e){
			return null
		}
	}

	const updateUserAsUser= async <T extends UserUpdateParam>(id:User['_id'], param: { type: UserUpdateParam, value: string}):Promise<{ type: UserUpdateParam, changed: string, state:ApiResponseVals}> => {
		try{
			const { url }= ApiList.user.updateUserAsUser
			const urlString= `${url}/${id}/${param.type}`
			//changed: string
			const response:Api_UpdateUser<User[T]>|null= await getApi<Api_UpdateUser<User[T]>>(urlString,token)
			return {
				type: param.type,
				changed: param.value,
				state: response===null ?ApiResponse.update.fail :ApiResponse.update.success
			}
		}catch(e){
			return {
				type: param.type,
				changed: param.value,
				state: ApiResponse.update.fail
			}
		}
	}

	return {
		fetchUser,
		fetchUserAsManager,
		updateUserAsUser,
	}
}
