import { AbsenceState,SwapState } from '../../type/type.request'
import { ProfileSection,CardContent } from '../../type/type.profile'

export type Label= ''|'Accept'|'Accepted'|'Denied'|'Revoked'|'Ended'|'Pending'

function handleSwapOutState(data:SwapState):(Label|''){
	if(data.swapDeniedByUser || data.swapDeniedByManager){
		return 'Denied'
	}else if(data.swapAcceptedByUser || data.swapAcceptedByManager){
		return 'Accepted'
	}else if(data.offerRevoked){
		return 'Revoked'
	}else return 'Pending'
}

function handleSwapState(data:SwapState):(Label|''){
	if(data.swapDeniedByUser || data.swapDeniedByManager){
		return 'Denied'
	}else if(data.swapAcceptedByUser || data.swapAcceptedByManager){
		return 'Accepted'
	}else if(data.offerRevoked){
		return 'Revoked'
	}else return 'Accept'
}

function handleAbsenceState(data:AbsenceState):(Label|''){
	if(data.absenceEnded){
		return 'Ended'
	}else if(data.absenceDenied){
		return 'Denied'
	}else if(data.absenceAccepted){
		return 'Accepted'
	}else if(data.absenceRequested){
		return 'Accept'
	}else return ''
}

function handleBlockerState():(Label|''){
	return 'Accept'
}

function handleStateLabel(param: CardContent & { type: ProfileSection }):Label{
	try{
		if(param.type==='swap-out'){
			return handleSwapOutState(param)				
		}else if(param.type==="swap-in"){
			return	handleSwapState(param)			
		}else if(param.type==="absence"){
			return	handleAbsenceState(param)											
		}else if(param.type==="blocker"){
			return handleBlockerState()		
		}else
			return ''
	}catch(e){
		return ''
	}	
}

export {
	handleStateLabel,
	handleBlockerState,
	handleAbsenceState,
	handleSwapState,
	handleSwapOutState,
}