import React, {Component} from "react";
import SearchForm from "../SearchForm";
import ResultList from "../ResultList";
import SavedArticles from "../SavedArticles";
import Navbar from "../Navbar";
import API from "../../utils/API";

class Wrapper extends Component {
  state = {
    
      topic: "",
      startYear: "",
      endYear: "",
    results: []
  };

  //methods, lots of methods
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticle(this.state.info);
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  saveArticle = event => {
    event.preventDefault();
    //push this to the database
  }

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
        {/* <Navbar /> */}
        <SearchForm
          topic={this.state.topic}
          startYear={this.state.startYear}
          endYear={this.state.endYear}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList
          results={this.state.results}
          handleClick={this.saveArticle}
        />
        {/* <SavedArticles /> */}
      </div>
    );
  }
}

export default Wrapper;