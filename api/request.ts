import { TOKEN } from "./appRequest";

async function fetchApiRequest(url: string) {
  try {
    const response = await fetch(process.env.EXPO_PUBLIC_API_URL + url, {
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
