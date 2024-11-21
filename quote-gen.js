let quoteElement = document.getElementById("quote");
let authorElement = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://quoteslate.vercel.app/api/quotes/random";

function callAPI() {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      const quote = json.quote;
      const author = json.author;

      quoteElement.innerHTML = `"${quote}"`;
      authorElement.innerHTML = `- ${author}`;
    })
    .catch(error => {
      quoteElement.innerHTML = "Failed to fetch quote. Please try again.";
      authorElement.innerHTML = "";
      console.error("Error fetching quote:", error);
    });
}

window.addEventListener("load", callAPI);
btn.addEventListener("click", callAPI);
