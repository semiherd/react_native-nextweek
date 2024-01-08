import {useEffect, useState} from 'react'
import { RequestUpdateParam } from '../../../../type/type.request'
import { CardContent, ProfileSection } from '../../../../type/type.profile'
import { UserButton } from '../../../app/button/index'
import { fontStyles } from '../../../../asset/constant/FontStyles'
import { useRequest } from '../../../../service/hook/UseRequest'
import { ApiResponse,ApiResponseVals } from '../../../../type/type.api'
import { capitalizeFirstCh } from '../../../../service/app/CapitalizeFirstCh'
import { Label,handleStateLabel } from '../../../../service/request/HandleRequest'
import { Absence,Blocker,Swap } from '../../../../type/type.request'

const ActionButton= (props: CardContent & { type: ProfileSection }) => {
	const [label,setLabel]= useState<Label>('')
	
	const { updateSwap, updateAbsenceChanged } = useRequest()
	
	async function updateLabel():Promise<void>{
		try{
			const response= handleStateLabel(props)
			setLabel(response)
		}catch(e){
			setLabel('')
		}
	}
	
	function omit<T extends Absence|Blocker|Swap>(obj:T,key:keyof T ) {
		try{
			const { [key]: omitted, ...rest } = obj;
			return rest;
		}catch(e){
			console.log(e)
		}
	}
	async function onClick(props:CardContent & {type:ProfileSection}):Promise<ApiResponseVals|null>{
		try{
			if (props.type === "swap-in"){
				const state:RequestUpdateParam= label==='Accepted' ?'revoked' :'accepted'
				const response:ApiResponseVals|null= await updateSwap(props._id,state)
				if(response === ApiResponse.update.success){
					const labelText= capitalizeFirstCh(state) as Label
					setLabel(labelText)
				}
				return response
			}
			if( label !== 'Accepted'){
				if(props.type === "swap-out"){
					//	DO NOTHING , READ ONLY
				}else if (props.type === "blocker"){
					//	NO API EXISTS FOR BLOCKER UPDATE
				}else if (props.type === "absence"){
					const param= {
						absence: omit<Absence>(props,'type')
					}
					const response= await updateAbsenceChanged(props._id,param)
					if(response === ApiResponse.update.success){
						setLabel('Accepted')
					}
					return response
				}
			}
			return ApiResponse.update.fail
		}catch(e){
			return ApiResponse.update.fail
		}
	}

	const colorStyle= props.type==='swap-in' || props.type==='swap-out'
		?	label==='Accepted'
					? fontStyles.Profile.Button.font.style.color
					: fontStyles.Profile.Button.backgroundColor
		: fontStyles.Profile.Button.backgroundColor

	const bgColorStyle= props.type==='swap-in' || props.type==='swap-out'
		?	label==='Accepted'
					? fontStyles.Profile.Button.backgroundColor
					: fontStyles.Profile.Button.font.style.color
		: fontStyles.Profile.Button.font.style.color

	useEffect(() => {
		updateLabel()
	},[props])

	return (
		<UserButton 
			onClickParam= {{props}}
			buttontext={label}
			onClickFn={() => onClick(props)}
			useBorder={true}
			borderStyles={{
				borderRadius: 13,
			}}
			width={0.25}
			fontStyles={{
				color: colorStyle,
				backgroundColor: bgColorStyle,
				fontSize:12,
				fontWeight:'500'
			}}		
		/>
	)
}
export default ActionButton