import ImagePicker from 'react-native-image-crop-picker';
import { ImagePickerProps } from './type'

async function imagePicker(
	{ errorFn, multiple, minFiles, maxFiles, filetype }
	: ImagePickerProps
){
	try{
	   	return await ImagePicker.openPicker({
				multiple,
				waitAnimationEnd: false,
				sortOrder: 'desc',
				mediaType: filetype,
				includeExif: true,
				forceJpg: true,
				maxFiles, 
				minFiles 
			})
	}catch(e){
		errorFn()
	}
}
export { imagePicker }