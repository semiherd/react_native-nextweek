import { TabItem } from '../../../component/app/button/tab/type.tab'
import { RequestId } from '../../../type/type.request'

export const tabs:TabItem<RequestId>[]=[
	{
		id: 'swap-out',
		text: 'Shift',
		state: false
	},
	{
		id: 'blocker',
		text: 'Blocker',
		state: false
	},
	{
		id: 'absence-vacation',
		text: 'Vacation',
		state: false
	},
	{
		id: 'absence-sickness',
		text: 'Sick Note',
		state: false
	}
]