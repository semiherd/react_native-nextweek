import { MessageDataItem } from '../type/type.message'
import image1 from '../asset/image/profile/photo1.png'
import image2 from '../asset/image/profile/photo2.png'
import image3 from '../asset/image/profile/photo3.png'
import image4 from '../asset/image/profile/photo4.png'
 

let messageList:MessageDataItem[]=[
	{
		id: 'm1',
		from: 'user2',
		to: 'room1',
		type: 'TextMessage',
		text: 'message 1 testing message 1 testing message 1 testing message 1 testing',
		reply:[{
			time: new Date(),
			options: {
				like: false
			},
			by: {
				id: 'user2',
				name: 'user2Name',
				imageUrl: image2
			}
		}],
		created: {
			time: new Date(),
			by: {
				id: 'user2',
				name: 'user2Name',
				imageUrl: image2
			}
		},
		delivered: [
			{
			time: new Date(),
			by: {
				id: 'user2',
				name: 'user2Name',
				imageUrl: image2
			}
			}
		],
		read: [
			{
				time: new Date(),
				by: {
					id: 'user1',
					name: 'user1Name',
					imageUrl: image1
				}
			}
		],
		deleted: null
	},
	{
		id: 'm2',
		from: 'user3',
		to: 'room2',
		type: 'TextMessage',
		text: 'message 2 testing',
		reply:[{
			time: new Date(),
			options:{
				like: false
			},
			by: {
				id: 'user2',
				name: 'user2Name',
				imageUrl: image2
			}
		}],
		created: {
			time: new Date(),
			by: {
				id: 'user3',
				name: 'user3Name',
				imageUrl: image3
			}
		},
		delivered: [
			{
				time: new Date(),
				by: {
					id: 'user3',
					name: 'user3Name',
					imageUrl: image3
				}
			}
		],
		read: [
			{
				time: new Date(),
				by: {
					id: 'user3',
					name: 'user3Name',
					imageUrl: image3
				}
			}
		],
		deleted: null
	},
	{
		id: 'm3',
		from: 'user4',
		to: 'room3',
		type: 'TextMessage',
		text: 'message 3 testing message 3 testing message 3 testing message 3 testing',
		reply:[{
			time: new Date(),
			options: {
				like: false
			},
			by: {
				id: 'user2',
				name: 'user2Name',
				imageUrl: image2
			}
		}],
		created: {
			time: new Date(),
			by: {
				id: 'user4',
				name: 'user4Name',
				imageUrl: image4
			}
		},
		delivered: [
			{
			time: new Date(),
			by: {
				id: 'user4',
				name: 'use4Name',
				imageUrl: image4
			}
			}
		],
		read: [
			{
				time: new Date(),
				by: {
					id: 'user1',
					name: 'user1Name',
					imageUrl: image1
				}
			}
		],
		deleted: null
	},
]

export {
	messageList
}