import React from 'react'
import { NavLink } from 'react-router-dom'
const SidebarMenu = () => {
    return (
        <ul>
            <li>
                <NavLink NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home </NavLink>
            </li>
            <li>
                <NavLink NavLink to="/create-course" className={({ isActive }) => (isActive ? "active" : "")}>Create Course</NavLink>
            </li>
        </ul>
    )
}

export default SidebarMenu