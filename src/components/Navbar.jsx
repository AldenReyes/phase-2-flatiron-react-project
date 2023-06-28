import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"

export default function Navbar() {
  return (
    <Menu className="ui huge three item menu">
      <Menu.Item as={NavLink} to="/" name="home"/>
      <Menu.Item as={NavLink} to="About" name="About"/>
      <Menu.Item as={NavLink} to="About2" name="About2"/>
    </Menu>
  )
}
