import { Platform } from 'react-native'
import { PermissionObject,PermissionKeys, PermissionValues} from '../../asset/constant/PermissionObject'
import {
	PERMISSIONS, 
	Permission,
	PermissionStatus,
	request,
	check
} from 'react-native-permissions'

const os:'ios'|'android'|'windows'|'web'|'macos'= Platform.OS

const {SIRI, ...PERMISSIONS_IOS} = PERMISSIONS.IOS

/*
const PLATFORM_PERMISSIONS = Platform.select<
  typeof PERMISSIONS.ANDROID | typeof PERMISSIONS_IOS | typeof PERMISSIONS.WINDOWS | {}
>({
  android: PERMISSIONS.ANDROID,
  ios: PERMISSIONS_IOS,
  windows: PERMISSIONS.WINDOWS,
  default: {},
})
*/


export const requestPermission= async (p:PermissionKeys):Promise<PermissionStatus|null> => {
		const param:Permission|null= os==='ios'
			? PermissionObject.ios[p]
			: os==='android'
				? PermissionObject.android[p]
				: null
		if(param===null) return null
		return await request(param)
			.then((result) => {
				return result
			})
			.catch((e) => {
				return null
			})	
}

function switchPermission(item:PermissionKeys):PermissionValues|null{
	try{
		switch(item){
			case 'photo':
				if(Platform.OS==='ios')
					return PERMISSIONS.IOS.PHOTO_LIBRARY
				if(Platform.OS=='android')
					return PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
				return null
			case 'video':
				if(Platform.OS==='ios')
					return PERMISSIONS.IOS.MEDIA_LIBRARY
				if(Platform.OS=='android')
					return PERMISSIONS.ANDROID.READ_MEDIA_VIDEO
				return null						
			default:
				return null
		}
	}catch(e){
		return null
	}
}

export const checkPermission= async (type:PermissionKeys):Promise<PermissionStatus> =>{  
	try{
		const param= switchPermission(type)
		if(param===null) return 'denied'
		return await check(param)
	}catch(e){
		return 'denied'
	}
}