import getTimeUntilChristmas from "./getTimeUntilChristmas.js";
import backgroundAnimation from "./backgroundAnimation.js";
import getChristmasJokes from "./getChristmasJokes.js";

export default class Model {
  static state = {
    timeUntilChristmas: getTimeUntilChristmas(),
  };

  static UpdateTimeUntilChristmas() {
    Model.state.timeUntilChristmas = getTimeUntilChristmas();
  }

  static backgroundAnimation = backgroundAnimation;
  static getChristmasJokes = getChristmasJokes;
}
