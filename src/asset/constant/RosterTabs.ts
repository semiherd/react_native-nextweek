export const RosterTabs:{id: 'overview'|'activity'|'shift',title:string}[]=[
	{id: 'overview', title:'overview'},
	{id: 'shift', title:'shift plan'},
	{id: 'activity', title:'activities overview'},
]

export const ActivityAction={
	vacation: 'is going for vacations',
	onVacation: 'is on vacations',
	swap: 'swapped with'
} as const 

export type ActionKeys = keyof typeof ActivityAction;
export type ActionVals= typeof ActivityAction[ActionKeys]
