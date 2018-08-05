import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY='AIzaSyD0iMMTaC_i3CymzBLYNlgMHfNSb50tBbU';

const App = () => {
	return (
		<div>
		  <SearchBar />
		</div>  
	);
};

ReactDOM.render(<App />, document.querySelector('.container'));