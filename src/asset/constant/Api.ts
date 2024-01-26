const baseUrl= 'https://localHost:2100'

type Api={
	url: string,
	body?: object
	data?: object
	urlParam?: string
}

const Body={
	string: 'string',
	boolean: 'boolean',
	number: 'number'
}

type typeApis={
	auth:{
		loginUser: Api
		registerUser: Api
		loginManager: Api
		registerManager: Api
		verify: Api
		getVC: Api
		pwUpdate: Api
		signOut: Api
		refreshToken: Api
	},
	user: {
		readUserasUser: Api
		readUserasManager: Api
		updateUserAsUser: Api
	},
	roster: {
		readRoster: Api
		readRosterShift: Api
		updateRoster: Api
		deleteRoster: Api
	},
	shift:{
		readShift: Api
		createShift: Api
		readPreferredShift: Api
		updateShift: Api
		deleteShift: Api
	}
	request:{
		readSwapRequested: Api,
		readSwapOffer: Api,
		shiftSwapOfferUpdate: Api,
		readBlocker: Api,
		createBlocker: Api,
		deleteBlocker: Api,
		absenceCreate: Api,
		absenceRead: Api,
		absenceUpdate: Api,
		absenceUpdateChanged: Api,
		absenceDelete: Api,
	},
	chat:{
		createChat: Api,
		readChatAsUser: Api,
		readChatAsManager: Api,
		deleteChatAsManager: Api,
	}
	message:{
		createMessage: Api,
		readMessage: Api,
		updateMessage: Api,
		deleteMessage: Api,
	}
	question:{
		createAnswerAsUser: Api,
		createAnswerAsManager: Api,
		deleteAnswerAsUser: Api,
		deleteAnswerAsManager: Api,
		readAnswerAsUser: Api,
		readAnswerAsManager: Api,
		updateAnswerIsRead: Api,
		updateAnswerReaction: Api,
		updateQuestionAsManager: Api,
	}
}

