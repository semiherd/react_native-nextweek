
type item={
	value: number
	text: string
}
export const timeDiff= <T extends Date>(time1:T,time2:T):{day:item,hour:item,minute:item,second:item} => {
	const t1= new Date(time1)
	const t2= new Date(time2)
	let difference = t1.getTime() - t2.getTime();
	
	const returnObj:{day:item,hour:item,minute:item,second:item}={
		day:{
			value: 0,
			text: 'day'
		},
		hour:{
			value: 0,
			text: 'hour'
		},
		minute:{
			value: 0,
			text: 'minute'
		},
		second:{
			value: 0,
			text: 'second'
		},
	}
   const daysDifference = Math.floor(difference/1000/60/60/24);  
   const hoursDifference = Math.floor(difference/1000/60/60);
   const minutesDifference = Math.floor(difference/1000/60);
   const secondsDifference = Math.floor(difference/1000); 
	
	const dayString= daysDifference>1? 'days': 'day'
	const hourString= hoursDifference>1? 'hours': 'hour'
	const minuteString= minutesDifference>1? 'minutes': 'mnute'
	const secondString= secondsDifference>1? 'seconds': 'second'

	if(daysDifference>0) 
		returnObj.day= {value:daysDifference,text:dayString}
	if(hoursDifference>0) 
		returnObj.hour= {value:hoursDifference,text:hourString}
	if(minutesDifference>0) 
		returnObj.minute= {value:minutesDifference,text:minuteString}
	if(secondsDifference>0) 
		returnObj.second= {value:secondsDifference,text:secondString}
	
	return returnObj	
}