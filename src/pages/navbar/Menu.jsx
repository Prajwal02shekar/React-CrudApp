import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { AuthContextApi } from './../../context/AuthContext';

const Menu = () => {
  let { isAuth, Logout } = useContext(AuthContextApi);
  console.log(isAuth, "Menu")

  const IsAuth = () => {
    return (
      <Fragment>
        <li>
          <button className='logout-btn' onClick={() => Logout()}>
            logout
          </button>
        </li>
      </Fragment>
    )
  }
  const IsAnonymousUser = () => {
    return (
      <Fragment>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>Login </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? "active" : "")}>Register </NavLink>
        </li>
      </Fragment>
    )
  }
  return (
    <section className="navbar">
      <article>
        <nav>
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home </NavLink>
            </li>
            {
              isAuth === undefined || null ? <IsAnonymousUser /> : <IsAuth />
            }
          </ul>
        </nav>
      </article>
    </section>
  )
}

export default Menu
