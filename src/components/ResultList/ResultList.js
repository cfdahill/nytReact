import React from "react";
import moment from "moment";

const ResultList = props => (
  <ul className="list-group">
    {props.results.map(result => (
      <a href={result.web_url} target="blank">
        <li className="list-group-ite" key={result._id}>
          <h2>{result.headline.main}</h2>
          <p>{moment(result.pub_date).format('MMMM Do, YYYY')}</p>
          <button 
            onClick={props.handleClick}
            id={result._id}
          >
            Save
          </button>
        </li>
      </a>
    ))}
  </ul>
);

export default ResultList;

// //Need to get the following from the API (use the following names:
//   title
//   id
//   date
//   url
// //Need to have the following props imported in:
//   API results (called results)
//   Save article onClick event (called handleClick)