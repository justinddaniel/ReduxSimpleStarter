import React from 'react';
import ReactDOM from 'react-dom';

// Create a new component and this component should produce some HTML.

const App = () => {
	return <div> Hi! </div>;
}

//always use one component per file. 

// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"))
