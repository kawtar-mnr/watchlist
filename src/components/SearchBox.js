import React from 'react';

const SearchBox = ({searchChange}) => {
	return(
		<div className='pa2'>
		<input 
		className='pa3 ba b--green bg-lightest-blue'
		type='search'
	    placeholder='What type of movies/TV shows do you like?'
	    onChange={searchChange}
	    size="42"
	    />	
		</div>
		);
}

export default SearchBox;