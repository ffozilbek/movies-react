import React, { useEffect, useState } from "react";
import "./App.css";
import Movies from "./Movies";
import Filter from "./Filter";
import { motion } from "framer-motion";

function App() {
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchpopular();
  }, []);

  const fetchpopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=da801154158d43c27c54ba798c809d2d&language=en-US&page=1"
    );
    const movies = await data.json();
    setPopular(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="movies">
        {filtered.map((movie) => (
          <Movies key={movie.id} movie={movie} />
        ))}
      </motion.div>
    </div>
  );
}

export default App;
