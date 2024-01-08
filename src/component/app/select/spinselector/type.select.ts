import React, { SetStateAction,Dispatch } from "react"

export type Option={id:number,value:string}
export type SelectorProps={
	id: string
	selected: {id:number,value:string}
	handleChange:(item:Option) => void
	options: Option[]
}
export type RenderItem= { 
	index: number
	item: Option
	color: string
	showText: boolean
	activeIndex: number 
}

export type ListProps={
	data: Option[]
	renderItem: React.ReactElement
	itemSize:{width:number,height:number}
	color: string
	onScroll: () => void
	onItemIndexChange: Dispatch<SetStateAction<number>>
	style: React.CSSProperties
}