import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, groups) => (
	{
		name: groups.name,
		tasks: state.tasks.filter(task => task.group === groups.id)
	}
)

const TaskList = ({tasks, name}) => (
	<div className="tasklist">
		<h3>{name}</h3>
		<div>
			{tasks.map(task => <p key={task.id}>{task.name}</p>)}
		</div>
	</div>
)

export const ConnectedTaskList = connect(mapStateToProps) (TaskList)