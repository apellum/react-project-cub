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
        <h3 id="create-account-header">Create Account</h3>
        <form id="create-form" onSubmit={handleSubmit}>
            <label id="username-header">Username</label>
            <input id="username-input" value={formInput.username} type="text" required={true} onChange={event => setFormInput({username: event.target.value})}></input>
            <br></br>
            {/* <label>Create Account</label> */}
            <input id="create-submit" type="submit"></input>
        </form>
        </>
    )
}

export default CreateAccount