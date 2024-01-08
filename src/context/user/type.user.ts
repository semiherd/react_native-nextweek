import { ImageSource } from '../../component/app/image/type.image'
import { NarrowIncluding } from '../../type/type.app'
import { UserUpdateParam } from '../../type/type.user'
import { Version } from '../../type/type.shift'

export interface Address{
	"street": string
	"houseNumber": number
	"postalCode": number
}
export interface UserBase extends Address{
	"_id": string
	"name": string
	"email": string
	"password": string	
}

export interface Admin{
	"admin": string
}

export interface Manager extends UserBase,Admin,Version{
	"date": string //"2022-10-27T09:27:29.822Z",
	"image": ImageSource //nicht verfügbar für jetzt
}

export interface User extends UserBase,Version{
	"id": string
	"employeeType": number	
	"vacationDays": number
	"monthlyHours": number
	"breakTimer": number
	"employeeScore": number
	"location": string
	"manager": string
	"date": string //"2022-10-27T09:27:29.822Z",
	"image": ImageSource //nicht verfügbar für jetzt
}

export type UserApi= {
	selectUserApi: ( id: User['_id']) => Promise<User>
	updateUserApi: ( id: User['_id'] , item: {type: UserUpdateParam, value: string} ) => Promise<void>
	insertUserApi: ( item: User ) => Promise<void>
	deleteUserApi: ( id: User['_id'] ) => Promise<void>
}

export type UpdateItem={
	type: UserUpdateParam,
	value: User[NarrowIncluding<keyof User,UserUpdateParam>]
}

type ReturnType<T>= T extends (...args: any) => infer R? R : never

type NoPayload<K>={
	type: K
}

export type ActionMap<M extends { [index: string]: any }>={
	[Key in keyof M]: M[Key] extends undefined
		? NoPayload<Key>
		: NoPayload<Key> & {payload: M[Key]}
}

