import React,{ useState,useEffect } from 'react'
import {Dimensions, FlatList, View, ListRenderItemInfo } from 'react-native'
import { MessageItem } from '../../../type/type.message'
import { NoContent } from '../../app/error'
import { handleMP } from '../../../styling'
import { useMessage } from '../../../service/hook/index'
import { useUserState } from '../../../context/user/UserContext'
import { styles } from '../style/RecentMessages'
import  Recentroom from './Recentroom'
import Indicator from '../../app/progress/Indicator'

const { width, height } = Dimensions.get('window')

const renderItem= ({item}:ListRenderItemInfo<MessageItem>) => <View style={{...handleMP(`margin-vertical-3`)}}><Recentroom {...item} /></View>
const keyExtractor = (m:MessageItem) => m.item._id

const RecentMessageList= () => {
	const { user, manager } = useUserState()
	const { listInboxItems }= useMessage() 	
	const[data,setData]= useState<MessageItem[]>([]);
	const[progress,setProgress]= useState(false);

	async function handleData(){
		try{
			setProgress(true)
			const response:MessageItem[]= await listInboxItems()
			setData(response)
		}catch(e){
			setProgress(true)
		}finally{
			setProgress(false)
		}
	}

	useEffect(() => {
		handleData()
	},[])

	return (
		<>
			<View style={{transform:[{translateY: height*0.4}]}}>
				{progress && <Indicator />}
			</View>
			<View style={styles.listContainer}>
				{data.length
					?	<FlatList
							data={data}
							renderItem={renderItem}
							keyExtractor={keyExtractor}
							snapToAlignment="start"
							decelerationRate={"fast"}
							snapToInterval={height}
							scrollEventThrottle={16} 
							bounces={false}   
							contentContainerStyle={{
									paddingBottom: '20%',
							}} 
						/>
					:	<NoContent text="No recent messages" />
				}
			</View>
		</>
	)
}
export default RecentMessageList