import { Absence, Swap, Blocker } from './type.request'
import { ContainerStyles } from '../type/type.app'

export type ActivityTabId= 'swap' | 'vacation' | 'event'

export type ActivityTypeUnion= Absence | Swap | Blocker

export type ActivityLayoutProps={
	declineIcon: (onClickFn:() => void,styles:ContainerStyles) => React.JSX.Element
	action: React.JSX.Element | null
	content: React.JSX.Element | null
	userAvatar: React.JSX.Element | null
}

export type ActivityTab={
	tab: {
		id: ActivityTabId
	}
	state: boolean

}





