import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" >
        Home
      </NavLink>
      <NavLink to="About">
        About
      </NavLink>
      <NavLink to="About2">
        About2
      </NavLink>
    </nav>
  )
}
