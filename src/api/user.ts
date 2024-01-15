import { Api_ReadUser, Api_UpdateUser } from '../../type/type.api'
import image2 from '../../asset/image/profile/photo2.png'

export const mock_readPeopleInShift_Users:Api_ReadUser=[
	"user":
	{
		"_id": "user3",
		"name": "user2name",
		"id": "user1",
		"email": "user2@web.de",
		"password": "12345678",
		"employeeType": 1,
		"street": "default",
		"houseNumber": 0,
		"postalCode": 0,
		"vacationDays": 0,
		"monthlyHours": 0,
		"breakTimer": 0,
		"employeeScore": 0,
		"location": "loc1",
		"manager": "man1",
		"date": "2022-10-27T09:27:29.822Z",
		"__v": 0,
		"image": image2
	}
]

export const mock_readUser:Api_ReadUser={
		"user":
			{
				"_id": "user3",
        "name": "user2name",
        "id": "user1",
        "email": "user2@web.de",
        "password": "12345678",
        "employeeType": 1,
        "street": "default",
        "houseNumber": 0,
        "postalCode": 0,
        "vacationDays": 0,
        "monthlyHours": 0,
        "breakTimer": 0,
        "employeeScore": 0,
        "location": "loc1",
        "manager": "man1",
        "date": "2022-10-27T09:27:29.822Z",
        "__v": 0,
				"image": image2
			}
}

export const mock_updateUser:Api_UpdateUser<string>= {
	"changed": "81377" // PostalCode
}