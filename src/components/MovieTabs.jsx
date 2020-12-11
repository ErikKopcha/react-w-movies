import React from "react";

const MovieTabs = (props) => {
  const { sortBy, updateSortBy } = props;

  // const handleClick = (value) => {
  //   return event => {
  //     updateSortBy(value);
  //   }
  // };

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

export default MovieTabs;