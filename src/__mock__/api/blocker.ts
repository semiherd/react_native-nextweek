import { Api_ReadBlocker,Api_CreateBlocker,Api_DeleteBlocker } from '../../type/type.api'

export  const mock_readBLocker:Api_ReadBlocker={
		"preferredShifts": [
			{
				"_id": "blocker1",
				"user": "user1",
				"manager": "man1",
				"location": "loc1",
				"starting": "2023-12-19T07:00:00.654Z",
				"ending": "2023-12-19T15:00:00.654Z",
				"priority": 1,
				"date": "2022-11-11T08:41:19.098Z",
				"__v": 0
			}
		]
}

export  const mock_createBlocker:Api_CreateBlocker={
	"roster": "64231f7e5c23cc34ac68fe5c"
}

export  const mock_deleteBLocker:Api_DeleteBlocker={
		"deletedPreferredShift": {
			"_id": "636e0aaf9c019d0739e41741",
			"user": "636649dd04b9c34feae00766",
			"manager": "6366495804b9c34feae0074d",
			"location": "6366495904b9c34feae00750",
			"starting": "2022-11-19T07:00:00.654Z",
			"ending": "2022-11-19T15:00:00.654Z",
			"priority": 2,
			"date": "2022-11-11T08:41:19.098Z",
			"__v": 0
		}
}