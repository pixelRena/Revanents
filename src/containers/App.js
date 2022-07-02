import React, {Component} from 'react';
import CardList from '../components/CardList';
import {revs} from '../revs';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';

class App extends Component {
	constructor() {
		super()
		this.state = {
			revs: revs,
			searchfield: ''
		}
	}

	onsearchChange = (event) => {
		// on search change the searchfields input to non-empty
		this.setState({searchfield: event.target.value })
	}

	render() {
		const { revs, searchfield } = this.state;
		// Filters revanents based off the states searchfield, making both searchfield and name of rev's both lowercase to match
		const filterRevs = revs.filter(rev => {
			return rev.name.toLowerCase().includes(searchfield.toLowerCase())
		})
		
		return(
			<div className="tc">
				<h1>Revanents</h1>
				<SearchBox searchChange={this.onsearchChange}/>
				<Scroll>
					<CardList revs={filterRevs}/>
				</Scroll>
			</div>
		);
	}
}

export default App;