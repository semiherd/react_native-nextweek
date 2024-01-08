import { AttachItem } from '../../component/message/type/type.message'

export type MessageState={
	attachment: AttachItem[]
}

export type MessageApi= {
	addFile: (items: AttachItem[]) => void
	removeFile: (item: AttachItem) => void
}

type AddFile= {
	type: 'add_file'
	payload: {
		param: {
			items:AttachItem[]
		}
	}
}
type RemoveFile= {
	type: 'remove_file'
	payload: {
		param: {
			item: AttachItem
		}
	}
}

export type MessageReducer= AddFile | RemoveFile 
