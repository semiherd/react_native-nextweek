import { NarrowIncluding, Remove } from './type.app'
import { Absence, Swap, Blocker } from './type.request'
import { ImageSource } from '../component/app/image/type.image'
import { ProfileStackType,ProfileSettingStackType } from '../type/type.nav'
import { UserUpdateParam } from './type.user'
import { User } from '../context/user/type.user'

const profileSections= ['swap-in','swap-out','blocker','absence'] as const 
type Sections= typeof profileSections
export type ProfileSection= Sections[number]

export type SectionBase= {
	id: ProfileSection
	title: string
	button: {
		state:boolean,text:string|null
	}
	limit: number
}

export type SwapItem= Swap & { __type: 'Swap'}
export type BlockerItem= Blocker & { __type: 'Blocker',}
export type AbsenceItem= Absence & { __type: 'Absence'}

export type SectionContent= SwapItem | BlockerItem | AbsenceItem
export type SectionType<U	extends SectionContent>= U extends any ? U['__type'] : never

export type CardContent= Swap|Blocker|Absence

export type CardLayoutBaseProps={
	content: React.JSX.Element
	cardWidth: number
	useMargin: number
	useBottomSeperator: number
	borderColor: string
	action: React.JSX.Element
}

export type CardLayoutWithAvatar= CardLayoutBaseProps & {
	avatar: React.JSX.Element
	xIcon: React.JSX.Element
}

export type CardLayoutWithoutAvatar= CardLayoutBaseProps & {
	avatar: null
	xIcon: null
}

export type SectionWithAvatar= NarrowIncluding<ProfileSection,'swap-in'|'blocker'>

export type Item<T extends UserUpdateParam>={
	header: T
	value: User[T]
}

export type SettingSectionType={
	_id: ProfileSettingStackType
	icon: ImageSource
	to: ProfileStackType
	title: string
	item: Item<UserUpdateParam>[]
}