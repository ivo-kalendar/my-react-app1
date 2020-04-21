import React from 'react'
import { connect } from 'react-redux'
import { requestTaskCreation } from '../store/mutations'

const mapStateToProps = (state, ownProps) => {
	let groupID = ownProps.id
	return {
		name: ownProps.name,
		id: groupID,
		tasks: state.tasks.filter(task => task.group === groupID)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		createNewTask(id) {	
			dispatch(requestTaskCreation(id))
		}
	}
}

const TaskList = ({tasks, name, id, createNewTask}) => (
	<div className="tasklist">
		<h3>{name}</h3>
		<div>
			{tasks.map(task => <p key={task.id}>{task.name}</p>)}
		</div>
		<button onClick={() => createNewTask(id)}>Add New</button>
	</div>
)

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps) (TaskList)