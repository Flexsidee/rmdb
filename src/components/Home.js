import React from "react";
// import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config"; //import config
// import NoImage from "../images/no_image.jpg"; //import no-image

//components

//hooks
import { useHomeFetch } from "../hooks/useHomeFetch";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);

  return <div>Home Page</div>;
};

export default Home;
