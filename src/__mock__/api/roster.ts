import { Api_DeleteRoster,Api_ReadRosterShift } from '../../type/type.api'

//export const mock_updateSwapOfferUpdate:Api_UpdateSwapOffer= "Update Successful"

export const mock_swapRoster= null

export const mock_deleteRoster:Api_DeleteRoster={
	"deletedShifts": {
		"acknowledged": true,
		"deletedCount": 1
	},
	"deletedRoster": {
		"_id": "636cbfb07bfdb830fa8f0c4b",
		"manager": "6366495804b9c34feae0074d",
		"location": "6366495904b9c34feae00750",
		"starting": "2022-11-13T07:00:00.654Z",
		"ending": "2022-11-13T15:00:00.654Z",
		"__v": 0,
		"isActive": true
	}

}

export const mock_readRosterShift:Api_ReadRosterShift={
		"shifts": [
			{
				"_id": "636cbfad7bfdb830fa8f0c45",
				"user": "636649dd04b9c34feae00766",
				"manager": "6366495804b9c34feae0074d",
				"location": "6366495904b9c34feae00750",
				"employeeType": 0,
				"starting": "2022-11-13T07:00:00.654Z",
				"ending": "2022-11-13T15:00:00.654Z",
				"shiftSwapRequested": false,
				"shiftSwapPending": false,
				"shiftSwapAccepted": false,
				"shiftEnded": false,
				"roster": "636cbf113d7e2eb6083dd32c",
				"date": "2022-11-10T09:09:01.259Z",
				"__v": 0
			},
			{
				"_id": "636cbfb07bfdb830fa8f0c4b",
				"user": "636649dd04b9c34feae00766",
				"manager": "6366495804b9c34feae0074d",
				"location": "6366495904b9c34feae00750",
				"employeeType": 0,
				"starting": "2022-11-13T07:00:00.654Z",
				"ending": "2022-11-13T15:00:00.654Z",
				"shiftSwapRequested": false,
				"shiftSwapPending": false,
				"shiftSwapAccepted": false,
				"shiftEnded": false,
				"roster": "636cbf113d7e2eb6083dd32c",
				"date": "2022-11-10T09:09:04.018Z",
				"__v": 0
			}
		]
}