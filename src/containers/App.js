import React, { Component } from 'react';
import CardList from '../components/CardList';
import {revs} from '../revs';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
	constructor() {
		super()
		this.state = {
			revanents: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		this.setState({revanents: revs})
	}

	onsearchChange = (event) => {
		// on search change the searchfields input to non-empty
		this.setState({searchfield: event.target.value})
	}

	render() {
		const { revanents, searchfield } = this.state;

		// Filters revanents based off the states searchfield, making both searchfield 
		// and name of rev's both lowercase to match
		const filteredRevs = revanents.filter(rev => {
			return rev.name.toLowerCase().includes(searchfield.toLowerCase())
		})

		return(
			!revanents.length ? 
			<h1>Loading directory...</h1> :
			<div className="tc">
				<h1>Revanents</h1>
				<SearchBox searchChange={this.onsearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList revs={filteredRevs}/>
					</ErrorBoundary>
				</Scroll>
			</div>
		)
	}
}

export default App;