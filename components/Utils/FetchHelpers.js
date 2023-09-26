import axios from "axios";

export const fetchInfo = async () => {
  const characters = await axios.get(
    "https://rickandmortyapi.com/api/character"
  );
  const locations = await axios.get("https://rickandmortyapi.com/api/location");
  const episodes = await axios.get("https://rickandmortyapi.com/api/episode");

  return {
    characters: characters.data.info.count,
    locations: locations.data.info.count,
    episodes: episodes.data.info.count,
  };
};
