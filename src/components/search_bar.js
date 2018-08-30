import React, { Component } from 'react'; //import React, pull off property Component as variable Component


class SearchBar extends Component {
  constructor(props) { //first and only function called when new instance of class created.
    super(props); //calls parent method on parent class. 

    this.state = { term: ''};
  }
    render() { //every React class must have a render method
      return <input onChange = {event => console.log(event.target.value)} />;
    }
}


//functional component => goes into a function: const SearchBar = () => { //etc.} functional components do not have state.

export default SearchBar;

// state is a plain JS object that is used to record in React user events. Each class based component has its own state object.
// Any time state is changed; it immediately re-renders and so does its children.
