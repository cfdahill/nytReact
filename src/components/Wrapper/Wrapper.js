import React, {Component} from "react";
import SearchForm from "../SearchForm";
import ResultList1 from "../ResultList1";
import SavedArticles from "../SavedArticles";
import API from "../../utils/API";
import DB from "../../utils/DB";

class Wrapper extends Component {
  state = {
      topic: "",
      startYear: "",
      endYear: "",
    results: [],
    saved: []
  };

  //methods, lots of methods
  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    DB.getArticles()
    .then(res =>
      this.setState({saved: res.data}))
    .catch(err => console.log(err));
  };
  
  deleteArticle = id => {
    DB.deleteArticle(id)
    .then(res => this.loadArticles())
    .catch(err => console.log(err));
  };


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticle(this.state.info);
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // saveArticle = event => {
  //   event.preventDefault();
  //   DB.saveBook({
  //     title: this.state.title
  //   })
  //   //push this to the database, might need to move this to different component
  // }

  //most likely need a method to get articles from db

  searchArticle = () => {
    let query = {
      topic: this.state.topic,
      startYear: this.state.startYear,
      endYear: this.state.endYear
    }
    API.search(query)
      .then(res => {
        console.log(res.data.response.docs);
        this.setState({results: res.data.response.docs})
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h2>Search Database</h2>
        <SearchForm
          topic={this.state.topic}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <h2>Search Results</h2>
        <ResultList1
          results={this.state.results}
          handleClick={this.saveArticle}
        />
        <h2>Saved Articles</h2>
        <SavedArticles />
      </div>
    );
  }
}

export default Wrapper;