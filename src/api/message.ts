import { 
	ApiResponse,
	ApiResponseVals,
	Api_CreateMessage,
	Api_ReadMessage,
	Api_UpdateMessage,
	Api_DeleteMessage,
	Api_CreateMessage_Param,
	Api_ReadMessage_Param,
	Api_UpdateMessage_Param,
	Api_DeleteMessage_Param,
	Api_ReadChatAsManager,
	Api_ReadChatAsUser,
	Api_CreateChat,
	Api_DeleteChatAsManager,
	Api_CreateQuestionAsUser,Api_CreateQuestionAsManager,
	Api_DeleteQuestionAsUser,Api_DeleteQuestionAsManager,
	Api_ReadQuestionAsUser,Api_ReadQuestionAsManager,
	Api_UpdateQuestionAsManager,Api_UpdateAnswerIsRead,Api_UpdateAnswerReaction,
} from '../../type/type.api'

export const mock_readChatAsManager:Api_ReadChatAsManager= {
	"chat": [
		{
			"_id": "63663aa344a952ab7b72151e",
			"chat": "635a4ba0d33d712ab9d657cf",
			"content": "Dritte Message eines Managers",
			"sendBy": "user4",
			"model_type": "User",
			"employeeType": 0,
			"priority": 1,
			"date": "2022-11-05T10:27:47.089Z",
			"__v": 0
		},
		{
			"_id": "63663bc8b6fd5caae20a33c9",
			"chat": "635a4ba0d33d712ab9d657cf",
			"content": "Dritte Message eines Managers",
			"sendBy": "user1",
			"model_type": "Manager",
			"employeeType": 0,
			"priority": 1,
			"date": "2022-11-05T10:32:40.656Z",
			"__v": 0
		},
		{
			"_id": "63663c17b6fd5caae20a33d2",
			"chat": "635a4ba0d33d712ab9d657cf",
			"content": "Dritte Message eines Managers",
			"sendBy": "user2",
			"model_type": "Manager",
			"employeeType": 0,
			"priority": 1,
			"date": "2022-11-05T10:33:59.505Z",
			"__v": 0
		}
	]
}
export const mock_readChatAsUser:Api_ReadChatAsUser= {
	"chat": [
		{
			"_id": "63663aa344a952ab7b72151e",
			"chat": "635a4ba0d33d712ab9d657cf",
			"content": "Dritte Message eines Managers",
			"sendBy": "user4",
			"model_type": "User",
			"employeeType": 0,
			"priority": 1,
			"date": "2022-11-05T10:27:47.089Z",
			"__v": 0
		},
		{
			"_id": "63663bc8b6fd5caae20a33c9",
			"chat": "635a4ba0d33d712ab9d657cf",
			"content": "Dritte Message eines Managers",
			"sendBy": "user1",
			"model_type": "Manager",
			"employeeType": 0,
			"priority": 1,
			"date": "2022-11-05T10:32:40.656Z",
			"__v": 0
		},
		{
			"_id": "63663c17b6fd5caae20a33d2",
			"chat": "635a4ba0d33d712ab9d657cf",
			"content": "Dritte Message eines Managers",
			"sendBy": "user2",
			"model_type": "Manager",
			"employeeType": 0,
			"priority": 1,
			"date": "2022-11-05T10:33:59.505Z",
			"__v": 0
		}
	]
}
export const mock_createChat:Api_CreateChat={
	"chat": "63663c17b6fd5caae20a33d2"
}
export const mock_deleteChatAsManager:Api_DeleteChatAsManager={
	"deletedChat": "63663c17b6fd5caae20a33d2"
}
	
export const mock_createMessage:Api_CreateMessage={
	"message": "63663c17b6fd5caae20a33d2"
}
export const mock_readMessage:Api_ReadMessage={
	"message": [
			{
				"_id": "63663aa344a952ab7b72151e",
				"chat": "635a4ba0d33d712ab9d657cf",
				"content": "Dritte Message eines Managers",
				"sendBy": "user4",
				"model_type": "User",
				"employeeType": 0,
				"priority": 1,
				"date": "2022-11-05T10:27:47.089Z",
				"__v": 0
			},
			{
				"_id": "63663bc8b6fd5caae20a33c9",
				"chat": "635a4ba0d33d712ab9d657cf",
				"content": "Dritte Message eines Managers",
				"sendBy": "user1",
				"model_type": "Manager",
				"employeeType": 0,
				"priority": 1,
				"date": "2022-11-05T10:32:40.656Z",
				"__v": 0
			},
			{
				"_id": "63663c17b6fd5caae20a33d2",
				"chat": "635a4ba0d33d712ab9d657cf",
				"content": "Dritte Message eines Managers",
				"sendBy": "user2",
				"model_type": "Manager",
				"employeeType": 0,
				"priority": 1,
				"date": "2022-11-05T10:33:59.505Z",
				"__v": 0
			}
		]
}

export const mock_updateMessage:Api_UpdateMessage={
	"updatedMessage": {
			"_id": "63663a0944a952ab7b721507",
			"__v": 0,
			"date": "2022-11-05T10:25:13.230Z",
			"chat": "635a4ba0d33d712ab9d657cf",
			"model_type": "Manager",
			"sendBy": "63591633ce3500600a28ced9",
			"priority": 1,
			"employeeType": 3,
			"content": "Erste Message eines Manangers. Und erste die geupdated wurde, mit Body"
	}
}
export const mock_deleteMessage:Api_DeleteMessage={
	"deletedMessage": {
    "_id": "63663a0944a952ab7b721507",
    "__v": 0,
    "date": "2022-11-05T10:25:13.230Z",
    "chat": "635a4ba0d33d712ab9d657cf",
    "model_type": "Manager",
    "sendBy": "63591633ce3500600a28ced9",
    "priority": 1,
    "employeeType": 3,
    "content": "Erste Message eines Manangers. Und erste die geupdated wurde, mit Body"
  }

}

