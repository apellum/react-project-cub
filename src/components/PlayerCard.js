import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const PlayerCard = ({updatePlayers}) => {
    const [player, setPlayer] = useState(null)
    const params = useParams()

    useEffect(() => {
        fetch("http://localhost:3007/players/" + params.id)
        .then(resp => resp.json())
        .then(player => setPlayer(player))
    }, [])

    function decreaseLikes () {
        let playerLikesUpdate = player.likes - 1
        fetch("http://localhost:3007/players/" + params.id, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({likes: playerLikesUpdate})
        })
        .then(resp => resp.json())
        .then(player => {
            updatePlayers(player)
            setPlayer(player)
        })
    }

    function increaseLikes () {
        let playerLikesUpdate = player.likes + 1
        fetch("http://localhost:3007/players/" + params.id, {
        method: "PATCH", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }, 
        body: JSON.stringify({likes: playerLikesUpdate})
        })
        .then(resp => resp.json())
        .then(player => {
            updatePlayers(player)
            setPlayer(player)
        })
    }

    if (!player) return <h2>Loading....</h2>
    return (
        <div>
            <h2>{player.name}</h2>
            <h2>{player.position}</h2>
            <h2>{player.bio}</h2>
            <input type="button" value="👎" onClick={decreaseLikes}></input>
            <h3>{player.likes}</h3>
            <input type="button" value="👍" onClick={increaseLikes}></input>
        </div>
    )
}

export default PlayerCard
