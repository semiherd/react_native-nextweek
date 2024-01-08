import React, {useState,useEffect} from "react"
import {Dimensions} from 'react-native'
import { DimensionObject,WithDimProps } from '../../type/type.hook'

const WithResizeHandler = <TProps extends WithDimProps>(
	Component:React.ComponentType<TProps>,
) => {
	const [dimensions,setDimensions]=useState<DimensionObject>({
		window: Dimensions.get('window'),
		screen: Dimensions.get('screen')
	})

	useEffect(() => {
		const listener = Dimensions.addEventListener(
		  	'change',
		  	({window, screen}) => {
			setDimensions({window, screen})		 
		  },
		);
		return () => listener?.remove();
	});

  	return (props:TProps) => (
		<Component {...props} dimension={dimensions} />
  	)
};

export {WithResizeHandler}
