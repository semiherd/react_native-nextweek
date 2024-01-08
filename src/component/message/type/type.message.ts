import { User } from '../../../context/user/type.user'
import { Message } from '../../../type/type.message'
import { SubType } from '../../../type/type.app'
import { ColorValues } from "../../../asset/constant/Color"
import { ImageSource } from '../../app/image/type.image'

type NarrowIncluding<Key,U>= Key extends U? Key : never

export type MessageCategory= 'message' | 'question'

export type MessageState={
	time: Date
	by: NarrowIncluding<User,'id'|'name'|'imageUrl'>
}
export type MessageInputIcon= {
	mic: boolean
	camera: boolean
	preListen: boolean
	delete: boolean
	timer: boolean
	send: boolean
}
export type MessageType={
	text:boolean,
	voice:boolean,
	callAudio:boolean,
	callVideo:boolean
}
export type Room={
	id: string
	title: string
	members: NarrowIncluding<User,'id'|'name'|'imageUrl'>
	created: MessageState
	deleted?: MessageState
	message: Message[]
}

export type RoomRoute_Params=SubType<Room,'id'|'title'>

export type RouteType={
		key: string
		name: "Chatroom"
		params: RoomRoute_Params
}

export type AttachId= 'image'|'document'

export type Attach={
	id: AttachId
	label: string
	bg: ColorValues
	icon: React.ReactElement
}

export type AttachItem={
	id: string
	sourceURL: ImageSource
	mime: 'image/jpeg'
	filename: string
}
