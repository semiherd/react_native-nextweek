import React from "react"
import {Row} from '../app/layout/Layout'
import { fontStyles } from "../../asset/constant/FontStyles"
import LoaderIcon from '../../asset/image/roster/loader-icon.png'
import {Pressable,Dimensions,Text} from 'react-native'
import {IconText} from '../app/text/index'
import { loadMoreIcon } from '../app/icon/LoadMoreIcon'

const {width,height}= Dimensions.get('window')

const LoadMoreButton = ({onClickFn}:{onClickFn: () => void}) => {
	
	return (
		<Row rowWidth={0.8} alignOption="center" >
			<>
				<Pressable style={{ paddingBottom: '1%',paddingTop: '5%',transform: [{translateX: width * 0.02}] }} onPress={() => onClickFn()}>
					<IconText
						direction= "row"
						icon={loadMoreIcon(LoaderIcon)}
						text={<Text style={fontStyles.Roster.Activity.text.loadMore.style}>Load More</Text>}
						align="center"
					/>
				</Pressable>
			</>
		</Row>
	)
}
export default LoadMoreButton;
