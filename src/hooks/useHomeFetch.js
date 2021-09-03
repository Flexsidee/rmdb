import { useState, useEffect, useRef } from "react"; //import needed hooks
import API from "../API"; //import API

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
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

  return { state, loading, error };
};
