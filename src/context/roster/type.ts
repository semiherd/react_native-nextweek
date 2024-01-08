import { ActivityItem } from '../../component/type/type.activity'
import { ShiftDataType } from '../../component/type/type.shift'
import { UserType } from '../../type/type.app'

export interface RosterState{
	activity:  ActivityItem[] | []
	shift:  ShiftDataType[] | []
	overview:  ShiftDataType[] | []
}

type FetchActivity= {
	type: 'fetchActivity'
	payload: {
		user: UserType['id'],
		data:  ActivityItem[] | []
	}
}


export type RosterReducer= FetchActivity

