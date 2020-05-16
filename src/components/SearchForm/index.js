import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="field">
        <label className="label" htmlFor="search">Find Local Markets:</label>
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
