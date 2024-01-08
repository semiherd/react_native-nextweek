import React,{useState,useEffect} from 'react'
import { Color } from '../../../../asset/constant/Color'
import SubContainer from '../../../app/layout/SubContainer'
import UpdateItemLayout from './UpdateItemLayout'
import {UpdateDataType} from '../../../type/type.update'
import UpdateContent from './UpdateContent'
import UpdateAction from './UpdateAction'

const UpdateItemList = () => {
	
	const [data,setData]= useState<UpdateDataType[]|[]>([])

	const handleData= async ():Promise<void> => {
		try{
			const response:(UpdateDataType[]|[])= []		
			setData(response)
		}catch(e){
			console.log(e)
		}
	}
	
	useEffect(() => {
		handleData()
	},[])


	const containerStyles= {
		containerHeight:0.415,
		containerWidth:0.85,
		borderRadius:13,
		bgColor:Color.white, 
		paddingV:0.02,
		paddingH:0.02,
	}

   return (	
			<SubContainer styles={containerStyles}>
				{data?.length 
					?	data.map((item:UpdateDataType) => <UpdateItemLayout key={item.id} 
						action= {<UpdateAction {...item} />}
						content= {<UpdateContent {...item} />}
					/>)
					:null
				}
			</SubContainer>
   )
}

export default UpdateItemList;
