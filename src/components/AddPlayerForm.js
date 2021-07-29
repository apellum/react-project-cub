import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

const AddPlayerForm = () => {
    const [formInput, setFormInput] = useState({
        name: "",
        position: "",
        bio: "",
        likes: 0
    })

    function handleChange (event) {
        const key = event.target.name
        const value = event.target.value
        setFormInput({
            // Take everything in formInput and change the new player :key
            ...formInput,
           [key]: value 
        })
    }

    const history = useHistory()
    

    function handleSubmit (event) {
        event.preventDefault()
        
        fetch("http://localhost:3007/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formInput)
        })
        .then(resp => resp.json())
        .then(data => {

            //take a look here
            history.push(`/players/${data.id}`)
        })

        

        setFormInput({
            name: "",
            position: "",
            bio: "",
            likes: 0
        })

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" value={formInput.name} type="text" placeholder="name" onChange={handleChange}></input>
                <input name="position" value={formInput.position} type="text" placeholder="position" onChange={handleChange}></input>
                <input name="bio" value={formInput.bio} type="text" placeholder="bio" onChange={handleChange}></input>
                <input type="submit" value="Add Player"></input>
            </form>
        </div>
    )
}

export default AddPlayerForm