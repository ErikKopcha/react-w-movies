import React from "react";
import { moviesData } from "../moviesData";
import MovieItem from "./MovieItem";
import { API_URL, API_KEY_3 } from "../utils/api";
import MovieTabs from './MovieTabs';
import Pagination from './Pagination'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: moviesData,
      moviesWillWatch: [],
      sortBy: "revenue.desc",
      page: 1
    };
  }

  componentDidMount() {
    console.log('componentDidMount => ', );

    this.getFilmList();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate => ', );
    
    if (prevState.sortBy !== this.state.sortBy || prevState.page !== this.state.page) {
      console.log('componentDidUpdate => ', );

      this.getFilmList()
    }
  }

  componentDidUnmount() {
    console.log('componentDidUnmount => ', );
  }

  getFilmList() {
    console.log('getFilmList => ', this.state.sortBy);

    fetch(`${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sortBy}&page=${this.state.page}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({
        movies: data.results
      });
    })
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

  changePage(type) {
    if (type === 'prev') {
      let pageResult = this.state.page - 1;

      this.setState({
        page: pageResult
      });
    } else if (type === 'next') {
      let pageResult = this.state.page + 1;

      this.setState({
        page: pageResult
      });
    }
  }
 
  render() {
    console.log('render => ', );

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
            <Pagination _this={this} changePage={this.changePage} />
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
