import { View } from 'react-native'
import { ImageCss, ImageSource } from '../../app/image/type.image'
import ImageItem from '../../app/image/ImageItem'

const CircularIcon= ({imageSrc,styling,borderStyling}:{imageSrc:ImageSource,styling:ImageCss,borderStyling:ImageCss,}) => {
	return (
		<View style={[
			{borderRadius: 30, justifyContent: 'center'},
			borderStyling
		]}>
			<ImageItem 
				height={styling.height} 
				width={styling.width} 
				image={imageSrc} 
			/>
		</View>
	)

}
export default CircularIcon