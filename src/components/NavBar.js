import React from "react"
import { NavLink } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"

function NavBar ({ username }) {

    

    return (
        <>
        <nav>
            <NavLink to ="/home">{username ? "Logout" : "Login"}</NavLink>
            <NavLink to ="/players">Player Rankings</NavLink>
            <NavLink to ="/players/new">Add Prospect</NavLink>
        </nav>
        </>
    )
}

export default NavBar