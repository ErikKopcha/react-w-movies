import React from "react";

class MovieItem extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false
    };
  }

  render() {
    const { self, movie, removeMovieFromWillWatch, addMovieToWillWatch } = this.props;

    return (
      <div key={movie.id} className="card">
      <img 
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path || movie.poster_path}`} 
        alt="card"/>
      <div className="card-body">
        <h6 className="card-title">{movie.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {movie.vote_average}</p>
          {this.state.willWatch ?
            <button
              type="button" 
              className="btn btn-warning"
              onClick={() => {
                this.setState({
                  willWatch: false
                });

                removeMovieFromWillWatch(movie)
              }}>
              Remove Will watch
            </button>
          :
            <button
              type="button" 
              className="btn btn-success"
              onClick={() => {
                this.setState({
                  willWatch: true
                });

                addMovieToWillWatch(movie)
              }}>
              Add Will watch
            </button>
          }
        </div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={removeMovieFromWillWatch.bind(self, movie)}>
          Delete movie
        </button>
      </div>
    </div>
    );
  }
}

export default MovieItem;
