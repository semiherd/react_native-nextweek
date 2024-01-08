export type LabelProps={
	size:{
		width: number,
		height: number,
	},
	color:{
		default: string,
		focused: string
	},
	font: {
		fontFamily: 'Poppins' | 'Lato',
		weight: "bold" | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | undefined,
		size: number,
		lineHeight: number
	}
}
export type ProfileTabProps={
	overtime: number
	vacation: {
		total: number
		used: number
	}
	workingHour:{
		capacity: number
		completed: number
	}
}