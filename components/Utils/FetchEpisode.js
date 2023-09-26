export const fetchEpisode = async (url) => {
  if (url !== "") {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      return "ooops";
    }
  }
};
