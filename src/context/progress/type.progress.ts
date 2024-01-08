type Ext<T,U>= T extends U ?T :never

export type ProgressApi={
	updateError: (param: Api_UpdateError_Param) => Promise<void>
	updateLoading: (param: Api_UpdateLoading_Param) => Promise<void>
	resetError: () => void
	resetLoading: () => void
}

export type ProgressState={
	error: ErrorState
	loading: LoadingState
}

export type ErrorState={
	state: boolean
	error: string|null
	description: string
}
export type LoadingState={
	state: boolean
	description: string
}

export type Api_UpdateError_Param={
	state: boolean
	error: string|null
	description: string
}
export type Api_UpdateLoading_Param={
	state: boolean
	description: string
}

type UpdateLoading= {
	type: 'update_loading'
	payload: Api_UpdateLoading_Param
}

type UpdateError= {
	type: 'update_error'
	payload: Api_UpdateError_Param
}
type ResetError= {
	type: 'reset_error'
}
type ResetLoading= {
	type: 'reset_loading'
}

export type ProgressReducer= UpdateLoading | UpdateError | ResetError | ResetLoading

