import React, { Component } from 'react';
import './Search.css';

import Movie from './Movie';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            mappedOut: [],
            searchResults: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    
        var trimmed = JSON.stringify(event.target.value.trim());
        var root = encodeURI('http://www.omdbapi.com/?s=' + trimmed + '&apikey=cb62c109&r=json');
        
        fetch(root)
        .then(response => response.json())
            .then(data => {
                console.log(data.Search);

                this.setState({searchResults: data.Search})

                var resultString = JSON.stringify(data.Search);

                if( resultString !== "[]" ) {
                    if(this.state.searchResults !== undefined && this.state.searchResults !== {}) {
                        console.log("map called");
                        var mappedOut = data.Search.map(function(result) {return <Movie key={result.imdbID} mediaId={result.imdbID} />})
                        this.setState({mappedOut: mappedOut})
                    }
                }
            })
    }

    componentDidMount() {console.log('search added')}

    render() {
        
        return (
            <div className="search-wrap">
                <div className="container">
                <label htmlFor="search-text">Search:</label>
                <input type="text" id="search-text" className="form-control" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="results-wrap">
                    <div className="container">{ this.state.mappedOut }</div>
                </div>
            </div>
        );
    }
}

export default Search;
