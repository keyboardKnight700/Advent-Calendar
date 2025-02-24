import { WITZE } from "../config.js";
import { CHRISTMAS_JOKES_URL } from "../config.js";
import { fetchUrl } from "../helperFunctions.js";

let defaultLanguage = "deutsch";

export default async function getChristmasJokes(
  language,
  changeLanguage = false
) {
  let question, answer;

  if (language === "english" || language === "deutsch")
    defaultLanguage = language;

  if (changeLanguage) {
    defaultLanguage = defaultLanguage === "english" ? "deutsch" : "english";
  }

  if (defaultLanguage === "deutsch") {
    try {
      const randomWitz = WITZE[Math.trunc(Math.random() * WITZE.length)];
      question = randomWitz.frage;
      answer = randomWitz.antwort;
    } catch (error) {
      question = `Santas Witzmaschine ist ausgefallen! Bald gibt's wieder Spaß!`;
      answer = `Santas Witzmaschine ist ausgefallen! Bald gibt's wieder Spaß!`;
    }
  }
  if (defaultLanguage === "english") {
    try {
      const data = await fetchUrl(CHRISTMAS_JOKES_URL);
      question = data.setup;
      answer = data.delivery;
    } catch (error) {
      //sending error message to be displayed in the speech bubble on the screen
      question = `Santa's joke machine is down! Check back soon for festive fun!`;
      answer = error.message;
    }
  }

  return [question, answer];
}
