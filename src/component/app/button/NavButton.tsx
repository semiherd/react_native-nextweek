import React from 'react'
import NavigationButton from './NavigationButton'
import { WithNavFn } from '../../nav/WithNavFn'
import { OnNavFn, NavButtonProps } from '../../../type/type.nav'

const NavComponent= WithNavFn(NavigationButton)

const NavButton= (
	props:
	{id:string, styling: NavButtonProps, onNavFn: OnNavFn}
) => {
	return <NavComponent {...props} />
}

export default NavButton
