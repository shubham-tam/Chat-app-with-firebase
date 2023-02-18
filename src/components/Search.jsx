import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="search__form">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="search__userChat">
        <img
          src="https://images.pexels.com/photos/15579683/pexels-photo-15579683.jpeg"
          alt=""
        />
        <div className="search__userChat-info">
          <span>Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
