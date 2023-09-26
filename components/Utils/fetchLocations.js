import axios from "axios";

export const fetchLocationsWithAxios = async (searchParams) => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/location",
      {
        params: {
          ...searchParams,
        },
      }
    );

    let allLocations = response.data.results;
    let next = response.data.info.next;
    while (next !== null) {
      const newResponse = await axios.get(next);
      allLocations = allLocations.concat(newResponse.data.results);
      next = newResponse.data.info.next;
    }

    return allLocations;
  } catch (error) {
    console.log(error.message);
  }
};
