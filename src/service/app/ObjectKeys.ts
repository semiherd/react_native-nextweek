import { ObjType } from '../../type/type.app'

export const objectKeys= <T extends ObjType>(param:T):(keyof T)[] => {
	return Object.keys(param) as (keyof T)[]
}