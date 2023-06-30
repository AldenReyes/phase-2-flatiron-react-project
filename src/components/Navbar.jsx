import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"

export default function Navbar() {
  return (
    <Menu className="ui five item menu">
      <Menu.Item as={NavLink} to="/" name="Home"/>
      <Menu.Item as={NavLink} to="saved-deals" name="Saved Deals"/>
      <Menu.Item as={NavLink} to="About" name="About"/>
          <div className="menu ui icon input">
            <input type="text" placeholder="Search..."/>
            <i className="search link icon" />
          </div>
    </Menu>
  )
}
