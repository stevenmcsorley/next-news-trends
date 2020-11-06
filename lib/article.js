import axios from "axios";

export const fetchArticle = async (articleId) =>
await axios
  .get(
    `https://content.guardianapis.com/${articleId}?show-related=true&show-most-viewed=true&show-fields=all&api-key=0d3ae253-e9ba-4bad-814e-69a9a5fda18e`
  )
  .then((res) => ({
    error: false,
    article: res.data.response,
  }))
  .catch(() => ({
    error: true,
    article: null,
  }));