import { ObjectKey } from '../../type/type.app'

export const sortByKey=async <Obj> (arr:Obj[],key: keyof Obj, type:string):Promise<Obj[]|[]> => {
	try{
		if (type==='text'){
			return arr?.sort((a, b) => {
				return a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0
			})
		}else if(type==='date'){
			return  arr?.sort((a, b) => {
				const date1= new Date(a[key])
				const date2= new Date(b[key])
            return date1 > date2 
					? -1 
					: date1 < date2 
						? 1 
						: 0
        })     
		}else return []
	}catch(e){
		return []
	}
}
 