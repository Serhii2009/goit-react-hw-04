import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";

async function getPictures(searchQuery, page) {
  const options = {
    params: {
      key: "YbMBHqmgNJ6wLYmOJydpjuFd-axIN6-ffYxAb3rKqOE",
      q: searchQuery,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: "true",
      page: page,
      per_page: 12,
    },
  };

  try {
    const response = await axios.get(BASE_URL, options);
    return response.data;
  } catch (error) {
    return "ERROR!";
  }
}

export default getPictures;
