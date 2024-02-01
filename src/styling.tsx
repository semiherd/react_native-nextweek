import {Dimensions,StyleSheet} from 'react-native'
import { ColorValues } from './asset/constant/Color'
import { capitalizeFirstCh } from './service/app/index'
import { SubType } from './type/type.app'

const { width,height}= Dimensions.get('window')
export type AlignOptions= 'center' | 'space-around' | 'space-between' | 'flex-end' | 'flex-start'
export type AlignSelfOptions= 'center' | 'flex-end' | 'flex-start'
export type mpType= 'margin' | 'padding'
export type direction= 'all' | 'top' | 'bottom' | 'left' | 'right' | 'horizontal' | 'vertical'
export type size= 'width' | 'height'

export const stylesAlign= (
	param: `alignSelf_${AlignSelfOptions}` | `justifyContent_${AlignOptions}`
) => StyleSheet.create({
	container:{
		[`${param.split('_')[0]}`]: param.split('_')[1],
	}
})


export const handleBorder= (
	param: `border-${direction}-${ColorValues}-${number}-${number}`
) => {
	
	const paramList:string[]= param.split('-')
	
	const styling= (param:string[]) => StyleSheet.create({
		container: {
				borderColor: param[2],
				borderWidth: parseInt(param[3]),
				borderRadius: parseInt(param[4]),
			}
			
	})
	return styling(paramList).container
}

export const handleMP= (
	param: `${mpType}-${direction}-${number}`
) => {
	const paramList= param.split('-')
	
	const styling=(key:mpType,dir:direction,val:number)=>StyleSheet.create({
		container:{
			[dir==='all'
				? key
				: `${key}${capitalizeFirstCh(dir)}`
			]: val+'%',
		}
	})
	return styling(
		paramList[0] as mpType,
		paramList[1] as direction,
		parseInt(paramList[2]) as number
	).container
}

export const handleWH= (
	param: `${size}-${number}`
) => {
	const paramList= param.split('-')
	const type= paramList[0] as size
	const ratio= parseInt(paramList[1]) as number 
	
	const styling=({t,r}:{t:size,r:number})=>StyleSheet.create({
		container:
			t==='width' 
				? { width: width * r / 100 }
				: t==='height'
					? { height: height * r / 100 } 
					: { width,height }
	})

	return styling({
			t: type,
			r: ratio
		}).container
}
