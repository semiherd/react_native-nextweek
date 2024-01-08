import React from "react"
import { MessageItem } from "../../../type/type.message";
import { FontStyling } from '../../../type/type.app'
import { fontStyles } from "../../../asset/constant/FontStyles";
import MessageLayout from './MessageLayout'
import TextItem from './TextItem'
import MessageAction from './MessageAction'
import MessageHeader from './MessageHeader'

const MessageContent= ( props: MessageItem) => {	
	const fontStyle:FontStyling= fontStyles.Message.message.item.text.font.style
	return <TextItem {...props} w={0.75} font={fontStyle} />		
}

const Message = (props:MessageItem & {w:number}) => {

	return <MessageLayout 
					header={<MessageHeader w={props.w} time={new Date(props.item.date)} by={props.from} />}
					content={<MessageContent {...props} />}
					action={<MessageAction w={props.w} id={props.item._id} />}
				/>
}

export default Message
