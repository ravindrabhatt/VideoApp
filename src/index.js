import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_KEY='';

class App extends Component {
	constructor(props) {
		super(props);

    YTSearch({ key: API_KEY, term:'Kpop' }, (videos) => {
  		this.setState({ videos });
    });
	}

	render(){
	  return (
		  <div>
		    <SearchBar />
		  </div>  
	  );
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));