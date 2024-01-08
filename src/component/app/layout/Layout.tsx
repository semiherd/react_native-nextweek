import {View} from 'react-native'
import { stylesRow,stylesCol } from './style/Layout'
import React from 'react'
import {AlignOptions} from '../../../type/type.app'

export const Col = ({ colNr, alignOption, children }:{colNr:number,alignOption:AlignOptions,children:React.ReactElement}) => {
	return  (
	  <View style={stylesCol(colNr,alignOption).container}>{children}</View>
	)
}

export const Row = ({ rowWidth,alignOption,children }:{rowWidth:number,alignOption:AlignOptions,children:React.ReactElement}) => (
	<View style={stylesRow(rowWidth,alignOption).container}>{children}</View>
 )