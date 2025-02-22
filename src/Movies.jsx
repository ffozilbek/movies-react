import { easeIn, motion } from "framer-motion";

function Movies({ movie }) {
  return (
    <motion.div layout className="movie">
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ type: "ease", stiffness: 300 }}
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
      <h1>{movie.title}</h1>
    </motion.div>
  );
}

export default Movies;
