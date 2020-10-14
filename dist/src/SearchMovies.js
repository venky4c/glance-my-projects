import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Album from "./components/Album";

//to create the SearchMovies component
//form with a class of form
//label with htmlFor="query" and a class of Label
//input of type text with a name of "query" and a placeholder
//button class of button and a type of submit

function SearchMovies() {
  const [inputQuery, setInputQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const url = `https://api.themoviedb.org/3/search/movie?api_key=5f8d663c01a14ea5aaeadf55b334948e&query=${inputQuery}&page=1&adult_content=false`;

  async function searchMovies(e) {
    e.preventDefault();
    console.log("submitting...");
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("movies...", data.results);

      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  }
  //  searchMovies();

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          id="query"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          placeholder="i.e. Jurassic Park"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      {
        <div className="card-list">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <Album
                title={movie.title}
                summary={movie.overview}
                path={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                rating={movie.vote_average}
                release_date={movie.release_date}
              />
            ))}
        </div>
      }
      {/* <Album title="movie title" path="movie poster path" /> */}
    </>
  );
}

export default SearchMovies;
