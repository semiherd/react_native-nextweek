import axios from '../api/Axios';
import { useUserState, useUserDispatch } from '../../context/user/UserContext';
import { ApiList } from '../../asset/constant/Api';

const useRefreshToken = () => {
	const { token,user,manager } = useUserState()
	const { refreshToken } = useUserDispatch()

	const refresh = async () => {
		
		const response = await axios.get(ApiList.auth.refreshToken.url, {
				withCredentials: true
		})
		refreshToken(response.data.accessToken)
		
		return response.data.accessToken
	}
	return refresh
}

export default useRefreshToken;