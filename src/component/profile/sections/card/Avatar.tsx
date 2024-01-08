import React, { useEffect, useState } from "react"
import { ImageCss,UserAvatar } from "../../../app/image/type.image"
import { User } from '../../../../context/user/type.ctx.user'
import { useUser } from '../../../../service/hook/UseUser'
import AvatarImage from '../../../app/image/AvatarImage'
import { SectionWithAvatar } from "../../../../type/type.profile"

const Avatar= ({type}:{type: SectionWithAvatar}) => {
	const { fetchUser }= useUser()
	const [avatar,setAvatar]= useState<UserAvatar|null>(null)

	const avatarStyling:ImageCss={
		width: 50,
		height: 50,
		borderWidth: 0,
		borderColor: 'transparent',
		borderRadius: 20
	}

	async function handleAvatar():Promise<void>{
		try{
			if(type==='swap-in'){
				const data:User|null= await fetchUser('user2')
				if(data){
					setAvatar({
						_id: data?._id,
						name: data.name,
						image: data?.image
					})
				}
			}
		}catch(e){
			setAvatar(null)
		}
	}

	useEffect(() => {
		handleAvatar()
	},[])

	return <>{avatar===null ?null:<AvatarImage data={avatar} styling={avatarStyling} />}</>
}

export default Avatar
