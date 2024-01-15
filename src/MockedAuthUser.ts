import { Manager,User } from '../context/user/type.user'
import { SignInResponse } from '../context/user/type.auth'

export const mocked_User:User= 
	{
		"_id": 'user1',
		"name": 'user1Name', 
		"id": 'user1', 
		"email": 'test@web.de',
		"password": '12345678',
		"employeeType": 1,
		"street": 'default',
		"houseNumber": 0,
		"postalCode": 0,
		"vacationDays": 30,
		"monthlyHours": 10,
		"breakTimer": 15,
		"employeeScore": 0,
		"location": "loc1",
		"manager": "man1",
		"date": "2023-12-02T09:27:29.822Z",
		"__v": 0,
		"image": null //typeof ImageSource => nicht verfügbar für jetzt
	}
	export const mocked_Manager:Manager= 
	{
		"_id": "man1",
		"name": "manName1",
		"email": "man1@web.de",
		"password": "$2a$10$rHSfGfSlHWPJvFrT7vyBmeDB5K48K01pxUtgQCgK3IOfyz1FqkgTS",
		"street": "default",
		"houseNumber": 0,
		"postalCode": 0,
		"admin": "63639f12587b115846a066d0",
		"date": "2022-11-05T11:30:32.829Z",
		"__v": 0,
		"image": null //typeof ImageSource => nicht verfügbar für jetzt
	}
