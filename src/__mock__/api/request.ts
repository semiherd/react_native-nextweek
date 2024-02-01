import { ApiResponse, Api_ReadSwapRequest,Api_UpdateSwapOffer,Api_CreateSwapRequest } from '../../type/type.api'


export const mock_updateSwapOfferUpdate:Api_UpdateSwapOffer= ApiResponse.swapUpdate.success

export const mock_createSwapRequest:Api_CreateSwapRequest={
  "shiftSwap": "636b61eecb661ea357ffae83"
}

export const mock_readSwaptofrom:Api_ReadSwapRequest={
	"shiftSwapsOfferedToYou": [
		{
			"_id": "swapId1",
      "userRequesting": "user2",
      "userOffering": "user3",
      "manager": "man1",
      "location": "6366495904b9c34feae00750",
      "shiftRequested": "shiftId1",
      "shiftOffered": "shiftId4",
      "swapAcceptedByUser": false,
      "swapDeniedByUser": false,
      "swapAcceptedByManager": false,
      "swapDeniedByManager": false,
      "offerRevoked": false,
      "date": "2022-11-09T09:43:45.838Z",
      "__v": 0
		}
	],
	"shiftSwapsOfferedByYou": [
		{
			"_id": "swapId2",
      "userRequesting": "user3",
      "userOffering": "user2",
      "manager": "man1",
      "location": "6366495904b9c34feae00750",
      "shiftRequested": "shiftId2",
      "shiftOffered": "shiftId3",
      "swapAcceptedByUser": false,
      "swapDeniedByUser": false,
      "swapAcceptedByManager": false,
      "swapDeniedByManager": false,
      "offerRevoked": false,
      "date": "2022-11-09T09:43:45.838Z",
      "__v": 0
		}
	]
}