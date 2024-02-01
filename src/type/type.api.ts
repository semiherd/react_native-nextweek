import { StartEnd, Version, ManagerBase, ShiftType, ShiftSwapState } from './type.shift'
import { Swap, Absence, Blocker, AbsenceState} from './type.request'
import { User } from '../context/user/type.user'
import { UpdateRosterOptions, Roster, RosterShift } from './type.roster'
import { NestedKey,NestedVal } from './type.app'
import { SubType } from './type.app'
import { ReadQuestionAsManagerResponse,Answer,Question,Message } from './type.message'
import { MessageCategory } from '../component/message/type/type.message'

const Api_Response= {
	success: 'success',
	fail: 'fail'
} 

export const ApiResponse= {
	swapUpdate:{
		fail: 'Swap-Update-Failed',
		success: 'Swap-Update-Completed'
	},
	vc:{
		fail: 'Verification Code Request Failed',
		success: 'Verification Code Request Successful'
	},
	delete:{
		fail: 'Delete Failed',
		success: 'Delete Successful'
	},
	pwUpdate:{
		fail: 'Password Update Failed',
		success: 'Password Update Successful',
	},	
	signIn:{
		fail: 'SignIn Failed',
		success: 'SignIn Successful',
	},
	signOut:{
		fail: 'SignOut Failed',
		success: 'SignOut Successful',
	},
	signUp:{
		fail: 'SignUp Failed',
		success: 'SignUp Successful',
	},
	create:{
		fail: 'Create Failed',
		success: 'Create Successful',
	},
	update:{
		fail: 'Update Failed',
		success: 'Update Successful',
	},
	verify: {
		fail: 'Verification Failed',
		success: 'Verification Successful',
	},
	token: {
		fail: 'Token Failed',
		success: 'Token Confirmed',
	}
} as const 

export type ApiResponseVals= NestedVal<typeof ApiResponse>

// USER
export type Api_ReadUser={
	"user": User
}

export type Api_UpdateUser<TVal>={
	"changed": TVal
}

// SWAP
export type Api_CreateSwapRequest_Param= {
	"user": string
	"shift": string
}
export type Api_CreateSwapRequest= {
	"shiftSwap": string
}

export type Api_ReadSwapRequest= {
	"shiftSwapsOfferedToYou": Swap[]
	"shiftSwapsOfferedByYou": Swap[]
}

export type Api_ReadSwapOffer= {
	shiftSwapsRequested: [
		ManagerBase & Version & {
			"_id": ShiftType['_id']
			"user": User['_id']
			"shift": ShiftType['_id']
			"date": string //Date,		
		}
	]
}

export type Api_UpdateSwapOffer= ApiResponseVals

// ROSTER
export type Api_ReadRoster= {
	"roster": Roster[]
}

export type Api_ReadRosterShift= {
	"shifts": RosterShift[]
}

export type Api_UpdateRoster_Param={
	id: Roster['_id']
	type: keyof typeof UpdateRosterOptions
}

export type Api_UpdateRoster= ApiResponseVals

export type Api_DeleteRoster_Param={
	id: Roster['_id']
}

export type Api_DeleteRoster={
	"deletedShifts": {
		"acknowledged": boolean,
		"deletedCount": number
	},
	"deletedRoster": Roster
}

// BLOCKER
export type Api_CreateBlocker_Param= {
	"shiftRosterTemplate": string
}
export type Api_CreateBlocker= {
	"roster": string
}

export type Api_ReadBlocker= {
	"preferredShifts": Blocker[]
}

export type Api_DeleteBlocker= {
	"deletedPreferredShift": Blocker
}


// SHIFT
export type Api_CreateShift= {
	"shift": string
}

export type Api_CreateShift_Param= {
	"user": User['_id'],
	"starting": string,
	"ending": string
}

export type Api_ReadShift= {
	"shifts": ShiftType[]
}

export type Api_ReadShift_Param= {
	"user": User['_id'],
	"starting": string,
	"ending": string
}

export type Api_UpdateShift= {
	changed: boolean
}

export type Api_UpdateShift_Param= ShiftType['_id']

export type UpdateShiftOptions= 'shiftEnded' | 'shiftStarted'

export type Api_DeleteShift= {
  "deletedShift": ManagerBase & StartEnd & ShiftSwapState & Version & 
		{
			"shiftSwapRequested": boolean
			"_id": string
			"user": string
			"employeeType": number 
			"shiftEnded": boolean
			"date": string //"2022-11-06T10:05:04.468Z",
		}
}
export type Api_DeleteShift_Param= ShiftType['_id']

// ABSENCE
export type Api_CreateAbsence= {
  "absence": string
}
export type Api_CreateAbsence_Param= StartEnd & {
	"typeOfAbsence": number
}

export type Api_ReadAbsence= {
  "absences": Absence[]
}

export type Api_UpdateAbsenceChanged_Param= keyof (AbsenceState & StartEnd )
export type Api_UpdateAbsenceChanged= ApiResponseVals

export type Api_UpdateAbsence_Param= {
	"absence":  Absence
}
export type Api_UpdateAbsence= ApiResponseVals

export type Api_DeleteAbsence_Param= Absence['_id']

