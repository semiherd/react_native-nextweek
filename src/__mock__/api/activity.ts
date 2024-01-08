import { 
	ApiResponse,
	Api_UpdateAbsenceChanged,
	Api_UpdateAbsence_Param,
	Api_ReadAbsence,
	Api_DeleteAbsence ,
	Api_CreateAbsence
} from '../../type/type.api'

export  const mock_readAbsence_Activity:Api_ReadAbsence={
	"absences": [
		{
			"_id": "absence1",
			"user": "user2",
			"manager": "6366495804b9c34feae0074d",
			"location": "6366495904b9c34feae00750",
			"starting": "2022-11-19T07:00:00.654Z",
			"ending": "2022-11-19T15:00:00.654Z",
			"typeOfAbsence": 1,
			"absenceRequested": true,
			"absenceAccepted": false,
			"absenceDenied": false,
			"absenceEnded": false,
			"date": "2022-11-11T10:24:38.182Z",
			"__v": 0
		},
		{
			"_id": "absence2",
			"user": "user3",
			"manager": "6366495804b9c34feae0074d",
			"location": "6366495904b9c34feae00750",
			"starting": "2022-11-19T07:00:00.654Z",
			"ending": "2022-11-19T15:00:00.654Z",
			"typeOfAbsence": 1,
			"absenceRequested": true,
			"absenceAccepted": false,
			"absenceDenied": false,
			"absenceEnded": false,
			"date": "2022-11-11T10:25:41.305Z",
			"__v": 0
		}
	]
}

export  const mock_createAbsence_Activity:Api_CreateAbsence={
	"absence": "64231f7e5c23cc34ac68fe5c"
}

export  const mock_deleteAbsence_Activity:Api_DeleteAbsence={
	"deletedAbsence": {
		"_id": "636e24135ff90be2f8f5f064",
		"__v": 0,
		"date": "2022-11-11T10:29:39.261Z",
		"absenceEnded": false,
		"absenceDenied": false,
		"absenceAccepted": false,
		"absenceRequested": true,
		"typeOfAbsence": 1,
		"ending": "2022-11-19T15:00:00.654Z",
		"starting": "2022-11-19T08:00:00.654Z",
		"location": "6366495904b9c34feae00750",
		"manager": "6366495804b9c34feae0074d",
		"user": "636649dd04b9c34feae00766"
	}
}