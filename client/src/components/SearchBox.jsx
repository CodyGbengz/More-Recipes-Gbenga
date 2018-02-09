import React from 'react';
import { Link } from 'react-router';

const SearchBox = (props) => {
  const renderResults = searchResults => (
    searchResults.map((searchItem, index) => (
      <li key={index}>
        <div className="white search-list-row">
          <Link
          to={`recipes/${searchItem.id}`}>
            <div className="col s3 m3 l3">
              <img
                className="search-list-icon"
                src={searchItem.image_url}
                />
          </div>
          <div className="col s9 m9 l9">
                <p className="red-text"><b>{searchItem.title}</b></p>
              </div>
        </Link>
        </div>
      </li>
    ))
  );

  return (
    <div>
      <div className="search-row row">
        <div className="input-field col s7 m7 l7 offset-s2 offset-m2 offset-l2">
        <i className="material-icons white-text prefix">search</i>
          <input
            id="search"
            type="search"
            onChange={props.handleSearch}
            onBlur={props.resetResultsList}
            placeholder="Enter your search keyword here"
            />
            <ul className="results-list">
            {
            (props.searchResults !== undefined) &&
            renderResults(props.searchResults)
            }
            </ul>
        </div>
      </div>
    </div>
  );
};


export default SearchBox;
