import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      imdbscores: {},
      rtscores: {},
      mcscores: {}
    }
  };

  componentDidMount() {
    var root = 'http://www.omdbapi.com/?i=' + this.props.mediaId + '&apikey=cb62c109';

    fetch(root)
    .then(response => response.json())
        .then(data => {
            console.log(data);

            setTimeout(() => {

                if(data) this.setState({movie: data})
                if(data.Ratings[0])
                    this.setState({imdbscores: data.Ratings[0]})
                if(data.Ratings[1])
                    this.setState({rtscores: data.Ratings[1]})
                if(data.Ratings[2])
                    this.setState({mcscores: data.Ratings[2]})

            }, 500)

        })
  }

  render() {
    return (
            <div className="movie row mt-1 mb-1 wow fadeIn" data-wow-delay={this.props.indexOf > 3 ? "0.5s" : this.props.indexOf/3 + "s" }>
                <div className="col-3 col-sm-12 col-md-4 col-lg-3">
                    <img src={this.state.movie.Poster !== "N/A" ? this.state.movie.Poster : "no-img.png" } alt={this.state.movie.Title} className="poster" />
                </div>
                <div className="col-6 col-sm-12 col-md-6 col-lg-6 wow fadeIn" data-wow-delay="1s">
                    <h6>{this.state.movie.Title} {"(" + this.state.movie.Year + ")"}</h6>
                    <p className="details">{this.state.movie.Rated} | Runtime: {this.state.movie.Runtime} | Released: {this.state.movie.Released} {"(" + this.state.movie.Country + ")"}</p>
                    <p className="limit">
                        Starring: {this.state.movie.Actors} <br/>
                        Director: {this.state.movie.Director}
                    </p>
                    <p className="hide">Awards: {this.state.movie.Awards}</p>
                    <p className="hide">Genre: {this.state.movie.Genre}</p>

                </div>
                <div className="col-3 col-sm-12 col-md-2 col-lg-3">
                    <p className="rating imdb"><a href={'https://www.imdb.com/title/' + this.props.mediaId} target="_new"><img src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg" alt="IMDb logo" /></a>{this.state.imdbscores.Value}</p>
                    <p className="rating rotten-tomatoes"><img src="https://vignette.wikia.nocookie.net/logopedia/images/9/9c/Rotten_Tomatoes_2.svg/revision/latest?cb=20160706062736" alt="Rotten Tomatoes logo" />{this.state.rtscores.Value}</p>
                    <p className="rating metacritic"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/2000px-Metacritic.svg.png" alt="Metacritic logo" />{this.state.mcscores.Value}</p>
                    <p className="limit hide">Writers: {this.state.movie.Writer}</p>
                </div>
            </div>
    );
  }
}

export default Movie;
