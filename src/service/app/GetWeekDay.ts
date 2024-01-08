import { WeekDays } from '../../type/type.app'

function getWeekDay(date = new Date(), locale = 'en-GB'):WeekDays|null {
	try{
		const d:string= date.toLocaleDateString(locale, {weekday: 'long'})
		return d.split(',')[0] as WeekDays
	}catch(e){
		return null
	}
}

export { getWeekDay }