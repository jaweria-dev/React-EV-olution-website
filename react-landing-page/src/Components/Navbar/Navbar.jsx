import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = ({pageName}) => {
  let name = 'nav ' + pageName ;
  return (
    <div className={name}>
      <div className="nav-logo">EV-olution</div>
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li className='nav-contact'><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
