import axios from "axios";

async function fetcher(url) {
  try {
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    return response.data;
  } catch (error) {
    throw new Error("An error occurred while fetching data");
  }
}

export default fetcher;
