import React from 'react'
import NavigationIcon from './NavigationIcon'
import { WithNavFn } from '../../nav/WithNavFn'
import { OnNavFn, NavButtonProps } from '../../../type/type.nav'
import { ImageSource } from '../image/type.image'

const NavImageComponent= WithNavFn(NavigationIcon)

const NavIcon= (
	props:
	{id:string, image: ImageSource,  onNavFn: OnNavFn, Icon: React.ReactElement}
) => {
	return null
}

export default NavIcon