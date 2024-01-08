import React from "react"
import { fontStyles } from "../../asset/constant/FontStyles"
import { IconText } from '../app/text/index'
import { Pressable } from 'react-native'
import { Title } from '../app/text/index'
import { Row } from '../app/layout/Layout'
import { AlignOptions } from "../../type/type.app"

const TitleRow= (
	{title,width,align,onClickFn,icon,text,withButton}:
	{
		title: string,
		width: number,
		align: AlignOptions
		onClickFn: () => void,
		icon: React.ReactElement,
		text: React.ReactElement
		withButton: boolean
	}
) => {
	return (
		<>
			<Row rowWidth={width} alignOption={align}>
			<>
				<Title titletext={title} fontStyling={fontStyles.Profile.TitleWithButton.title.style} />
				{withButton && <Pressable onPress={onClickFn}>
					<IconText
						icon={icon}
						text={text}
						direction='row'
						align="space-between"
						/>
				</Pressable>
				}
			</>
			</Row>
		</>
	)
}
export default TitleRow