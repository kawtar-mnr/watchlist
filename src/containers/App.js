import React,{Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {drama} from '../drama';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
	constructor(){
		super();
		this.state={
		          drama:drama,
	              searchField:''
      };
	}

/*componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response=>response.json())
	.then(users=>this.setState({drama:users}));
}*/

	onSearchChange = (event) => {
		this.setState({searchField:event.target.value})
		
	}
	render(){
		const {drama,searchField}=this.state;
		const filteredShow=drama.filter(show=>{
			return show.description.toLowerCase().includes(searchField.toLowerCase())
			})
		return !drama.length ? /* if drama.length==0 */
			<h1 className='tc pa5'>Loading</h1> :
		 (
		<div className='tc'>
		<h1 className='f1' >watchlist</h1>
		<h2 className='f4'>Need a TV show/movie recommendation ? Check these out and enjoy :)</h2> 
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		 <CardList drama={filteredShow}/>
		</Scroll>
		 </div>
		);
	
}
}
	


export default App;