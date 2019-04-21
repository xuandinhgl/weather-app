import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Form from './components/Form';
import Loading from './components/Loading';
import Infomation from './components/Infomation';
import Error from './components/Error';

class App extends Component {
	render() {
		const loading = this.props.isLoading ? <Loading /> : '';
		const infomation = Object.keys(this.props.info).length ? <Infomation /> : '';
		const error = this.props.error ? <Error /> : '';
		return (
			<div className="wrapper">
				<div className="container">
					<Form />				
					{error}	
					{infomation}
					{loading}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoading : state.loading,
		info: state.weather,
		error: state.error.status
	}
}

export default connect(mapStateToProps, null)(App);
