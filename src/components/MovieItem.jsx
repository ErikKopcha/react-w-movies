import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }

  render() {
    const { self, movie, removeMovie, removeMovieFromWillWatch, addMovieToWillWatch } = this.props;

    return (
      <div key={movie.id} className="card">
      <img 
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path || '/yOCRqvrRrxbs5FYq2pX1KtLJwmR.jpg'}`} 
        alt="card"/>
      <div className="card-body">
        <h6 className="card-title">{movie.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {movie.vote_average}</p>
          <button type="button" className={this.state.willWatch ? "btn btn-warning" : "btn btn-success"}
              onClick={() => {
                this.setState({
                  willWatch: this.state.willWatch ? false : true
                });

                this.state.willWatch ? removeMovieFromWillWatch(movie) : addMovieToWillWatch(movie)
              }}>
              
              {this.state.willWatch ? 'Remove Will watch' : 'Add Will watch'}
            </button>
        </div>
        <button
          type="button"
          className="btn btn-danger"
          disabled={this.state.willWatch ? true : false}
          onClick={removeMovie.bind(self, movie)}>
          Delete movie
        </button>
      </div>
    </div>
    );
  }
}

export default MovieItem;
