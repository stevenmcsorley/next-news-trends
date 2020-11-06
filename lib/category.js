import axios from "axios";

export async function fetchCategory() {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/search?order-by=newest&show-fields=all&section=world&q=World%20news&page-size=48&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e"`
    );
    return { error: false,data: response.data.response};
  } catch (error) {
    return {
      error: true,
      data: null,
    };
  }
}