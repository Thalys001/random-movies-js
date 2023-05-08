import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const changeMovie = document.querySelector("#change-movie");
changeMovie.addEventListener("click", getMovie);

function getMovie() {
  const id = Math.floor(Math.random() * 1000) + 1;

  const url = `${BASE_URL}${id}?${API_KEY}&${language}`;
}
