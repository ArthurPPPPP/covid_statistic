import React, { useEffect, useState } from "react";

export const Search = ({ getValue, searchValue }) => {
  return (
    <form className="searching-form">
      <input
        value={searchValue}
        type="text"
        placeholder="Type something to start search"
        onChange={(e) => getValue(e.target.value)}
      ></input>
      <button>
        <span>x</span>
      </button>
    </form>
  );
};
