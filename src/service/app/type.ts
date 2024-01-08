export type ImagePickerProps= {
	errorFn: () => void
	multiple: boolean
	minFiles: number
	maxFiles: number
	filetype: 'photo' | 'video'
}
export type DocumentPickerProps= {

}