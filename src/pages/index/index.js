import React from 'react';
import stylus from './index.styl';
import { connect } from 'react-redux';
import action from '../../redux/action/index';
const mapStateToProps = state => {
	return state
};
const mapDispatchToProps = dispatch => {
	return {
		changes() {
			console.log(123)
			dispatch(action['ADD'](8))
		}
	}
}

@connect(
	mapStateToProps,
	mapDispatchToProps
)
export default class extends React.Component {
	componentDidMount() {
		console.log(this.props)
	}
	change = () => {

	}
	render() {
		return (
			<div className={stylus.name} onClick={this.props.changes}>
				Index
				{this.props.globalReducer.name}
			</div>
		)
	}
};

