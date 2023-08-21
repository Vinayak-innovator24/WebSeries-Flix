import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/movies/")
      .then(response => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch(error =>
        console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="container-fluid p-5">
      <h1 style={{ textAlign: 'center' }}>Chill here</h1>
        <div className="row">
          {movies.map(movie => (
            <Card key={movie._id} movie={movie} />
          ))}
        </div>
      </div>
  );
};

export default App;
