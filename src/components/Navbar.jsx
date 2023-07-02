import { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);
  let navigate = useNavigate();

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }
  function handleSearchSubmit(e) {
    if (e.type === "click" || e.key === "Enter") {
      const searchValue = searchRef.current.value;
      navigate(`/results?query=${searchValue}`);
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
            placeholder="Game Search..."
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
