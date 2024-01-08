import {ColorValues} from '../../../../asset/constant/Color'

export interface TabProps<TVal>{
	tabs: TVal[]
	onClick:(item:TVal) => void
	styling: ButtonStyling
}

export type TabItem<IdList>={
	id: IdList
	text: string
	state: boolean
}

export type ButtonStyling={
	backgroundColor: {
		selected: ColorValues
		default: ColorValues
	}
	color:{
		selected: ColorValues
		default: ColorValues
	}
}
