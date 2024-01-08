export const onShiftCancel = async ({id}:{id:string}):Promise<void> => {
	try{
		console.log('onShiftCancel called',id)
	}catch(e){
		console.log('error on onShiftCancel call',id)
	}
}

