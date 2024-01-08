import { SettingSectionType } from '../../../type/type.profile'
import { arrowrightPng } from '../../../asset/image/roster/index'

export const sectionList:SettingSectionType[]=[
	{
		_id: 'Contact',
		to: 'Update',
		icon: arrowrightPng,
		title: 'Contact Data',
		item: [
			{
				header: 'name', value:''
			},
			{
				header: 'email', value:''
			},
		]
	},
	{
		_id: 'Security',
		to: 'Update' ,
		icon: arrowrightPng,
		title: 'Security',
		item: [
			{
				header: 'password' , value:'*******'
			},
		]
	},
	{
		_id: 'Personal',
		to: 'Update',
		icon: arrowrightPng,
		title: 'Personal Data',
		item: [
			{
				header: 'postalCode', value: ''
			}
		]
	}
]