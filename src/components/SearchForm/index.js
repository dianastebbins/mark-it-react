import React from "react";
import "./style.css"

function SearchForm(props) {
  return (
    <div className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <div id="searchform" className="box">
            <div  className="field">
              <form>
                <div className="field">
                  <label className="label" htmlFor="search">Find Local Markets:</label>
                  <div className="control">
                    <input
                      onChange={props.handleInputChange}
                      value={props.value}
                      name="search"
                      type="text"
                      className="input"
                      placeholder="Enter Zip"
                      id="search"
                    />
                  </div>
                  <div className="field">
                    <div className="control">
                      <button type="submit" onClick={props.handleFormSubmit} className="button">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
