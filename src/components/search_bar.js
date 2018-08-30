import React, { Component } from 'react'; //imort React, pull off property Component as variable Component


class SearchBar extends Component {
    render() { //every React class must have a render method
      return <input onChange = {(event) => console.log(event.target.value)} />;
    }
}


//functional component => goes into a function: const SearchBar = () => { //etc.}

export default SearchBar;
