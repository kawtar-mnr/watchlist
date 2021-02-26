import React from 'react';

const Card=({id,title,description})=>{
	return(

		<div className='tc bg-light-pink br3 dib pa3 ma2 grow bw2 shadow-5'>
			<img alt='movie' src={`./img/${id}.jpg`} />
			<div>
				<h2>{title}</h2>
			
			</div>
		</div>
	)
 }

export default Card;