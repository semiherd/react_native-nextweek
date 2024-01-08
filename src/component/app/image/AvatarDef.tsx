import React from 'react'
import VectorIcon from '../icon/VectorIcon'


const AvatarDef= (props:{color?:string,size?:number}) => {
	return <VectorIcon type="ionicon" name="person-outline" color={props.color || 'white'} size={props.size || 18} />
}
export default AvatarDef