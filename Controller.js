console.log(Math.trunc(Math.random() * 20));

/***********************  Imported stuff from Model.js ***********************/
import Model from "./Model/Model.js";
/***********************  Imported stuff from View.js ***********************/
import View from "./View/View.js";

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

class Controller {
  constructor() {
    // interval for Christmas timer
    this.intervalForChristmasTimer();
    // background animation
    Model.backgroundAnimation();
    // send jokes to the iframe
    this.sendJokesToSantaFigure();
    // receives messages from the iframe
    this.iframeListener();
  }

  intervalForChristmasTimer() {
    setInterval(() => {
      Model.UpdateTimeUntilChristmas();
      View.renderTimeUntilChristmas(Model.state.timeUntilChristmas);
    }, 1000);
  }

  async sendJokesToSantaFigure(language, changeLanguage) {
    try {
      const joke = await Model.getChristmasJokes(language, changeLanguage);

      if (
        View.iframe.contentDocument &&
        View.iframe.contentDocument.readyState === "complete"
      ) {
        View.iframe.contentWindow.postMessage(joke, window.location.origin);
      }

      View.iframe.addEventListener("load", () => {
        View.iframe.contentWindow.postMessage(joke, window.location.origin);
      });
    } catch (error) {
      throw error;
    }
  }

  iframeListener() {
    window.addEventListener("message", (e) => {
      if (e.origin === window.location.origin) {
        if (e.data === "nextJoke") this.sendJokesToSantaFigure();
        if (e.data === "changeJokeLanguage")
          this.sendJokesToSantaFigure("", true);
      }
    });
  }
}

const controller = new Controller();
