import React from "react"
import { UserButton } from '../../../app/button/index'
import { UpdateDataType } from '../../../type/type.update'

const UpdateAction = (
	props:UpdateDataType
) => {
	
	async function viewMessage (data:UpdateDataType):Promise<UpdateDataType|null>{
		try{
			console.log('view Message clicked',data)
			return data
		}catch(e){
			console.log(e)
			return null
		}
	} 

	return <UserButton 
			onClickParam= {{value:props.id}}
			buttontext="View"
			onClickFn={() => viewMessage(props)}
			useBorder={true}
			fontStyles={{fontSize:13,fontWeight:'500'}}
		/>
}

export default UpdateAction;
