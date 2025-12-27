const API_KEY = "53713087-2b0a12a22f0eae895a449346a";
const BASE_URL = "https://pixabay.com/api/";

let page = 1;

const gallery = document.getElementById("gallery");
const loadMoreBtn = document.getElementById("loadMore");

loadMoreBtn.addEventListener("click", onLoadMore);

function fetchImages() {
  const url = `${BASE_URL}?key=${API_KEY}&page=${page}&per_page=12`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      renderImages(data.hits);
    })
    .catch((error) => console.log(error));
}

function renderImages(images) {
  const markup = images
    .map((img) => {
      return `<img src="${img.webformatURL}" alt="${img.tags}">`;
    })
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);
}

function onLoadMore() {
  page += 1;
  fetchImages();
}

fetchImages();
