import { defaultState } from './defaultState'
import { connectDB } from './connect-db'

async function initializeDB() {
	let db = await connectDB().catch(err => console.log(err))
	for (let collectionName in defaultState) {
		let collection = db.collection(collectionName)
		await collection.insertMany(defaultState[collectionName])
	}
}

initializeDB().catch(err => console.log(err))