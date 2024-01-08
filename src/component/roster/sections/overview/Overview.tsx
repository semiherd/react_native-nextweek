import React,{ useEffect, useState } from "react"
import { fontStyles } from '../../../../asset/constant/FontStyles'
import { ShiftType } from '../../../../type/type.shift'
import { IconItem } from './index'
import { ShiftTime } from './index'
import { useRoster } from '../../../../service/hook/index'
import { Api_ReadRosterShift } from '../../../../type/type.api'
import { RosterShift } from "../../../../type/type.roster"
import CardContainer from "../../../app/layout/CardContainer"

const Overview = () => {

	const [data,setData]= useState<RosterShift[]>()
	const { readRosterShift, deleteShiftInRoster, swapShiftInRoster } = useRoster()
	
	const icons= [
		{

			icon: fontStyles.Roster.MyShiftItem.exchangeIcon,
			onClickFn: swapShiftInRoster,
		},
		{
			icon: fontStyles.Roster.MyShiftItem.cancelIcon,
			onClickFn: deleteShiftInRoster,
		}
	]

	async function handleUpdate(){
		try{

		}catch(e){
			console.log(e)
		}
	}

	async function handleData(){
		try{	
			const shiftList:Api_ReadRosterShift= await readRosterShift()
			setData(shiftList.shifts)
		}catch(e){
			console.log(e)
		}
	}

	useEffect(() => {
		handleData()
	},[])
	
	return (
		<>
			{data?.map((item:ShiftType,index:number) => {
				const itemId= item._id
				
				return (
					<CardContainer 
						key={index.toString()}
						styling={{
							container: fontStyles.Roster.MyShiftItem.subContainer,
							width: fontStyles.Roster.MyShiftItem.container.width,
							align: fontStyles.Roster.MyShiftItem.container.alignOption,
						}}
					>
						<>
							<ShiftTime time={{starting:item?.starting || '',ending:item?.ending || ''}} />								
							{icons.map((iconItem) => 
								<IconItem 
									id={iconItem.icon.id}
									key={iconItem.icon.id} 
									onClickFn= {(item) => iconItem.onClickFn({id: itemId })}
									source={iconItem.icon.source} 
									styles={iconItem.icon.styles} 
								/>
							)}
						</>
					</CardContainer>
				)
			})}
		</>
	)
}

export default Overview
