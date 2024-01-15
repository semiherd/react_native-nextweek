import { useEffect, useState } from 'react' 
import { Swap } from '../../../../../type/type.request'
import { UserButton } from '../../../../app/button/index'
import { useRequest } from '../../../../../service/hook/UseRequest'
import { Color } from '../../../../../asset/constant/Color'

const SwapAction= (props:Swap):React.JSX.Element => {
	const { updateSwap } = useRequest()
	const [statusLabel,setLabel]= useState<'Accept'|'Accepted'|'Denied'|'Revoked'>('Accept')
	
	const onAccept= async (r:Swap):Promise<void> => {
		try{			
			await updateSwap(r._id,'accepted')
			setLabel('Accepted')		
		}catch(e){
			console.log(e)
		}
	}

	function handleStatustext():void{
		try{
			if(props.swapAcceptedByManager || props.swapAcceptedByUser)
				setLabel('Accepted')
			else if(props.swapDeniedByManager || props.swapDeniedByUser)
				setLabel('Denied')	
			else if(props.offerRevoked)
				setLabel('Revoked')	
		}catch(e){
			setLabel('Accept')	
		}
	}

	useEffect(() => {
		handleStatustext()
	},[props])

	return (
		<UserButton 
			width={0.2}
			onClickParam= {{value:props}}
			buttontext={statusLabel}
			onClickFn={() => onAccept(props)}
			useBorder={true}
			borderStyles={{
				borderRadius: 10,
				borderColor: Color.blue,
				borderWidth: 0.5
			}}
			fontStyles={{fontSize:12,fontWeight:'500'}}		
		/>	
	)
}
export default SwapAction