import React, { Component }  from 'react';
// we don't need to import reactDOM since there is nothing to render to the dom

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term:'type here'};
    }
    render(){
        
        return(
            <div>
  
                 <input
                  value = {this.state.term}
                  onChange = { e => this.setState({term: e.target.value}) } 
                  />
            </div>
        );

    }

} 
export default SearchBar;