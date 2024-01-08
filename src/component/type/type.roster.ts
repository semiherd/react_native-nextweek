import React from "react";

export type Item={
	id: 'overview' | 'activity' | 'shift'
	title: string
}

export type BaseProps={
	id: string
	children: React.ReactElement
}

export type TabProps={
	id: string
}

export type IconProps={
	id: string
	source: React.HtmlHTMLAttributes<HTMLImageElement>,
	styles: {
		backgroundColor: string,
		height: number,
		width: number,
		iconWidth?: number,
		iconHeight?: number
	},
}

export interface IconClickParam{
	id: string
}

export interface IconWithClickFn extends IconProps{
	onClickFn: (param:IconClickParam) => void
}