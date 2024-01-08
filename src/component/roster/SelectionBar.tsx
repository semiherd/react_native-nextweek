import React from 'react'
import {View,Text} from 'react-native'
import styles from './style/SelectionBarStyles'

type PropsType={
	itemSize:number,
	activeIndex:number,
	index:number
}
const SelectionBar= (props:PropsType) => {
   const {itemSize,activeIndex,index}=props
   
   return <View style={styles({activeIndex,index,itemSize}).container}></View>

}
export default SelectionBar;