import { Absence, Swap, Blocker } from './type.request'

export type ActivityTabId= 'swap' | 'vacation' | 'event'

export type ActivityTypeUnion= Absence | Swap | Blocker

export type ActivityLayoutProps={
	w: number
	declineIcon: React.ReactNode
	content: React.JSX.Element
	action: React.JSX.Element
	userAvatar: React.ReactElement | null
}

export type ActivityTab={
	tab: {
		id: ActivityTabId
	}
	state: boolean
}





