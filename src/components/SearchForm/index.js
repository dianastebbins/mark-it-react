import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="field">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="input"
          placeholder="Enter Zip"
          id="search"
        />
        <br />
        <button onClick={props.handleFormSubmit} className="button">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