export const ApiList:typeApis= {
	auth:{
		signOut:{
			url: `${baseUrl}/api/user/signout`, //DUMMY
			data: {
				id: "User['_id']"
			}
		},
		pwUpdate:{
			url: `${baseUrl}/api/user/password`, //DUMMY
			data: {
				password: 'string'
			}
		},
		getVC:{
			url: `${baseUrl}/api/user/verification-code`,	//DUMMY
			data: {	
				code: 'number[]'
			}
		},
		verify:{
			url: `${baseUrl}/api/user/emailverify`,	//DUMMY
			data: {	
				code: 'number[]'
			}
		},
		loginUser: {
			url: `${baseUrl}/api/user/login`,
			data: {
				email: 'string',
				password: 'string'
			}
		},
		registerUser: {
			url: `${baseUrl}/api/user/register`,
			data: {
				name: 'string',
				email: 'string',
				password: 'string'
			}
		},
		loginManager: {
			url: `${baseUrl}/api/manager/login`,
			data:{
				email: 'string',
				password: 'string'
			}
		},
		registerManager: {
			url: `${baseUrl}/api/manager/register`,
			data: {
				name: 'string',
				email: 'string',
				password: 'string'
			}
		},
		refreshToken:{
			url: `${baseUrl}/api/refreshToken`,
			data: {
				token: 'string',
			}
		}
	},
	user:{
		readUserasUser: {
			url: `${baseUrl}/api/staff/user/read`,
		},
		readUserasManager:{
			url: `${baseUrl}/api/staff/user/read`,
		},
		updateUserAsUser:{
			url: `${baseUrl}/api/staff/user/update/`,
		},
	},
	shift:{
		createShift:{
			url: `${baseUrl}/api/roster/shift/create`,
		},
		readShift:{
			url: `${baseUrl}/api/roster/shift/read`,
		},
		readPreferredShift:{
			url: `${baseUrl}/api/roster/preferredShift/read`,
		},
		updateShift:{
			url: `${baseUrl}}/api/roster/shift/update`,
			urlParam: `/636786d0a4d230db445b27e0/shiftEnded`,
		},
		deleteShift: {
			url: `${baseUrl}/api/roster/shift/delete/636786d0a4d230db445b27e0`,
		}
	},
	roster:{
		readRoster:{
			url: `${baseUrl}/api/roster/roster/read`,
		},
		readRosterShift:{
			url: `${baseUrl}/api/roster/read/shifts`,
		},
		updateRoster:{
			url: `${baseUrl}/api/roster/update`,
		},
		deleteRoster:{
			url: `${baseUrl}/api/roster/roster/delete`,
		}
	},
	request:{
		readSwapRequested: {
			url: `${baseUrl}/api/roster/shiftSwapRequest/read`,
		},
		readSwapOffer:{
			url: `${baseUrl}/api/roster/shiftSwapOffer/read`,
		},
		shiftSwapOfferUpdate:{
			url: `${baseUrl}/api/roster/shiftSwapOffer/update/`,
			urlParam: `/id/revoke`
		},
		readBlocker:{
			url: `${baseUrl}/api/roster/preferredShift/read`,
		},
		createBlocker:{
			url: `${baseUrl}/api/roster/blocker/create`,
			body: {
				"shiftRosterTemplate": Body.string 
			}
		},
		deleteBlocker:{
			url: `${baseUrl}/api/roster/blocker/delete`,
		},
		absenceCreate:{
			url: `${baseUrl}/api/roster/absence/create`,
		},
		absenceRead:{
			url: `${baseUrl}/api/roster/absence/read`,
		},
		absenceUpdate:{
			url: `${baseUrl}/api/roster/absence/update`,
			data: {
				"absence":  {
					"_id": "636e24135ff90be2f8f5f064",
					"user": "636649dd04b9c34feae00766",
					"manager": "6366495804b9c34feae0074d",
					"location": "6366495904b9c34feae00750",
					"starting": "2022-11-19T07:00:00.654Z",
					"ending": "2022-11-19T15:00:00.654Z",
					"typeOfAbsence": 1,
					"absenceRequested": true,
					"absenceAccepted": false,
					"absenceDenied": false,
					"absenceEnded": false,
					"date": "2022-11-11T10:29:39.261Z",
					"__v": 0
				}
			}
		},
		absenceUpdateChanged:{
			url: `${baseUrl}/api/roster/absence/update`,
		},
		absenceDelete:{
			url: `${baseUrl}/api/roster/absence/delete`,
		}
	},
	chat:{
		createChat: {
			url: `${baseUrl}/api/chat/create`,
		},
		readChatAsManager: {
			url: `${baseUrl}/api/chat/read`,
		},
		readChatAsUser: {
			url: `${baseUrl}/api/chat/read`,
		},
		deleteChatAsManager: {
			url: `${baseUrl}/api/chat/delete`,
		},
	},
	message:{
		createMessage:{
			url: `${baseUrl}/api/chat/read`,
			data: {
				content: `string`,
				employeeType: `number`,
				priority: `number`
			}
		},
		readMessage:{
			url: `${baseUrl}/api/message/read`,
			urlParam: `/2023-11-03/2023-12-03`
			
		},
		updateMessage:{
			url: `${baseUrl}/api/message/update`,
			urlParam: `/messageId as string`,
			data: {
					"content": `string`,
					"employeeType": `number`,
					"priority": `number`
			}		
		},
		deleteMessage:{
			url: `${baseUrl}/api/message/delete`,
			urlParam: `/messageId as string`,
			data: {
					"content": `string`,
					employeeType: `number`,
					priority: `number`
			}		
		}
	},
	question:{
		createAnswerAsUser:{
			url: `${baseUrl}/api/answerQuestion/create`,
			urlParam: '/id',
			data: {
				content: `string`,
			}
		},
		createAnswerAsManager: {
			url: `${baseUrl}/api/question/create`,
			data: {
				content: `string`,
				employeeType: 0,
				priority: 1
			}
		},
		deleteAnswerAsUser: {
			url: `${baseUrl}/api/answerQuestionManager/delete`,
			urlParam: 'id',
		},
		deleteAnswerAsManager: {
			url: `${baseUrl}/api/question/delete`,
			urlParam: 'id',
		},
		readAnswerAsUser: {
			url: `${baseUrl}/api/answerQuestion/read`,
			urlParam: 'id',
		},
		readAnswerAsManager: {
			url: `${baseUrl}/api/question/read`,
			urlParam: '/day/datetime',
		},
		updateAnswerIsRead: {
			url: `${baseUrl}/api/answerQuestion/update/isRead`,
		},
		updateAnswerReaction: {
			url: `${baseUrl}/api/answerQuestion/update`,
			urlParam: '/id/up|/down',
		},
		updateQuestionAsManager:{
			url: `${baseUrl}/api/answerQuestion/update/63662dd3d2cb009fb752cd18`,
			urlParam: '/id/up|/down',
			data:{
				"content": 'string',
				"employeeType": 'number',
				"priority": 'number',
				"solved": 'boolean'
			}
		}
	}
}