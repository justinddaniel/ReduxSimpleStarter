import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyCtQpNd1UkmDVriawjY-_nKu2j1nJLBZO0';



// Create a new component and this component should produce some HTML.

//downwards data flow: only the most parent component should be responsible for fetching data.

class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos }); //key and value both videos so can condense
			//equivalent to this.setState({videos: videos})
		});
	}

	render() {
		return  (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} /> //passing props with videos (prop videos)
			</div>
		);
	}
}

//always use one component per file.

// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector(".container"))
