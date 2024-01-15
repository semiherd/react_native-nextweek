import { FontStyling } from './type.app'
import { User } from '../context/user/type.user'
import { StartEnd,Version,ManagerBase } from './type.shift'

export type RequestRange= 'none' | 'day' 
export type RequestUpdateParam= 'revoked' | 'accepted'

export type Request= 'Swap' | 'Vacation' | 'Event'
export type RequestId= 'swap-in' | 'swap-out' | 'blocker' | 'absence' | 'vacation'

export const AbsenceTypes= ['Sickness','Vacation','Doctor'] as const

export type RequestBase= ManagerBase & StartEnd & Version

export type RequestUser= {
	"userRequesting": User['_id']
	"userOffering": User['_id']	
}

export type AbsenceState={
	"absenceRequested": boolean,
	"absenceAccepted": boolean,
	"absenceDenied": boolean,
	"absenceEnded": boolean,
}

export type SwapState={
	"swapAcceptedByUser": boolean,
	"swapDeniedByUser": boolean,
	"swapAcceptedByManager": boolean,
	"swapDeniedByManager": boolean,
	"offerRevoked": boolean,
}

export interface RequestItemType{
	styling?: {
		time: FontStyling
		type: FontStyling		
	}
}

export type Swap = SwapState & ManagerBase & Version & RequestUser &{
	"_id": string
	"date": string //Date"2022-11-11T08:41:19.098Z"
	"shiftRequested": string	
	"shiftOffered": string	
}

export interface Blocker extends RequestBase{
	"_id": string
	"user": User['_id']
	"priority": number
	"date": string //Date"2022-11-11T08:41:19.098Z"
}

export type Absence = AbsenceState & RequestBase &{
	"_id": string
	"user": User['_id']
	"typeOfAbsence": number
	"date":string //Date"2022-11-11T08:41:19.098Z"
}

export interface VacationDataType extends RequestUser{
	"_id": string
}

export interface EventDataType extends RequestUser{
	"_id": string
}

export type ConvertOptional<T extends RequestId,E>={
	[K in keyof Swap]?: K extends E
		? never
		: Swap[K]
}


