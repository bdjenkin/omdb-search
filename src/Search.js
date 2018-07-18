import React, { Component } from 'react';
import './Search.css';

import Movie from './Movie';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
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

                if(data.Search && data.Search.length > 0)
                 this.setState({searchResults: data.Search})
                else {
                    console.log("No results with text")
                }
                
            })
    }

    componentDidMount() {console.log('search added')}

    render() {
        
        return (
            <div className="search-wrap">
                <div className="container">
                <label htmlFor="search-text">Search:</label>
                <input type="text" id="search-text" maxlength="30" className="form-control" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="results-wrap">
                    <div className="container">
                        { 
                            this.state.searchResults.length > 0
                            ? this.state.searchResults.map(function(result) {return <Movie key={result.imdbID} mediaId={result.imdbID} />})
                            : <div className="empty-results">No results found</div>                     
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
