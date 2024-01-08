import { OnNavFn, AuthStackList,HomeStackList,ProfileStackList,AuthStackType, HomeStackType, ProfileSettingStackType } from '../../type/type.nav'
import { Pressable } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/core'
import { ImageCss,ImageSource } from '../app/image/type.image'
import { ColorValues } from '../../asset/constant/Color'
import { UserUpdateParam } from '../../type/type.user'
import { ProfileStackType } from '../../type/type.nav'

type Base= { 
	id: ProfileSettingStackType | AuthStackType | HomeStackType,
	to: ProfileStackType,
	onNavFn: OnNavFn,
	param:  { field: UserUpdateParam }
	styling:ImageCss,
	image: ImageSource,
	useBorder:{ width:number,color:ColorValues,radius:number } 
}

function Navigated<TProps extends Base>(
	Component: React.ComponentType<TProps>,
){
	
	return (props:TProps ) => {
		const { id, param, to, onNavFn }= props
		const navigation = useNavigation<NavigationProp<AuthStackList|HomeStackList|ProfileStackList>>();
		
		const onClick= async () => {
			try{
				if(onNavFn===null){
					id==='Back'
						? navigation.goBack()
						: navigation.navigate(to)
				}
				else {
					const response:boolean= await onNavFn()	
					if(response){
						id==='Back'
							? navigation.goBack()
							: navigation.navigate(to,param)
					}
				}
			}catch(e){
				console.log(e)
			}	
		}

		return (
			<Pressable onPress={() => onClick()}>
				<Component {...props} />
			</Pressable>
		)
	}
}	
export default Navigated