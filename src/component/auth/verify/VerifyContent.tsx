import React,{ useLayoutEffect,useEffect, useRef } from "react"
import { InputItem } from '../../app/input/InputItem'
import { Color } from "../../../asset/constant/Color"
import { Row } from '../../app/layout/Layout'
import { InputHandle } from '../../app/input/type.input'
import BottomContainer from './Bottom'

const VerifyContent= () => {
	const codeRef= Array.from(Array(4).keys()).map(() => useRef<InputHandle>(null))	
	const lastValRef= useRef<number>(0)

	async function handleInput():Promise<number[]|null>{
		try{
			if(codeRef){
				const response:number[]= await Promise.all(codeRef.map((item,_) => parseInt(item.current!.getValue())))		
				if(!response || response.includes(NaN)) return null
				return response
			}else 
				return []
		}catch(e){
			return []
		}
	}

	async function handleFocus(){
		try{		
			codeRef.map((item,index) => {
				if(lastValRef.current===index && item.current!.getValue()) lastValRef.current+=1
				if(index===lastValRef.current && !item.current!.getValue()) item.current!.onFocus();
			})				
		}catch(e){
			console.log(e)
		}
	}

	useLayoutEffect(() => {
		handleFocus()
	},[lastValRef])

	return (
		<>
			<Row rowWidth={1} alignOption="center">
				<>
					{Array.from(Array(4).keys()).map((_,index) => {
						return (
							<InputItem key={index.toString()} 
								ref={codeRef[index]}
								multi={false}
								font={{
									fontSize: 20,
									fontWeight: '800',
									color: Color.blue41,
								}}
								bgColor={Color.white}
								x={false} //innertext delete button
								l={1} 	//max-char-length
								b={true} //border-all
								tb={false} // border-bottom
								w={0.15}  //width
								h={0.1}  //height
								placeholder="" 
								type="number-pad"
							/>
						)
					})}
				</>
			</Row>	
			<BottomContainer handleInput={handleInput} />
		</>
	)
}

export default VerifyContent;
