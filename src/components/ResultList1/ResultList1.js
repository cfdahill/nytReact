import React, {Component} from "react";
import moment from "moment";
import DB from "../../utils/DB";

class ResultList1 extends Component {
  state = {
    _id: "",
    title: "",
    url: "",
    date: ""
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      _id: result._id,
      title: result.headline.main,
      url: result.web_url,
      date:result.pub_date
    })
    DB.saveBook({
     
    })
  };

  render() {
    return(
  <ul className="list-group">
    {props.results.map(result => (
      <a href={result.web_url} target="blank">
        <li className="list-group-ite" key={result._id}>
          <h2>{result.headline.main}</h2>
          <p>{moment(result.pub_date).format('MMMM Do, YYYY')}</p>
          <button 
            onClick={this.handleClick}
            id={result._id}
          >
            Save
          </button>
        </li>
      </a>
    ))}
  </ul>
)};
}

export default ResultList1;

// //Need to get the following from the API (use the following names:
//   title
//   id
//   date
//   url
// //Need to have the following props imported in:
//   API results (called results)
//   Save article onClick event (called handleClick)