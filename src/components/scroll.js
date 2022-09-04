import React from 'react';

// Creates a scroll cards within a box
const Scroll = (props) => {
	return(
		<div style={{overflowY: 'auto', height:'600px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;