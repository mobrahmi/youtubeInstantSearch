import _ from 'lodash'; // using lo dash debouce method on search
//import both react and react dom library 
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBXWyymKmKU8Ji0kmV-BNQy4DiaHEWMf0c';



// Create the component 
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
             selectedVideo: null,
             videos: []
             }; 
        this.videoSearch('game of thrones'); //kick the initial search
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
            //this.setState({videos : videos})
        });
    }

    render(){
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        return ( 
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
              <div className="row">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} 
                    />
              </div>
            </div>
        );
    }
           
 }

// Render it to the page  
ReactDOM.render(
    <App />,
    document.querySelector('.container')
);
