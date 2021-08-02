import React from "react"
import { NavLink } from "react-router-dom"


function NavBar ({ username }) {   

    return (
        <>
        <nav className="navbar">
            <NavLink className="ranking-link" to ="/players">Player Rankings</NavLink>
            <NavLink className="add-form-link" to ="/players/new">Add Prospect</NavLink>
            <NavLink className="home-link" to ="/home">{username ? "Logout" : "Login"}</NavLink>
        </nav>
        </>
    )
}

export default NavBar