const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://api.quotable.io/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}
getQuote(api_url);

function tweetQuote() {
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerText} + ---- By - ${author.innerText}` , "Tweet window" , "width=500, height=300") ;
}