import React, {useState, useRef, forwardRef, useImperativeHandle } from 'react'
import { InputHandle, InputProps } from './type.input'
import { Dimensions, Pressable, View, TextInput } from 'react-native'
import { styles } from './style/InputItem'
import { Color } from '../../../asset/constant/Color'
import { TextInCircle } from '../text/index'
import { Row } from '../../app/layout/Layout'

const { width }= Dimensions.get('window')

const InputItem= forwardRef<InputHandle,InputProps>(
	({x,font,type,placeholder,onSubmit,multi,w,h,tb,b,l,bgColor},ref) => {
		
		const [value,setValue]= useState<string>('')
		const textInputRef= useRef<TextInput>(null)
		
		useImperativeHandle(ref, () => ({
				resetValue: () => setValue(''),
				getValue: () => value,
				onFocus: () => textInputRef.current?.focus()
 		}))

		const onChange= (text:string) => setValue(text)
		//const debouncedCb:(text:string)=>void = useDebounce(onChange, 500)

		return (
			<View style={styles(w,h,b,tb,bgColor,multi,value.length).container}>
				<Row rowWidth={w} alignOption="center">
				<>
					<TextInput
						ref={textInputRef}
						multiline={multi}
						maxLength={l ?l:140}
						style={[styles(w,h,b,tb,bgColor,multi,value.length).text,font]}
						placeholder={placeholder}
						value={value}
						onChangeText={onChange}
						keyboardType={type}
						autoCapitalize="none"
						onSubmitEditing={onSubmit}
						returnKeyType={onSubmit ?'next' :'done'}
					/>
					{x && value 
						?	<Pressable onPress={() =>setValue('')} style={{ transform:[{ translateX: width*-0.03 }],alignSelf: 'center' }} >
								<TextInCircle fontWeight={"500"} fontSize={12} size={20} text={`X`} borderWidth={0} borderColor={Color.transparent} color={Color.gray1} backgroundColor={Color.blue} />
							</Pressable>
						: null
					}
				</>
				</Row>
			</View>
		)
})
export { InputItem }
