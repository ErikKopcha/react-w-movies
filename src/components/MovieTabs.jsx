import React from "react";

class MovieTabs extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.sortBy !== this.props.sortBy) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { sortBy, updateSortBy } = this.props;

    const getClassLink = (value) => {
      return `nav-link ${sortBy === value ? 'active' : ''}`
    }
  
    return (
      <ul className="tabs nav nav-pills mt-3">
        <li className="nav-item">
          <div 
            className={ getClassLink('popularity.desc') }
            onClick={ updateSortBy.bind(null, 'popularity.desc') }>
            Popularity desc
          </div>
        </li>
        <li className="nav-item">
          <div 
            className={ getClassLink('revenue.desc') }
            onClick={ updateSortBy.bind(null, 'revenue.desc') }>
            Revenue desc
          </div>
        </li>
        <li className="nav-item">
          <div 
            className={ getClassLink('vote_average.desc') }
            onClick={ updateSortBy.bind(null, 'vote_average.desc') }>
            Vote average desc
          </div>
        </li>
      </ul>
    );
  }
}

export default MovieTabs;