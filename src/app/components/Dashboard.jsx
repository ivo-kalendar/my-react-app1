import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { ConnectedTaskList } from './TaskList'

const mapStateToProps = state => {return { groups: state.groups }}

const Dashboard = ({groups}) => (
	<Fragment>
		<h2>Dashboard!!!</h2>
		{ groups.map( group => (
			<ConnectedTaskList key={group.id} id={group.id} name={group.name} />
		) )}
	</Fragment>
)

export const ConnectedDashboard = connect(mapStateToProps) (Dashboard)