import { useNavigation } from '@react-navigation/core'
import { OnNavFn, NavButtonProps, AuthStackParamList, ProfileStackList } from '../../type/type.nav'
import { Pressable } from 'react-native'
import { NavigationProp } from '@react-navigation/native'

function WithNavFn<TProps extends { id:string, onNavFn: OnNavFn }> (
	Component: React.ComponentType<TProps>,
){
	return (props:TProps ) => {
		const { id }= props
		const navigation = useNavigation<NavigationProp<AuthStackParamList|ProfileStackList>>();
		
		const onClick= async () => {
			try{
				if(props.onNavFn===null)
					navigation.navigate(id,null)
				else {
					const response:boolean= await props.onNavFn()
					
					if(response) navigation.navigate(id,null)
				}
			}catch(e){
				console.log(e)
			}	
		}

		return <Pressable onPress={() => onClick()}>
				<Component  {...props} />
			</Pressable>

	}
}	
export { WithNavFn }