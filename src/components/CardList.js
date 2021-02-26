import React from 'react';
import Card from './Card';
const CardList=({ drama })=>{

	return(
     <div> 
     {
     drama.map((tvShow,i)=>{
		return (
			<Card 
				key={i} 
				id={drama[i].id} 
				title={drama[i].title} 
				
			/>
		   );
		})
	 }
     </div>

  );
}

export default CardList;

