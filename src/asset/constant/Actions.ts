export const CONTEXT_ACTIONS={
	AUTH: {
		GET_STORAGE: "Get_Storage",
		RESTORE_TOKEN: 'Restore_Token',
		SIGNIN: {
			USER: 'Sign_In_User',
			MANAGER: 'Sign_In_Manager',
		},
		SIGNOUT: 'Sign_Out_User',
		FORGOT_PW: 'Forgot_Pw',
		LISTEN_USER: 'Listen_User', 
	},
	MODAL:{
		INITIAL: 'Set_Modal_Props',	
	  	RESET: 'Reset_Modal_Props',
	  	SET_INPUT: 'Set_Input_Params',
	},
	TAB:{
		RESTORE: 'Restore_Tab'
	},
	USER:{
		INSERT: 'Create_New_User',
		UPDATE: 'Update_User',
		SELECT: 'Select_User',
		DELETE: 'Delete_User'
	},
	DB:{
		USER:{
			INSERT: 'Create_New_User',
			UPDATE: 'Update_User',
			SELECT: 'Select_User',
			DELETE: 'Delete_User'
		},
		SHIFT:{
			START: 'Start_Shift',
			UPDATE: 'Update_Shift',
			INSERT: 'Create_New_Shift',
			SELECT: 'Select_Shift',
			DELETE: 'Delete_Shift'
		},
		REQUEST:{
			INSERT: 'Create_New_Request',
			UPDATE: 'Update_Request',
			SELECT: 'Select_Request',
			DELETE: 'Delete_Request'
		},
		MESSAGE:{
			INSERT: 'Create_New_Message',
			UPDATE: 'Update_Message',
			SELECT: 'Select_Message',
			DELETE: 'Delete_Message'
		}
	}
} as const 



export type ModalActionKeys = keyof typeof CONTEXT_ACTIONS['MODAL'];
export type ModalActionVals = typeof CONTEXT_ACTIONS['MODAL'][ModalActionKeys];

export type DBUSERActionKeys = keyof typeof CONTEXT_ACTIONS['DB']['USER']
export type DBUSERActionVals = typeof CONTEXT_ACTIONS['DB']['USER'][DBUSERActionKeys];

export type DBSHIFTActionKeys = keyof typeof CONTEXT_ACTIONS['DB']['SHIFT']
export type DBSHIFTActionVals = typeof CONTEXT_ACTIONS['DB']['SHIFT'][DBSHIFTActionKeys];

export type DBREQUESTActionKeys = keyof typeof CONTEXT_ACTIONS['DB']['REQUEST']
export type DBREQUESTActionVals = typeof CONTEXT_ACTIONS['DB']['REQUEST'][DBUSERActionKeys];

export type DBMESSAGEActionKeys = keyof typeof CONTEXT_ACTIONS['DB']['MESSAGE']
export type DBMESSAGEActionVals = typeof CONTEXT_ACTIONS['DB']['MESSAGE'][DBMESSAGEActionKeys];
