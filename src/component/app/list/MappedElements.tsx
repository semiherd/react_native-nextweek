import React from "react"
import {View} from 'react-native'
import { MappedListProps,ArrayElm } from '../../../type/type.component'
import {styles} from './style/MapElms'

const MappedElements = <TProps extends MappedListProps<Object[]>>() => {	
	return (props:TProps) => {
		const {Component,data,onClick}=props
		type itemType= ArrayElm<typeof data>		
		const onItemClick = (item: itemType ) => onClick(item);
		return (
			<View style={styles.container}>
				{data?.map((item:itemType) => {
					return <Component data={item} onClick={onItemClick(item)}  />
				})}
			</View>
		)
	}
}

export default MappedElements;
