import { Link } from "react-router-dom"

const Header = ()=>{
  return(
    <>
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">Active</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to='/vinos'>Vinos</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/">Link</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled">Disabled</Link>
      </li>
    </ul>
    </>
  )
}

export default Header;