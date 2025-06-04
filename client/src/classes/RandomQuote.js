import quotes from "../data/quotes.js";
import MathUtils from "../utils/MathUtils.js";
import Quote from "./Quote.js";

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author); // create a random quote
  }

  static async getRandomQuoteViaPublicAPI() {
    const url = "https://quoteslate.vercel.app/api/quotes/random";
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      const responce = await fetch(url, options);
      const { id, quote: text, author } = await responce.json();
      if (id && text && author) {
        return new Quote(id, text, author);
      }
    } catch (error) {
      console.error(error); // return undefined implicitle (resolves promise to undefined)
    }
  }
  static async getRandomQuoteViaOwnAPI() {
    const url = "http://localhost:3000/quotes/random-single";
    const options = { headers: { "Content-Type": "application/json" } };
    try {
      const responce = await fetch(url, options);
      const { id, text, author } = await responce.json();
      if (id && text && author) {
        return new Quote(id, text, author);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
