import React, { useState, useEffect } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import PlayerList from "./PlayerList"
import NavBar from "./NavBar"
import AddPlayerForm from "./AddPlayerForm"
import PlayerCard from "./PlayerCard"
import Home from "./Home"

function App() {
  const [username, setUsername] = useState("")
  const [players, setPlayers] = useState([])

  const [formInput, setFormInput] = useState({
    name: "",
    position: "",
    bio: "",
    likes: 0
})

  useEffect(() => {
    fetch("http://localhost:3007/players")
    .then(resp => resp.json())
    .then(playersDb => setPlayers(playersDb))
  }, [])

  function updatePlayers (updatedPlayer) {
    const newPlayerList = players.map(player => {
      if (player.id === updatedPlayer.id) {
        return {...updatedPlayer}
      } else {
        return player
      }
    })
    setPlayers(newPlayerList)
  }


  return (
    <div className="App">
      <BrowserRouter>
      <NavBar username={username}/>
      <h1 id="welcome-header">{username ? "Welcome to Cubs Liker " + username.username + "!": "Welcome to Cubs Liker!"}</h1>
      <h2 id="h2">The number one spot for ranking Cubs prospects</h2>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home"/>
        </Route>
        <Route path="/home">
          <Home username={username} setUsername={setUsername}/>
        </Route>
        <Route path="/players/new">
          <AddPlayerForm />
        </Route>
        <Route exact path="/players">
          <PlayerList updatePlayers={updatePlayers} players={players} formInput={formInput} setFormInput={setFormInput}/>
        </Route>
        <Route exact path="/players/:id">
          <PlayerCard updatePlayers={updatePlayers}/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
