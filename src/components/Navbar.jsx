import { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  function handleSearchChange(e) {
    setSearch(e.target.value);
  }
  function handleSearchSubmit(e) {
    if (e.type === "click" || e.key === "Enter") {
      console.log(searchRef.current.value);
    }
  }
  return (
    <Menu className="ui five item menu">
      <Menu.Item as={NavLink} to="/" name="Home" />
      <Menu.Item as={NavLink} to="saved-deals" name="Saved Deals" />
      <Menu.Item as={NavLink} to="About" name="About" />
      <div className="right menu">
        <div className="ui aligned right icon input ">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            ref={searchRef}
            onChange={handleSearchChange}
            onKeyDown={handleSearchSubmit}
          />
          <i className="search link icon" onClick={handleSearchSubmit} />
        </div>
      </div>
    </Menu>
  );
}
