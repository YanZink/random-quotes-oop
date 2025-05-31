import RandomQuote from "./RandomQuote.js";

class RandomQuotesApp {
  constructor() {
    this.randomquoteBtn = document.getElementById("random-quote-btn");
    this.quoteTextElement = document.getElementById("quote-text");
    this.quoteAuthorElement = document.getElementById("quote-author");
    this.currentQuote = null;
    this.init();
  }
  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText(); // Quote class method
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor(); // Quote class method
  }
  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote(); //RandomQuote.getRandomQuote() - private class method
    this.currentQuote = randomQuote;
    this.displayCurrentQuote();
  }
  init() {
    this.randomquoteBtn.addEventListener("click", () => this.getRandomQuote());
  }
}

export default RandomQuotesApp;
