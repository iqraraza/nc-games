import axios from "axios";

const reviewsApi = axios.create({
  baseURL: "https://backend-nc-games.herokuapp.com/api",
});

export const getReviews = async () => {
  const { data } = await reviewsApi.get("/reviews");
  console.log(data);
  return data.reviews;
};

export const getCategories = async () => {
  const { data } = await reviewsApi.get("/categories");
  console.log(data);
  return data.categories;
};
