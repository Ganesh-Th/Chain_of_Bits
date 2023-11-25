// Importing necessary hooks from React
import { useEffect, useState } from "react";

// API key for Giphy obtained from environment variables
const APIKEY = import.meta.env.VITE_GIPHY_API;

// Custom hook for fetching Giphy GIFs based on a keyword
const useFetch = ({ keyword }) => {
  // State variable to store the fetched GIF URL
  const [gifUrl, setGifUrl] = useState("");

  // Function to fetch GIFs from the Giphy API based on the provided keyword
  const fetchGifs = async () => {
    try {
      // Making a request to the Giphy API using the provided API key and keyword
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(" ").join("")}&limit=1`);
      
      // Extracting data from the API response
      const { data } = await response.json();

      // Setting the GIF URL in the state based on the API response
      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      // Handling errors by setting a default GIF URL if the request fails
      setGifUrl("https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284");
    }
  };

  // useEffect hook to trigger the fetchGifs function when the keyword changes
  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  // Returning the fetched GIF URL
  return gifUrl;
};

// Exporting the useFetch custom hook for use in other components
export default useFetch;
