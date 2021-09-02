import React, { useState, useEffect } from "react";

//API
import API from "../API";

//import config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";

//components

//hooks

//image
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const [state, setState] = useState();
  const [loading, setloading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setloading(true);

      const movies = await API.fetchMovies(searchTerm, page);

      setState((prev) => ({
        ...movies,
        results: page > 1 ? [...prev.results, ...movies] : [...movies],
      }));
    } catch (error) {
      setError(true);
    }

    setloading(false);
  };

  //initial render
  useEffect(() => {
    fetchMovies(1);
  }, []);

  console.log(state);

  return <div>Home Page</div>;
};

export default Home;
