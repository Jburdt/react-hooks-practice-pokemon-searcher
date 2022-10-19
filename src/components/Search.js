import React, { useState } from "react";

function Search({ search, setSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        type='text'
        id="search"
        onChange={(e) => {setSearch(e.target.value)}} 
        className="prompt"
        value={search}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
