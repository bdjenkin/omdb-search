import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import Blog from './Blog';
import Movie from './Movie';
//import Search from './Search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            searchResults: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: []});
        this.render();

        this.setState({value: event.target.value});

        var trimmed = JSON.stringify(event.target.value.trim());
        var root = encodeURI('http://www.omdbapi.com/?s=' + trimmed + '&apikey=cb62c109&r=json');
        
        fetch(root)
        .then(response => response.json())
            .then(data => {
                console.log(data.Search);

                if(data.Search && data.Search.length > 0)
                    this.setState({searchResults: data.Search})
                else {
                    console.log("No results with text");
                    let emptyResults = []
                    this.setState({searchResults: emptyResults})
                }
                
            })
    }

    componentDidMount() {console.log('App Started')}

    componentDidUpdate() {console.log("App Updated")}

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">React Search: OMDb</h1>
            </header>

            <div className="search-wrap">
                <div className="container">
                <label htmlFor="search-text">Search for a movie or TV show and see results instantly:</label>
                <input type="text" id="search-text" maxLength="30" className="form-control" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="results-wrap">
                    <div className="container" id="movies">
                        { 
                            this.state.searchResults.length > 0
                            ? this.state.searchResults.map((result, index)=> <Movie key={"key_" + index + "_" + result.imdbID} mediaId={result.imdbID} indexOf={index} />)
                            : <div className="empty-results">No movie found!</div>                     
                        }
                    </div>
                </div>
            </div>

        </div>
        
        );
    }
}

export default App;
