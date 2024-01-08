import { ErrorType,SubType } from '../type/type.app'
import { Version, StartEnd, ManagerBase, ShiftType } from './type.shift'
import { Absence, Swap, Blocker } from './type.request'

export type handleBoldReturn= {
	startIndex:number,
	endIndex:number,
	type:string,
	text: string
}


export type ApiStatenames= 'success' | 'fail'
export type ApiState= {
	"state": ApiStatenames
}
export interface RosterCreateParam extends StartEnd{
}

export const UpdateRosterOptions= [
	false,

] as const

export interface Roster extends Version,ManagerBase,StartEnd{
	"_id": string    
	"isActive": true
}

export interface RosterShift extends ShiftType{
	roster: string
}

export type DeleteShiftResponse= ApiState & {
	"deletedShift": ShiftType | ErrorType
}

export type CreateShiftResponse={
	"shift": string
}

export type UpdateOptions= 'shiftEnded'

// ACTIVITY

export type ActivityType= 'absence' | 'swap' | 'blocker'

export type ActivityItem= { __type: ActivityType } & {
	data: (Absence | Swap | Blocker)
}
