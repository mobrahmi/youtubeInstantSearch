import React, { Component }  from 'react';
// we don't need to import reactDOM since there is nothing to render to the dom

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term:''};
    }
    render(){
        
        return(
            <div className="search-bar">
  
                 <input
                  value = {this.state.term}
                  onChange = { e => this.onInputChange(e.target.value)  } 
                  />
            </div>
        );

    } 

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

} 
export default SearchBar;