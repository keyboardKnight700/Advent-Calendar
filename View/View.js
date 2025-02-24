import renderTimeUntilChristmas from "./renderTimeUntilChristmas.js";

export default class View {
  constructor() {}

  static iframe = document.querySelector(".calendar__santaFigure-iframe");

  static renderTimeUntilChristmas(timeValues) {
    return renderTimeUntilChristmas(timeValues);
  }
}
