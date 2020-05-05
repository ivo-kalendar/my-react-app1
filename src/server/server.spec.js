import { addNewTask, updateTask } from './server'

(async function taskFunct() {
	await addNewTask({
		name: "My Test Task - New Task",
		id: "1234567"
	})

	await updateTask({
		id: "1234567",
		name: "My Task - UPDATED!!!!"
	})
})()