import { User } from '../context/user/type.user'
import { SubType } from '../type/type.app'

export type UserUpdateParam= keyof SubType<User,'name'|'email'|'postalCode'|'password'>