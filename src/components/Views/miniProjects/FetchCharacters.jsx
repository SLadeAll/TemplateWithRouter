import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import MediaCard from "./componentsApi/MediaCard";
import { Button } from "@material-ui/core";
function FetchCharacters() {
  // Declare a state variable to store the characters data
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState(false);
  const [prevPage, setPrevPage] = useState(false);
  const [api, setApi] = useState("https://rickandmortyapi.com/api/character/");

  // Declare a useEffect hook to fetch data from the API
  useEffect(() => {
    // Define an async function to fetch the data
    async function fetchData() {
      // Use the fetch API to get the data from the URL
      const response = await fetch(api);
      // Parse the JSON data from the response
      const data = await response.json();
      // Update the state variable with the data
      setNextPage(data.info.next);
      setPrevPage(data.info.prev);
      setCharacters(data.results);
    }
    // Call the async function
    fetchData();
  }, [api]); // Pass an empty array as the dependency list to run the effect only once

  // Return a JSX element to display the characters in a list
  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <Grid container spacing={2}>
        {characters.map((character) => (
          <Grid item xs={4}>
            <MediaCard data={character} />
          </Grid>
        ))}
      </Grid>
      <div className="buttons">
        <Button className="buttonStyled" variant="outlined" onClick={() => setApi(prevPage)}>
          Prev
        </Button>
        <Button className="buttonStyled" variant="outlined" onClick={() => setApi(nextPage)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default FetchCharacters;