export const mock_createQuestion:Api_CreateQuestionAsUser={
	"answerQuestion": "63662dd4d2cb009fb752cd1e"
}
export const mock_createQuestionAsManager:Api_CreateQuestionAsManager={
	"question": "6366303b73129d45e0a7feee"
}
export const mock_deleteQuestionAsUser:Api_DeleteQuestionAsUser={
	"deletedAnswerQuestionManager": {
		"_id": "63651e1263f480c70e7872a5",
		"content": "Anwtwort von user auf eine Frage",
		"sendBy": "6364ccc3c6d7246ec236e00d",
		"model_type": "User",
		"question": "6364efb8c708a74c8cdf55df",
		"date": "2022-11-04T14:13:38.893Z",
		"__v": 0
	}
}
export const mock_deleteQuestionAsManager:Api_DeleteQuestionAsManager={
	"deletedQuestion": {
			"_id": "636624a2951fd8b1d6641ca0",
			"__v": 0,
			"date": "2022-11-05T08:53:54.342Z",
			"solved": true,
			"chat": "635a4ba0d33d712ab9d657cf",
			"model_type": "Manager",
			"sendBy": "63591633ce3500600a28ced9",
			"priority": 1,
			"employeeType": 3,
			"content": "Erste Message eines Manangers. Und erste die geupdated wurde, mit Body"
		}
}

export const mock_readQuestionAsUser:Api_ReadQuestionAsUser={
	"answerQuestion": [
			{
				"_id": "63662dd3d2cb009fb752cd18",
				"content": "Anwtwort von user auf eine Frage",
				"sendBy": "63591633ce3500600a28ced9",
				"model_type": "Manager",
				"question": "63662dc8d2cb009fb752cd12",
				"date": "2022-11-05T09:33:07.652Z",
				"__v": 0
			},
			{
				"_id": "63662dd4d2cb009fb752cd1e",
				"content": "Anwtwort von user auf eine Frage",
				"sendBy": "63591633ce3500600a28ced9",
				"model_type": "Manager",
				"question": "63662dc8d2cb009fb752cd12",
				"date": "2022-11-05T09:33:08.587Z",
				"__v": 0
			}
		]
}
export const mock_readQuestionAsManager:Api_ReadQuestionAsManager={
		"question": [
			{
				"_id": "636625a737165bad8413baca",
				"chat": "635a4ba0d33d712ab9d657cf",
				"content": "Erste Question eines Managers",
				"sendBy": "63591633ce3500600a28ced9",
				"model_type": "Manager",
				"priority": 1,
				"employeeType": 0,
				"solved": false,
				"date": "2022-11-05T08:58:15.992Z",
				"__v": 0
			},
			{
				"_id": "6366303b73129d45e0a7feee",
				"chat": "635a4ba0d33d712ab9d657cf",
				"content": "Erste Question eines Managers",
				"sendBy": "63591633ce3500600a28ced9",
				"model_type": "Manager",
				"priority": 1,
				"employeeType": 0,
				"solved": false,
				"date": "2022-11-05T09:43:23.126Z",
				"__v": 0
			}
		]
}

export const mock_updateAnswerIsRead:Api_UpdateAnswerIsRead={
		"answerQuestion": [
			{
				"_id": "63662dd3d2cb009fb752cd18",
				"content": "Anwtwort von user auf eine Frage",
				"sendBy": "63591633ce3500600a28ced9",
				"model_type": "Manager",
				"question": "63662dc8d2cb009fb752cd12",
				"date": "2022-11-05T09:33:07.652Z",
				"__v": 0
			},
			{
				"_id": "63662dd4d2cb009fb752cd1e",
				"content": "Anwtwort von user auf eine Frage",
				"sendBy": "63591633ce3500600a28ced9",
				"model_type": "Manager",
				"question": "63662dc8d2cb009fb752cd12",
				"date": "2022-11-05T09:33:08.587Z",
				"__v": 0
			}
		]
}
export const mock_updateAnswerReaction:Api_UpdateAnswerReaction={
		"answerQuestion": [
			{
				"_id": "63662dd3d2cb009fb752cd18",
				"content": "Anwtwort von user auf eine Frage",
				"sendBy": "63591633ce3500600a28ced9",
				"model_type": "Manager",
				"question": "63662dc8d2cb009fb752cd12",
				"date": "2022-11-05T09:33:07.652Z",
				"__v": 0
			},
			{
				"_id": "63662dd4d2cb009fb752cd1e",
				"content": "Anwtwort von user auf eine Frage",
				"sendBy": "63591633ce3500600a28ced9",
				"model_type": "Manager",
				"question": "63662dc8d2cb009fb752cd12",
				"date": "2022-11-05T09:33:08.587Z",
				"__v": 0
			}
		]
}
export const mock_updateQuestionAsManager:Api_UpdateQuestionAsManager={
  "updatedQuestion": {
    "_id": "636624a2951fd8b1d6641ca0",
    "__v": 0,
    "date": "2022-11-05T08:53:54.342Z",
    "solved": true,
    "chat": "635a4ba0d33d712ab9d657cf",
    "model_type": "Manager",
    "sendBy": "63591633ce3500600a28ced9",
    "priority": 1,
    "employeeType": 3,
    "content": "Erste Message eines Manangers. Und erste die geupdated wurde, mit Body"
	}
}