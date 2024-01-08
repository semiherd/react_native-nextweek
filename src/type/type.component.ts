import React from "react";
import { AlignOptions } from "./type.app";

export type TextWithIconProps= {
	icon: React.ReactNode
	text: React.ReactNode
	direction: 'row' | 'column',
	align: AlignOptions
}

export type MappedListProps<TArr extends Object[]>={
	data: TArr
	onClick: () => void
	Component: React.ComponentType<ArrayElm<TArr>>
}

export type ArrayElm<TArr extends Object[]>= 
	TArr extends (infer Item)[]
		? Item
		: never
