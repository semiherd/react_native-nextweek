import React from "react"
import TitleRow from '../TitleRow'
import TextInCircle from "../../app/text/TextInCircle"
import { fontStyles } from "../../../asset/constant/FontStyles"
import { Text,View } from 'react-native'
import { capitalizeFirstCh } from "../../../service/app/index"
import { handleMP } from "../../../styling"
import { Color } from "../../../asset/constant/Color"

const SectionTitle = (
	{onClickFn,button,params}:
	{onClickFn:() => void,button:{state:boolean,text:string|null},params:{title:string}}
) => {
	
	const stylingTWB= fontStyles.Profile.TitleWithButton
	const capTitle= capitalizeFirstCh(params?.title)
	const capButton= capitalizeFirstCh(button.text || '')

	const TextItem= () => <Text style={[{alignSelf:'center'},stylingTWB.button.style]}>{capButton}</Text>
	const AddIcon= () => <TextInCircle fontWeight={"800"} fontSize={15} color={Color.blue} size={24} text={'+'} />
	
	return (
		<>
			<View style={[
					handleMP(`padding-bottom-5`),
					{alignSelf:'center'}
				]}
			>
				<TitleRow 
					icon={<AddIcon />}
					text={<TextItem />}
					align="space-between" 
					width={0.8} 
					title={capTitle!} 
					onClickFn={onClickFn}
					withButton={button.state}
				/>
			</View>	
		</>
	)
}

export default SectionTitle
