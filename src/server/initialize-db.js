import { defaultState } from './defaultState'
import { connectDB } from './connect-db'

async function initializeDB() {
	let db = await connectDB().catch(err => console.log(err))
	let user = await db.collection(`users`).findOne({id:"User_1"})
	if (!user) {
		for (let collectionName in defaultState) {
			let collection = db.collection(collectionName)
			await collection.insertMany(defaultState[collectionName])
		}
	}
}

initializeDB().catch(err => console.log(err))