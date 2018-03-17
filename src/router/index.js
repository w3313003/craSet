import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Index from 'pages/index/index'

export default class extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Route path='/' exact render={() => <Redirect to='Index'/>}/>
					<Route path='/Index' component={Index} />
				</div>
			</Router>
		)
	}
}