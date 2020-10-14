import React from "react";
import Album from "./components/Album";
import Footer from "./components/Footer";
import Test from "./components/Test";
import SearchMovies from "./SearchMovies";

import "./styles.css";

// we are using  movie db api: https://themoviedb.org
function App() {
  return (
    <div className="container">
      <h1>Binge Watch</h1>
      <SearchMovies />
      <Footer />
    </div>
  );
}

export default App;
