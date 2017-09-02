//import both react and react dom library 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBXWyymKmKU8Ji0kmV-BNQy4DiaHEWMf0c';



// Create the component 
class App extends Component {
    constructor(props){
        super(props);
        this.state = { videos: [] };
        YTSearch({ key: API_KEY, term: 'game of thrones'}, (videos) => {
            this.setState({videos});
            //this.setState({videos : videos})
            console.log(this.state); 
            } );
    }

    render(){
        return ( 
            <div>
                <SearchBar />
            </div>
        );
    }
           
 }

// Render it to the page  
ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
