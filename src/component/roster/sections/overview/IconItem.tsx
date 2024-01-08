import React from "react"
import { Pressable } from 'react-native'
import ImageItem from '../../../app/image/ImageItem'
import { iconStyles } from "../../style/Icon"
import { IconWithClickFn} from '../../../type/type.roster'
import { ImageCss } from '../../../app/image/type.image'

const IconItem= (props:IconWithClickFn): React.JSX.Element => {

	const w= props.styles.width * 0.5
	const h= props.styles.height * 0.5
	
	return (
		<Pressable onPress={() => props.onClickFn({id:props.id})} style={[iconStyles(props.styles as ImageCss).container]}>
			<ImageItem image={props.source} height={h} width={w} />
		</Pressable>
	)
}

export default IconItem