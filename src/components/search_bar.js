import React, { Component } from 'react'; //import React, pull off property Component as variable Component


class SearchBar extends Component {
  constructor(props) { //first and only function called when new instance of class created.
    super(props); //calls parent method on parent class.

    this.state = { term: ''}; //this.state used only inside constructor; everywhere else use this.setState
  }
    render() { //every React class must have a render method
      return (
        <div className='search-bar'>
          <input
            value = {this.state.term} //converts it to controlled form element
          onChange = {event => this.onInputChange(event.target.value)} />
        </div>
      );
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}


//functional component => goes into a function: const SearchBar = () => { //etc.} functional components do not have state.

export default SearchBar;

// state is a plain JS object that is used to record in React user events. Each class based component has its own state object.
// Any time state is changed; it immediately re-renders and so does its children.
