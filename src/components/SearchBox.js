import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className="pa2">
			<input 
			className="pa2 ba br3 b--red bg-light-red"
			type="search" 
			placeholder="search revanents"
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;