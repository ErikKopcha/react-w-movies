import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../utils/api";
import MovieTabs from './MovieTabs';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
      sortBy: "revenue.desc"
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&${this.state.sortBy}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        movies: data.results
      });
    })
  }

  componentDidUpdate() {

  }

  componentDidUnmount() {

  }

  addMovieToWillWatch = (movie) =>  {
    const updateWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateWillWatch,
    });
  }

  removeMovieFromWillWatch = (movie) => {
    const updateWillWatch = this.state.moviesWillWatch.filter((item) => {
      return item.id !== movie.id;
    });

    this.setState({
      moviesWillWatch: updateWillWatch,
    });
  }

  removeMovie(movie) {
    const updateMovies = this.state.movies.filter((item) => {
      return item.id !== movie.id;
    });

    this.setState({
      movies: updateMovies
    });
  }

  updateSortBy = (value) => {
    this.setState({
      sortBy: value
    });
  }
 
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="row">
              <div className="col-12">
                <MovieTabs 
                  sortBy={this.state.sortBy} 
                  updateSortBy={this.updateSortBy} />
              </div>
            </div>
            <div className="row">
              {this.state.movies.map((movie) => {
                return (
                  <div className="col-6 mt-3">
                    <MovieItem
                      key={movie.id}
                      movie={movie}
                      removeMovie={this.removeMovie}
                      removeMovieFromWillWatch={this.removeMovieFromWillWatch}
                      addMovieToWillWatch={this.addMovieToWillWatch}
                      self={this}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-3 mt-3 position-sticky-top">
            <h4>Will Watch: {this.state.moviesWillWatch.length} movies</h4>
            <ul className="list-group">
              {this.state.moviesWillWatch.map(movie => (
                <li key={movie.id} className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <p>{movie.title}</p>
                    <p>{movie.vote_average}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
