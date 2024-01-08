import { User } from '../context/user/type.user'

export type ShiftSwapState={
	"shiftSwapRequested": boolean
  "shiftSwapPending": boolean
  "shiftSwapAccepted": boolean
}

export type ShiftLayoutProps={
	action?: React.ReactElement
	content: React.ReactElement
	avatar: React.ReactElement
}

export type Version= {
	"__v": number
}

export type ManagerBase= {
	"manager": User['_id'],
  "location": string,
}

export type StartEnd= {
	"starting": string //Date
  "ending": string //Date
}

export interface ShiftType extends ManagerBase,StartEnd,ShiftSwapState,Version{
	"shiftEnded": false,
	"_id": string
	"user": string
	"employeeType": number
	"date": string //Date
}

export type Person= User | null

export type ShiftPlanType={
	people: Person[]
	shift: ShiftType
}

