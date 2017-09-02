//import both react and react dom library 
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyBXWyymKmKU8Ji0kmV-BNQy4DiaHEWMf0c';

// Create the component 
const App = () => {

    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Render it to the page  
ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
