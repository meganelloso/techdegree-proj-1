let quotes = [
  {
  quote: "Trust yourself, you know more than you think you do.",
  source: "Benjamin Spock",
  year: 1997
},
{
  quote: "It is not enough to have a good mind; The main thing is to use it well.",
  source: "Rene Descartes"
},
{
  quote: "Le voyage du soleil et de la lune est prévisible, mais le vôtre est votre art suprême.",
  source: "Suzy Kassem",
  citation: "Rise Up and Salute the Sun: The Writings of Suzy Kassem"
},
{
  quote: "Be yourself; everyone else is already taken.",
  source: "Oscar Wilde"
},
{
  quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  source: "Albert Einstein"
},
];
//returns the whole object and its properties
function getRandomQuote() {
    let randomNum = Math.floor(Math.random() * 5);
    return quotes[randomNum];

}

function printQuote() {
  let randomNum = getRandomQuote();
  let html = '';
  html += '<p class="quote">' + randomNum.quote + '</p>';
  html += '<p class="source">' + randomNum.source;

  if(randomNum.hasOwnProperty('citation')) {
    html += '<span class="citation">' + randomNum.citation + '</span>';
  }

  if(randomNum.hasOwnProperty('year')) {
  html += '<span class="year">' + randomNum.year + '</span></p>';
  }

  let getId = document.getElementById('quote-box');
  getId.innerHTML = html;

  let changeColor = document.getElementById('body-change');
  changeColor.style.backgroundColor = randomBackgroundColor();
}

function randomBackgroundColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  return "rgb(" + red + "," + green + "," + blue + ")";
}

document.getElementById('load-quote').addEventListener("click", printQuote, false);