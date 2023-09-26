import axios from "axios";

export const fetchCharecters = async () => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${randomPage()}`
  );
  return response.json();
};

export const fetchPage = async (number) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/?page=${number}`
  );

  const { info, results } = await response.json();

  return { info, results };
};

export const fetchPageWithAxios = async (searchParams) => {
  try {
    const response = await axios.get(
      "https://rickandmortyapi.com/api/character",
      {
        params: {
          ...searchParams,
        },
      }
    );
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

const randomPage = () => {
  return Math.floor(Math.random() * (42 - 1) + 1);
};
