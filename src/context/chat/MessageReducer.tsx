import { MessageState, MessageReducer } from './type.message'
import { AttachItem } from '../../component/message/type/type.message'

export const messageReducer = (prevState: MessageState, action: MessageReducer):MessageState => {
	switch (action.type) {
		case 'add_file':
			console.log('add_file',action)
			const attached:AttachItem[]= [...prevState.attachment,...action.payload.param.items]
			return {
				...prevState,
				attachment: attached
			}
		case 'remove_file':
			const removed:AttachItem[]= prevState.attachment.filter(i => i.id!=action.payload.param.item.id)
			return {
				...prevState,
				attachment: removed
			}
		default:
			return prevState;
	}
}