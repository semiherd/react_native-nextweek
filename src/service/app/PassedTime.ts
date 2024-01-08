import { timeDiff } from './index'

async function handleTimePassed(d:Date):Promise<string>{
	try{
		const now= new Date()
		const time= new Date(d)
		const timePassed= timeDiff(now,time)
		return	timePassed.day.value>0
						? `${timePassed.day.value} ${timePassed.day.text}`
						:  timePassed.hour.value>0
							? `${timePassed.hour.value} ${timePassed.hour.text}`
							: timePassed.minute.value>0
								? `${timePassed.minute.value} ${timePassed.minute.text}`
									? `${timePassed.second.value} ${timePassed.second.text}`
									: ''
							  : ''
	}catch(e){
		return ''
	}
}
export { handleTimePassed }