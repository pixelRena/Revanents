import React from 'react';
import '../containers/card.css';

const Card = ({ id, name, avatar, blood_code }) => {
	return(
		<div className='cardbg tc dib br3 ma2 pa3 grow bw2 shadow-5'>
			<img className="ba b--red" src={avatar} alt="code_vein_avatar" width="200" height="200"/>
			<div>
				<h3>{name}</h3>
				<p>Blood Code: {blood_code}</p>
			</div>
		</div>
	);
}

export default Card;