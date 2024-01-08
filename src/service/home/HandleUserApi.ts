import { User } from '../../context/user/type.ctx.user'
import { UserType } from '../../type/type.app'

function handleUserType(data:User):User{
	try{
		return {
			_id: data._id,
			id: data.id,
			name: data.name,
			image: null, // data.imageSource,
			manager: data.manager,
			overtime: data.breakTimer,
			monthlyHour: {
				capacity: data.monthlyHours,
				completed: 1,
			},
			vacation: {
				total: data.vacationDays,
				used: 1,
			},
			role: data.employeeType,
			score: data.employeeScore,
		} 
	}catch(e){
		console.log(e)
	}
}
export {
	handleUserType
}