import axios from "axios";

export async function fetchArticle(articleId) {
  try {
    const response = await axios.get(
      `https://content.guardianapis.com/${articleId}?show-related=true&show-most-viewed=true&show-fields=all&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e`
    );
    return { error: false, article: response.data.response };
  } catch (error) {
    return {
      error: true,
      article: null,
    };
  }
}
