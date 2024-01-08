import RNPermissions, {
	NotificationOption, 
	PERMISSIONS, 
	Permission,
	check, request, PermissionStatus, RESULTS
} from 'react-native-permissions'

type os= "ios" | "android" | "windows" | "macos" | "web"

export type NestedPermissionKey<Obj extends object>= {
	[K in keyof Obj & (string|number)] : Obj[K] extends object
		? NestedPermissionKey<Obj[K]>
		: K
}[keyof Obj & (string|number)]

export type NestedPermissionVal<Obj extends object>= {
	[K in keyof Obj] : Obj[K] extends object
		? NestedPermissionVal<Obj[K]>
		: Obj[K]
}[keyof Obj]

export const PermissionObject={
	android:{
		photo: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
		video: PERMISSIONS.ANDROID.READ_MEDIA_VIDEO,
	},
	ios: {
		photo: PERMISSIONS.IOS.PHOTO_LIBRARY,
		video: PERMISSIONS.IOS.MEDIA_LIBRARY,
	}
} as const

export type PermissionKeys= NestedPermissionKey<typeof PermissionObject>
export type PermissionValues= NestedPermissionVal<typeof PermissionObject>
