import { TabItem } from '../../../component/app/button/tab/type.tab'
import { RequestId } from '../../../type/type.request'

export const tabs:TabItem<RequestId>[]=[
	{
		id: 'request',
		text: 'Shift',
		state: false
	},
	{
		id: 'blocker',
		text: 'Blocker',
		state: false
	},
	{
		id: 'absence',
		text: 'Vacation',
		state: false
	},
	{
		id: 'sickness',
		text: 'Sick Note',
		state: false
	}
]