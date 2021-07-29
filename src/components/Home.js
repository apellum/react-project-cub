import React from 'react'
import CreateAccount from './CreateAccount'

const Home = ({ username, setUsername}) => {
    function logOut (username) {
        setUsername(null)
    }
    return (
        <div>
            {username ? <input type="button" value="Logout" onClick={logOut}></input> : <CreateAccount username={username} setUsername={setUsername}/>}
        </div>
    )
}

export default Home
