import React from 'react'
import { NavLink } from 'react-router-dom'
import { useContext, Fragment } from 'react';
import { AuthContextApi } from './../../context/AuthContext';
const SidebarMenu = () => {
    let { isAuth } = useContext(AuthContextApi);

    const IsAuth = () => {
        return (
            <Fragment>
                <li>
                    <NavLink NavLink to="/create-course" className={({ isActive }) => (isActive ? "active" : "")}>Create Course</NavLink>
                </li>
                <li>
                    <NavLink NavLink to="/users" className={({ isActive }) => (isActive ? "active" : "")}>Users</NavLink>
                </li>
            </Fragment>
        )
    }
    return (
        <ul>
            <li>
                <NavLink NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home </NavLink>
            </li>
            {
                isAuth? <IsAuth/> :""
            }
        </ul>
    )
}

export default SidebarMenu