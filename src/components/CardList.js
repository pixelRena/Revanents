import React from 'react';
import Card from './card';

const CardList = ({ revs }) => { 
	return(
		<div> {
			revs.map((user, i) => {
				return (
					<Card 
					key={i}
					id={revs[i].id} 
					name={revs[i].name} 
					blood_code={revs[i].blood_code} 
					avatar={revs[i].image}
					/>
				);
			})
		}
    	</div>
	);
}

export default CardList;