export type Api_DeleteAbsence={
  "deletedAbsence": Absence
}

// CHAT
export type Api_ReadChat= Api_ReadChatAsUser|Api_ReadChatAsManager

export type ApiResponse_Chat<T extends Api_CreateChat|Api_ReadChat|Api_DeleteChatAsManager>= 
	{
		state: 'success'
		data: T | null
	} | 
	{ 
		state: 'fail' , 
		error: string 
	}

	export type Api_CreateChat= {
		"chat": string
	}

	export type Api_CreateChat_Param= {}

	export type Api_ReadChatAsUser= {
		"chat": Message[]
	}
	export type Api_ReadChatAsManager= {
		"chat": Message[]
	}
	export type Api_ReadChatAsManager_Param= {}
	export type Api_ReadChatAsUser_Param= {}

	
	export type Api_DeleteChatAsManager_Param= string

	export type Api_DeleteChatAsManager= {
		"deletedChat": string
	}
	
// MESSAGE

export type MessageApi_Type= Api_CreateMessage|Api_ReadMessage|Api_UpdateMessage|Api_DeleteMessage

export type ApiResponse_Message<T extends MessageApi_Type>= 
	{
		state: 'success'
		data: T | null
	} | 
	{ 
		state: 'fail' , 
		error: string 
	}

export type Api_CreateMessage= {
	"message": string
}
export type Api_CreateMessage_Param= SubType<Message,'content'|'employeeType'|'priority'>

export type Api_ReadMessage= {
	"message": Message[]
}
export type Api_ReadMessage_Param= {}


export type Api_UpdateMessage= {
	"updatedMessage": Message
}
export type Api_UpdateMessage_Param= SubType<Message,'content'|'employeeType'|'priority'>

export type Api_DeleteMessage= {
	"deletedMessage": Message
}

export type Api_DeleteMessage_Param= Message['_id']

export type SendMessageParam<T extends MessageCategory>= T extends 'message'
	? ApiResponse_Message<MessageApi_Type>
	: T extends 'question'
		? ApiResponse_Question<QuestionApi_Type>
		: null

// QUESTION

export type QuestionApi_Type= Api_CreateQuestion|Api_ReadQuestion|Api_UpdateQuestion|Api_DeleteQuestion|Api_UpdateAnswerIsRead|Api_UpdateAnswerReaction

export type ApiResponse_Question<T extends QuestionApi_Type>= 
	{
		state: 'success'
		data: T | null
	} | 
	{ 
		state: 'fail' , 
		error: string 
	}

export type BaseParam= {
	"content": string
	"employeeType": number
	"priority": number
}

// CREATE QUESTION
export type Api_CreateQuestionAsUser= {
	"answerQuestion": string
}
export type Api_CreateQuestionAsManager= {
	"question": string
}

export type Api_CreateQuestionAsUser_Param= {
	id: Message['_id']
	param: {
		content: BaseParam['content']
	}
}

export type Api_CreateQuestionAsManager_Param= {
	param: BaseParam & {
		"solved": boolean
	}
}

export type Api_CreateQuestion_Param<T extends 'user'|'manager'>= T extends 'manager'
	? Api_CreateQuestionAsManager_Param
	:	T extends 'user'
		? Api_CreateQuestionAsUser_Param
		: never

export type Api_CreateQuestion= Api_CreateQuestionAsUser | Api_CreateQuestionAsManager 

// READ QUESTION
export type Api_ReadQuestionAsUser= {
	"answerQuestion": Answer[]
}
export type Api_ReadQuestionAsManager= {
	"question": ReadQuestionAsManagerResponse[]
}
export type Api_ReadQuestionAsUser_Param={ 
	id: string
}
export type Api_ReadQuestionAsManager_Param={
	date: string,
	datetime: string
}

export type Api_ReadQuestion_Param= Api_ReadQuestionAsUser_Param|Api_ReadQuestionAsManager_Param 
export type Api_ReadQuestion= Api_ReadQuestionAsUser|Api_ReadQuestionAsManager 
 
// DELETE QUESTION
export type Api_DeleteQuestionAsUser= {
	"deletedAnswerQuestionManager": Answer
}
export type Api_DeleteQuestionAsManager= {
	"deletedQuestion": Question
}
export type Api_DeleteQuestion_Param= {
	id: string
}
export type Api_DeleteQuestion= Api_DeleteQuestionAsUser|Api_DeleteQuestionAsManager

// UPDATE QUESTION

export type Api_UpdateAnswerIsRead={
	"answerQuestion": Answer[]
}
export type Api_UpdateAnswerIsRead_Param= {
	id: string
}

export type Api_UpdateAnswerReaction={
	"answerQuestion": Answer[]
}
export type Api_UpdateAnswerReaction_Param= {
	id: string
	type: 'up' | 'down'
}

export type Api_UpdateQuestionAsManager= {
	"updatedQuestion": Question
}
export type Api_UpdateQuestionAsManager_Param= {
	id: string
	param: BaseParam & {
		"solved": boolean
	}
}

export type Api_UpdateQuestion_Param= Api_UpdateQuestionAsManager_Param
export type Api_UpdateQuestion= Api_UpdateQuestionAsManager


