import AvatarImage from '../../../../app/image/AvatarImage'
import { Color } from '../../../../../asset/constant/Color'
import { ImageCss,UserAvatar } from '../../../../app/image/type.image'

const AvatarItem= (props:UserAvatar) => {

	const styling:ImageCss= {
		alignSelf: 'center', 
		width: 50,
		height: 50,
		borderColor: Color.white, 
		borderWidth: 1, 
		borderRadius: 50
	}

	return <AvatarImage data={props} styling={styling} />

} 
export default AvatarItem