import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author); // create a random quote
  }

  static getRandomQuoteViaAPI() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    const options = { headers: { "Content-Type": "application/json" } };
    return fetch(url, options)
      .then((responce) => responce.json())
      .then(({ id, quote: text, author }) => new Quote(id, text, author))
      .catch((error) => console.error(error));
  }
}

export default RandomQuote;
