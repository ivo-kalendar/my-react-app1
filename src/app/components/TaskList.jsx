import React from 'react'
import { connect } from 'react-redux'
import { requestTaskCreation } from '../store/mutations'
import { Link } from 'react-router-dom'

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
			{tasks.map(task => (
				<Link to={`/task/${task.id}`} key={task.id}>
					<div>{task.name}</div>
				</Link>
			))}
		</div>
		<button onClick={() => createNewTask(id)}>Add New</button>
	</div>
)

export const ConnectedTaskList = connect(mapStateToProps, mapDispatchToProps) (TaskList)