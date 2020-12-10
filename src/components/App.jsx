import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";

export class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      movies: moviesData,
      moviesWillWatch: []
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mt-3">
                    <MovieItem
                      key={movie.id}
                      movie={movie}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      self={this}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3 mt-3">
            <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          </div>
        </div>
      </div>
    );
  }

  addMovieToWillWatch = (movie) =>  {
    // const updateWillWatch = [...this.state.moviesWillWatch];
    // updateWillWatch.push(movie);

    const updateWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateWillWatch,
    });
  }

  removeMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  }

  removeMovie(movie) {
    const updateMovies = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });

    this.setState({
      movies: updateMovies,
    });
  }
}
