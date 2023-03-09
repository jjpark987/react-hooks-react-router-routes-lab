import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => (
        <div key={actor + index}>
          <h3>{"Name: " + actor.name}</h3>
          <p>Movies: </p>
          <ul>
            {actor.movies.map((movie, movieIndex) => (
              <li key={movie + movieIndex}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Actors;
