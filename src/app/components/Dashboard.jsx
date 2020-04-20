import React from 'react'
import { connect } from 'react-redux'
import { ConnectedTaskList } from './TaskList'

const mapStateToProps = state => ({ groups: state.groups })

const Dashboard = ({groups}) => (
	<div className="dashboard">
		<h2>Dashboard!!!</h2>
		{ 
			groups.map( group => (
				<ConnectedTaskList 
					key={group.id} 
					id={group.id} 
					name={group.name} 
				/>
			)) 
		}
	</div>
)

export const ConnectedDashboard = connect(mapStateToProps) (Dashboard)