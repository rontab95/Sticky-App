import React from "react";

const Header = (props) => {
  const callSearch = (e) => {
    props.onSearch(e.target.value);
  };
  return (
    <header>
     <div class ="header-title"> <h1 >Super Sticky Notes</h1></div>
      <aside >
        <div class="a_side">
        <button className="add-new" onClick={props.addNote}>
          + New Note
        </button>
        <input
          className="search"
          type="text"
          placeholder="Type here to search..."
          value={props.searchText}
          onChange={callSearch}
        />
        </div>
      </aside>
    </header>
  );
};

export default Header;
