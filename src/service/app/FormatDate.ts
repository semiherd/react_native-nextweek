function getHourMinute(item:string|Date):string{
	const data:{h:string,m:string}= {
		h: new Date(item).getHours().toString(),
		m: new Date(item).getMinutes().toString()
	}
	const hour= parseInt(data.h)<10? `0${data.h}`:data.h
	const minute= parseInt(data.m)<10? `0${data.m}`:data.m
	return `${hour}:${minute}`
}
function getDMY(item:string|Date):string{
	const data:{y:string,m:string,d:string}= {
		y: new Date(item).getFullYear().toString(),
		m: (new Date(item).getMonth() + 1 ).toString(),
		d: new Date(item).getDate().toString()
	}
	
	if(parseInt(data.d)<10) data.d= `0${data.d}`
	if(parseInt(data.m)<10) data.m= `0${data.m}`

	return `${data.d}.${data.m}.${data.y}`
}

export {
	getHourMinute,
	getDMY
}