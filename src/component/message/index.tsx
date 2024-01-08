import React from 'react'
import { Dimensions,View,ViewStyle } from 'react-native'
import { Title } from '../app/text/index'
import { Color } from '../../asset/constant/Color'
import {	FontStyling } from '../../type/type.app'
import { fontStyles } from '../../asset/constant/FontStyles'
import { handleMP, handleWH } from '../../styling'
import { User, Manager } from '../../context/user/type.user'
import { useUserState } from '../../context/user/UserContext'
import { useProgressDispatch, useProgressState } from '../../context/progress/ProgressContext'
import { InfoItem } from '../app/button/index'
import Header from '../app/header/Header'
import RecentMessageList from './recent/RecentMessageList'
import Loading from '../app/progress/Indicator'

const { width } = Dimensions.get('window')

const Icon = ({user,onClick}:{user:User|Manager|null,onClick:(item:User['_id']) => void}) => {
	const iconStyling= {
		width: width *0.1,
		height: width *0.1,
		backgroundColor:Color.gray5
	}
	const iconView:ViewStyle= {
		alignSelf: 'flex-end',
		...handleMP(`margin-right-5`),
		...handleMP(`margin-bottom-5`),
	}
	

	return (
			<View style={iconView}>
				
			</View>
	)
}
const ChatTitle= ({fontStyle}:{fontStyle:FontStyling}) => {
	return (
		<View style={[
			{overflow: 'hidden'},
			handleMP('margin-top-6'),
			handleMP('margin-horizontal-4'),
			handleMP('padding-horizontal-2'),
			handleWH(`width-35`),
		]}><Title fontStyling={fontStyle} titletext="Messages" /></View>
	)
}

const RecentMessages= () => {
	const newMessage= ({id}:{id:User['id']}) => console.log('new message clicked')
	const { user,manager } = useUserState()
	const { loading, error } = useProgressState()
	const { updateError, updateLoading } = useProgressDispatch()

	const titleFont= fontStyles.Header.title.font.style
	
	const onIconClick= (userId:User['_id']) => newMessage({id:userId})

	function closeWarning(){
		try{
			updateError({state: false,error:null,description:''})
			updateLoading({state:false,description:''})
		}catch(e){
			updateLoading({state:false,description:'close_infoItem failed'})
		}finally{
			updateLoading({state:false,description:''})
		}
	}
	
	return (
		<>
			<Header 
				title={<ChatTitle fontStyle={titleFont} />}
				text={null}
				icon={<Icon user={user ?user :manager ?manager : null} onClick={onIconClick} />}
			/>
			{loading.state ?<Loading /> :null}
			{!loading.state && error.state
				?	<InfoItem pressOk={closeWarning} text={error.description}  />
				:	null
			}
			<RecentMessageList />
			
		</>
	)
}
export default RecentMessages