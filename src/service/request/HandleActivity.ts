import { Absence, Swap, Blocker } from '../../type/type.request'

const isAbsence = (value: Absence | Swap | Blocker): value is Absence => {
	return (
		"_id" in value &&
		"user" in value &&
		"typeOfAbsence" in value &&
		"date" in value &&
		"__v" in value &&
		"manager" in value &&
  	"location" in value &&
		"starting" in value &&
  	"ending" in value &&
		"absenceRequested" in value &&
		"absenceAccepted" in value &&
		"absenceDenied" in value &&
		"absenceEnded" in value
	)
}

const isBlocker = (value: Absence | Swap | Blocker): value is Blocker => {
	return (
		"_id" in value &&
		"user" in value &&
		"priority" in value &&
		"date" in value &&
		"__v" in value &&
		"manager" in value &&
  	"location" in value &&
		"starting" in value &&
  	"ending" in value
	)
}

const isSwap= (value: Absence | Swap | Blocker): value is Swap => {
	return (
		"__v" in value &&
		"_id" in value &&
		"date" in value &&
  	"location" in value &&
		"manager" in value &&
		"offerRevoked" in value &&
		"shiftOffered" in value &&
		"shiftRequested" in value &&
		"swapAcceptedByManager" in value &&
		"swapAcceptedByUser" in value &&
		"swapDeniedByManager" in value &&
		"swapDeniedByUser" in value &&
		"userRequesting" in value &&
		"userOffering" in value
	)
}

export {
	isAbsence,isSwap,isBlocker
}