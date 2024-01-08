import React from "react"
import { DeclineIcon } from '../../../home/sections/activitySection/tab/index'
import { CardContent } from '../../../../type/type.profile'
import { RequestUpdateParam } from '../../../../type/type.request'
import { useRequest } from '../../../../service/hook/UseRequest'
import { ApiResponse,ApiResponseVals } from '../../../../type/type.api'

const ResponseComponent= (props: CardContent & {onClick:(id:CardContent['_id'],type:RequestUpdateParam) => void}) => {

	const { updateSwap } = useRequest()

	async function onDecline<I extends CardContent>(item:I):Promise<ApiResponseVals|null>{
		try{
			const response= await updateSwap(item._id,'revoked')
			if(response === ApiResponse.update.success){
				props.onClick(item._id,'revoked')
			} 
			return response
		}catch(e){
			return 'Update Failed'
		}
	}
	
	return <DeclineIcon text="X" onClickFn={() => onDecline(props)}/>
}

export default ResponseComponent