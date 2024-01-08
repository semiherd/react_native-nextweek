export const onShiftExchange = async ({id}:{id:string}):Promise<void> => {
	try{
		console.log('onShiftExchange called',id)
	}catch(e){
		console.log('error on onShiftExchange call',id)
	}
}

