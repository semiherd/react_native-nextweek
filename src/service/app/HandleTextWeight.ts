import { sortByKey } from './index'
import { handleBoldReturn } from '../../type/type.roster'

function findEmptyStr(text:string):number{
	return text.split('').filter(c => c === ' ').length

}
export const addBoldText= async (arr:handleBoldReturn[],text:string):Promise<handleBoldReturn[]|[]> => {
	try{
		let responseArr:handleBoldReturn[]= await sortByKey(arr,'startIndex','text')
		await Promise.all(responseArr?.map(async (item:handleBoldReturn) => {
			const boldItems:string[]= text.split(item.text).filter(i=>i.length>0)
			await Promise.all(boldItems.map( async (b) => {
				const start:number= text.indexOf(b)
				const end= start + b.length
				
				const obj:handleBoldReturn={
					startIndex: start,
					endIndex: end,
					text: text.slice(start,end),
					type: 'bold'
				}	
				responseArr.push(obj)
			}))
		}))
		return responseArr
	}catch(e){
		return []
	}
}

export const addRegularText = async (regularItems:string[], sourceText:string):Promise<handleBoldReturn[] |[]> => {
	
	if (!sourceText) {
		return [{
			startIndex: -1,
			endIndex: -1,
			text: '',
			type: 'regular'
		}] 
	}
	
	return await Promise.all(
		regularItems.map( (regularItem:string) => {
			const startIndex:number = sourceText.indexOf(regularItem);
			const emptyStrLength= findEmptyStr(regularItem)
			
			if (startIndex === -1) {
				return {
					startIndex: 0,
					endIndex: sourceText.length + findEmptyStr(sourceText),
					text: sourceText,
					type: 'bold'
				}
			}else{
				const endIndex:number = startIndex +  regularItem.length
				return {
						startIndex: startIndex,
						endIndex: endIndex + emptyStrLength,
						text: regularItem,
						type: 'regular'
				}				
			}
		}
	))
 }
