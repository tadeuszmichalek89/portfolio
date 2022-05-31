const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector(".newQuoteBtn"),
authorName = document.querySelector(".author")


function randomQuote(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random").then(response => response.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.classList.remove("loading");
        quoteBtn.innerText = "New Quote";
    });
}




onload = randomQuote;
quoteBtn.addEventListener("click",randomQuote);
