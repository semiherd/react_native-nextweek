import { ScrollView,View } from 'react-native'
import RosterHome from '../../component/roster/index'
import RosterHeader from '../../component/roster/RosterHeader'


const RosterTab = () => {
  	return (
		<View>
			<RosterHeader />	
			<ScrollView contentContainerStyle={{paddingBottom: 0}}>
				<RosterHome />
			</ScrollView>
		</View>
  	)
};

export default RosterTab