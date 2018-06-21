import React from "react";

const SearchForm = props => (
  <form>
    <div className="form-group">
      <label htmlFor="search">Topic:</label>
      <input
        onChange={props.handleInputChange}
        value={props.topic}
        name="topic"
        type="text"
        className="form-control"
        placeholder="Topic"
        id="topic"
      />
      <label htmlFor="search">Start Year:</label>
      <input
        onChange={props.handleInputChange}
        value={props.startYear}
        name="startYear"
        type="text"
        className="form-control"
        placeholder="Earliest year for searching"
        id="startYear"
      />
      <label htmlFor="search">End Year:</label>
      <input
        onChange={props.handleInputChange}
        value={props.endYear}
        name="endYear"
        type="text"
        className="form-control"
        placeholder="Latest year for searching"
        id="endYear"
      />
      <button 
        onClick={props.handleFormSubmit}
        className = "btn btn-primary mt-3"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;

// //Need to import the following information:
//   topic
//   startYear
//   endYear
//   handleFormSubmit (button click)
//   handleFormChange (textboxes)