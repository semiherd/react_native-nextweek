import { User,Manager } from '../context/user/type.user'
import { Version } from './type.shift'
import { MessageState, Room } from '../component/message/type/type.message'

export type MessageType= 'Text' | 'Media' | 'Sound'

export type MessageStyling={}

export type BaseQuestion= Version & {
	"_id": string
	"content": string
	"date": string
	"model_type": 'User' | 'Manager'
}

export type MessageFeedback= MessageState 
	& {
		options: { 
			like: boolean,
		}
	} 
	
export interface Message extends BaseQuestion{
	chat: Room['id']
	sendBy: User['_id']
	employeeType: number
	priority: number
}

export interface MessageItem{
	item: Message
	from: User
	type: MessageType
	//styling?: MessageStyling
}

export interface TextMessage extends Message{
	text?: string
}
export interface MediaMessage extends Message{
	text?: string
	file: HTMLImageElement
}
export interface VoiceMessage extends Message{
	text?: string
	file: HTMLAudioElement
}

export type MessageDataItem= TextMessage

export type ConvertOptionalMessage<T extends MessageType,E>={
	[K in keyof T]?: K extends E
		? never
		: T[K]
}

export type MessageUpdateProps<T extends MessageType>={
	id: Message['_id'],
	item: ConvertOptionalMessage<T,'id'>
}

export type Question= Message & {
	"solved": boolean
}

export type Answer= BaseQuestion & {
	"sendBy": User['_id']
	"question": Question['_id']
}

export type ReadQuestionAsManagerResponse= BaseQuestion & {
	"chat": string
	"employeeType": number
	"priority": number
	"solved": boolean
	"sendBy": User['_id']
}
