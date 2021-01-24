import { NavLink } from "react-router-dom";

export const Navbar = () => (
   <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
      <div className="navbar-brand">
         NoteApp
      </div>

      <div className="collapse navbar-collapse ml-4" id="navbarNavAltMarkup">
         <div className="navbar-nav">
            <NavLink 
               className="nav-item nav-link" 
               to="/"
               exact
            >
               Home
            </NavLink>

            <NavLink 
               className="nav-item nav-link" 
               to="/about"
            >
               About
            </NavLink>
         </div>
      </div>
   </nav>
)