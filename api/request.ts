import { TOKEN } from "./appRequest";

async function fetchApiRequest(url: string) {
  try {
    const response = await fetch("https://api.themoviedb.org/3/movie/" + url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + TOKEN,
      },
    });

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export default fetchApiRequest;
