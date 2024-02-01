import React from "react"
import { View, Dimensions,ViewStyle} from 'react-native'
import { TabItem, TabProps } from './type.tab'
import { Row } from '../../layout/Layout'
import TabButton from './TabButton'
import { Color } from "../../../../asset/constant/Color"

const { width }= Dimensions.get('window')

function Tab<TVal>(props:TabProps<TabItem<TVal>>) {

	const { tabs, onClick }= props
	
	const styling:ViewStyle= {
		padding: '0%',
		width: width * 0.85,
		alignSelf: 'center',
		borderRadius: 10,
		backgroundColor: Color.gray2
	}

	return (
	 	<View style={styling}>
			<Row rowWidth={0.85} alignOption="center">			
				<>
					{tabs.map ((item:TabItem<TVal>,index:number) => 
						<TabButton<TVal> 
							key={index}
							l={tabs.length} 
							item={item} 
							fn={() => onClick(item)} 
							styling={props.styling}
						/>		
					)}
				</>
			</Row>
		</View>
  	)
}

export default Tab
