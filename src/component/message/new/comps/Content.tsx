import React, { forwardRef } from "react"
import { Pressable } from "react-native"
import { handleBorder } from '../../../../styling'
import { Color } from '../../../../asset/constant/Color'
import { InputItem } from '../../../app/input/InputItem'
import { InputHandle } from '../../../app/input/type.input'

type ContentProps={
	h: number
}
const Content= forwardRef<InputHandle,ContentProps>((props,ref) => {
  
	const InputBorderStyle= false
	const InputBgStyle= Color.transparent
  
	return (
		<Pressable style={[
				{ backgroundColor: Color.white,marginVertical:'2%'},
				{...handleBorder(`border-top-transparent-10-20`)},
			]}>           
				<InputItem 
						font={{
							fontFamily: 'Lato',
							fontSize: 18,
							lineHeight: 22,
							fontWeight: '700',
							color: Color.black,
							textAlign: 'left'
						}} 
						multi={true}
						x={true} 
						bgColor={InputBgStyle} 
						b={InputBorderStyle} 
						tb={false} 
						l={140} 
						w={0.65} 
						h={props.h*0.05} 
						ref={ref} 
						type={`default`} 
						placeholder="type..." 
				/>				 
		</Pressable>						  
	)
})
export default Content