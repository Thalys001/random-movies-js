import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

const changeMovie = document.querySelector("#change-movie");
changeMovie.addEventListener("click", getMovie);

function getMovie() {
  const id = Math.floor(Math.random() * 1000) + 1;

  const url = `${BASE_URL}${id}?${API_KEY}&${language}`;

  axios
    .get(url)
    .then((response) => {
      const data = response.data;
      console.log(data, "<data>");
      const film = document.querySelector("#film");

      film.innerHTML = `
    <div class="image-container">
      <h2 class="title-movie">${data.title}</h2>
      <img class="banner-movie" src="${IMG_URL + data.poster_path}" />
      <div class="overlay">
        <p class="overview-movie">${data.overview}</p>
      </div>
    </div>
      `;
    })
    .catch((error) => {
      const film = document.querySelector("#film");
      film.innerHTML = `
      <div id='error'>
      <h2>Erro ao carregar filme :(</h2>
      </div>
      `;
    });
}
