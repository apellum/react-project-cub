
import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'

const PlayerList = ({ players, updatePlayers }) => {

    function decreaseLikes (player) {
        let playerLikesUpdate = player.likes - 1
        fetch("http://localhost:3007/players/" + player.id, {
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
        })
    
    }

    function increaseLikes (player) {
        let playerLikesUpdate = player.likes + 1
        fetch("http://localhost:3007/players/" + player.id, {
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
        })
    }
 
    const match = useRouteMatch()
    let sortedRanks = players.sort((a, b) => {
        return a.likes - b.likes
    }).reverse()
    const playerArray = sortedRanks.map(player =>
        <li key={player.id} >
        <Link to={match.url + "/" + player.id} >{player.name} </Link>
            <button id="list-unlike-button" onClick={() => decreaseLikes(player)}>👎</button>
            {player.likes}
            <button id="list-like-button" onClick={() => increaseLikes(player)}>👍</button>
        </li>)

            
    return (
        <div class="player-list">
            <ol class="player-list">
                {playerArray}
            </ol>
        </div>
    )
}

export default PlayerList