import { 
	Api_ReadRosterShift,
	Api_CreateShift,
	Api_UpdateShift,
	Api_DeleteShift,
	Api_ReadShift,
} from '../../type/type.api'

export const mock_readPeopleInShift:Api_ReadShift= {
	shifts:[
		{
				"_id": "shiftId1",
				"user": "user3",
				"manager": "man1",
				"location":"loc1",
				"employeeType": 0,
				"starting": "2022-11-07T07:00:00.654Z",
				"ending": "2022-11-07T15:00:00.654Z",
				"shiftSwapRequested":false,
				"shiftSwapPending": false,
				"shiftSwapAccepted": false,
				"shiftEnded": false,
				"date": "2022-11-06T10:05:04.468Z",
				"__v": 0			
		},
		{
				"_id": "shiftId1",
				"user": "user4",
				"manager": "man1",
				"location":"loc1",
				"employeeType": 0,
				"starting": "2022-11-07T07:00:00.654Z",
				"ending": "2022-11-07T15:00:00.654Z",
				"shiftSwapRequested":false,
				"shiftSwapPending": false,
				"shiftSwapAccepted": false,
				"shiftEnded": false,
				"date": "2022-11-06T10:05:04.468Z",
				"__v": 0			
		}
	]
}

export  const mock_readShift:Api_ReadShift= {
	shifts:[
		{
				"_id": "shiftId1",
				"user": "user1",
				"manager": "man1",
				"location":"loc1",
				"employeeType": 0,
				"starting": "2022-11-07T07:00:00.654Z",
				"ending": "2022-11-07T15:00:00.654Z",
				"shiftSwapRequested":false,
				"shiftSwapPending": false,
				"shiftSwapAccepted": false,
				"shiftEnded": false,
				"date": "2022-11-06T10:05:04.468Z",
				"__v": 0			
		}
	]
}

export const mock_createShift:Api_CreateShift= {
		"shift": "shiftNew"
}
export const mock_updateShift:Api_UpdateShift= {
		"changed": true //false
}

export const mock_deleteShift:Api_DeleteShift= {
	"deletedShift": {
			"shiftSwapRequested": false,
			"_id": "shiftDeleted",
			"user": "user1",
			"manager": "man1",
			"location": "loc1",
			"employeeType": 0,
			"starting": "2022-11-07T07:00:00.654Z",
			"ending": "2022-11-07T15:00:00.654Z",
			"shiftSwapPending": false,
			"shiftSwapAccepted": false,
			"shiftEnded": true,
			"date": "2022-11-06T10:05:04.468Z",
			"__v": 0
		}
}
