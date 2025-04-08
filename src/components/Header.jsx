import { Link } from "react-router-dom"

export const Header = ()=>{
  return(
    <>
    <ul className="nav nav-style justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/vino">Vinos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about-us">About Us</Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="/contact">Contact</a>
      </li>
    </ul>
    </>
  )
}