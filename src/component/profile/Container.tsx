import React from "react"
import { SectionBase } from '../../type/type.profile'
import { View } from 'react-native'
import SectionContainer from './sections/index'
import SectionTitleWithCtx from './sections/SectionTitleWithCtx'

export const Container = <TValue extends SectionBase>(props: TValue) => {
  
	const titleProps={
		type: props.id,
		button: props.button,
		title: props.title
	}

  return (
			<View style={{marginTop: '10%'}}>
				<SectionTitleWithCtx {...titleProps} />
				<SectionContainer<typeof props.id> limit={props.limit} type={props.id} />
			</View>
  )
}
export default Container
