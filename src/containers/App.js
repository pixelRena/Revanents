import React, {useState} from 'react';
import CardList from '../components/CardList';
import {revs} from '../revs';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/scroll';
import ErrorBoundary from '../components/ErrorBoundary';

function App() {
	const [searchfield, setSearchfield] = useState('');

	const onsearchChange = (event) => {
		// on search change the searchfields input to non-empty
		setSearchfield(event.target.value)
	}

	// Filters revanents based off the states searchfield, making both searchfield 
	// and name of rev's both lowercase to match
	const filterRevs = revs.filter(rev => {
		return rev.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	
	return(
		<div className="tc">
			<h1>Revanents</h1>
			<SearchBox searchChange={onsearchChange}/>
			<Scroll>
				<ErrorBoundary>
					<CardList revs={filterRevs}/>
				</ErrorBoundary>
			</Scroll>
		</div>
	);
}

export default App;