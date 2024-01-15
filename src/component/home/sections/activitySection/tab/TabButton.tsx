import { View } from 'react-native'
import { UserButtonType } from '../../../../../type/type.app'
import { UserButton } from '../../../../app/button/index'
import { ActivityTab } from '../../../../../type/type.home'
import { Color } from '../../../../../asset/constant/Color'
import { styles } from '../style/TabButton'

const TabButton= (
	props:{
		item: ActivityTab,
		fnc: UserButtonType<{value:ActivityTab}>['onClickFn']
	}) => {

	const {item,fnc}=props
	const {tab,state}= item


	return (
		<View style={[styles(state).tabButton]}>
			<UserButton 
				buttontext={tab.id}
				onClickFn={fnc}
				onClickParam={{value:item}}
				useBorder={true}
				fontStyles={
					{	
						backgroundColor: state
							?Color.blue
							:Color.white,
						color:state
							?Color.white
							:Color.blue,
						fontSize:14,
						fontWeight:'500'
					}
				}
			/>	
		</View>
	)
}
export default TabButton