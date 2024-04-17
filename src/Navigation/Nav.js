import { HeartIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/16/solid";
import "./Nav.css"

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter Your Search Shoes."
          className="search-input"
        />
      </div>
      <div className="profile-container">
        <a href="#link"   >
          <HeartIcon className="nav-icons"/>
        </a>
        <a href="#link">
          <ShoppingCartIcon className="nav-icons"/>
        </a>
        <a href="#link">
          <UserIcon className="nav-icons"/>
        </a>
      </div>
    </nav>
  )
}

export default Nav
