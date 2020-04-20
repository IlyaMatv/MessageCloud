import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    return (
        <div className={classes.dropdown}>
          <button className={classes.dropbtn}>choose day</button>
          <nav className={classes.navbar}>
            <NavLink to="/Monday" activeClassName={classes.active}>Monday</NavLink>
            <NavLink to="/Tuesday" activeClassName={classes.active}>Tuesday</NavLink>
          </nav>
        </div>
    )
}

export default Navbar