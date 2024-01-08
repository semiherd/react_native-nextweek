import React from "react"

import { GetResponseShift } from '../../context/db/type.api.request'

function handleShiftGetResponse({data}:GetResponseShift){
	try{
		/*{
			"_id": "636788844a0542c796205bc7",
			"user": "636649d004b9c34feae00761",
			"manager": "6366495804b9c34feae0074d",
			"location": "6366495904b9c34feae00750",
			"employeeType": 0,
			"starting": "2022-11-08T07:00:00.654Z",
			"ending": "2022-11-08T15:00:00.654Z",
			"shiftSwapRequested": false,
			"shiftSwapPending": false,
			"shiftSwapAccepted": false,
			"shiftEnded": false,
			"date": "2022-11-06T10:12:20.058Z",
			"__v": 0
		 }*/

		 data.map( item => {
			 return {
				id: item._id,
				manager: 
				shift: {
					start: item.starting,
					end: item.ending
				},
				started?: Date
				finished?: Date
				people: SubType<UserType,'id'|'name'|'imageUrl'|'manager'>[]
			 }
		 })

	}catch(e){
		console.log(e)
	}
  
};

export default name;
