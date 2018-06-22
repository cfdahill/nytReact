import React from "react";
import moment from "moment";

const SavedArticles = props => (
  <ul className="list-group">
    {props.saved.map(result => (
      <a href={result.web_url} target="blank">
        <li className="list-group-ite" key={result._id}>
          <h2>{result.headline.main}</h2>
          <p>{moment(result.pub_date).format('MMMM Do, YYYY')}</p>
          <button 
            onClick={props.handleClick}
            id={result._id}
          >
            Delete
          </button>
        </li>
      </a>
    ))}
  </ul>
);

export default SavedArticles;
