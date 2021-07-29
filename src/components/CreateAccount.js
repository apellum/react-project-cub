import React, { useState } from "react"


function CreateAccount ({ username, setUsername }) {

    const [formInput, setFormInput] = useState([]);

    function addUser (user) {
        setUsername(user)
      }

    function handleSubmit (event) {
        event.preventDefault()
        
        addUser(formInput)
    }
    
    return (
        <>
        <h3>Create Account</h3>
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input value={formInput.username} type="text" required={true} onChange={event => setFormInput({username: event.target.value})}></input>
            <br></br>
            <label>Create Account</label>
            <input type="submit"></input>
        </form>
        </>
    )
}

export default CreateAccount