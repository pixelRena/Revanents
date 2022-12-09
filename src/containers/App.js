import React, { Component } from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import {revs} from '../revs';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

import { setSearchField } from '../action';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = dispatch => {
	// dispatch event to trigger reducer
	return {
		onsearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			revanents: []
		}
	}

	componentDidMount() {
		this.setState({revanents: revs});
	}

	render() {
		const { revanents } = this.state;
		const { searchField, onsearchChange } = this.props;

		// Filters revanents based off the states searchfield, making both searchfield 
		// and name of rev's both lowercase to match
		const filteredRevs = revanents.filter(rev => {
			return rev.name.toLowerCase().includes(searchField.toLowerCase())
		})

		return(
			!revanents.length ? 
			<h1>Loading directory...</h1> :
			<div className="tc">
				<h1>Revanents</h1>
				<SearchBox searchChange={onsearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList revs={filteredRevs}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

// Run state and actions and return App
// Subscribes to state changes in redux store
// Standard naming but can be named to anything
export default connect(mapStateToProps, mapDispatchToProps)(App);