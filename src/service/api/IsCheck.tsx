import { 
	Api_ReadQuestion_Param,Api_ReadQuestionAsUser_Param,Api_ReadQuestionAsManager_Param,
	Api_CreateQuestion_Param,Api_CreateQuestionAsUser_Param,Api_CreateQuestionAsManager_Param
} from '../../type/type.api'

export const isReadQuestionParamManager = (value: Api_ReadQuestion_Param): value is Api_ReadQuestionAsManager_Param => {
	return (
		"date" in value &&
		"datetime" in value
	)
}
export const isReadQuestionParamUser = (value: Api_ReadQuestion_Param): value is Api_ReadQuestionAsUser_Param => {
	return (
		"id" in value
	)
}

export const isCreateQuestionParamManager = (value: Api_CreateQuestionAsManager_Param['param']): value is Api_CreateQuestionAsManager_Param['param'] => {
	return (
		"content" in value &&
		"employeeType" in value &&
		"priority" in value && 
		"solved" in value
	)
}
export const isCreateQuestionParamUser = (value: Api_CreateQuestionAsUser_Param['param']): value is Api_CreateQuestionAsUser_Param['param'] => {
	return (
		"content" in value
	)
}