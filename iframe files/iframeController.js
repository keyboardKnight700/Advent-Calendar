import iframeView from "./iframeView/iframeView.js";
import iframeModel from "./iframeModel/iframeModel.js";

class iframeController {
  CONFIG = iframeView.CONFIG;
  state = {
    currentJoke: {
      question: "",
      answer: "",
    },
  };

  constructor() {
    iframeModel.validateDomElements(this.CONFIG);

    this.requestNextJokes();
    this.getJokesFromParent();
    this.changeJokeLanguage();
    this.handleLoadAndResize();
    this.handleLoadAndResize(
      iframeView.positionDomElement,
      iframeView.adjustFontSize
    );
  }

  requestNextJokes() {
    parent.window.addEventListener("load", () => {
      iframeView.requestJokes("nextJoke", (message) =>
        parent.postMessage(message, window.location.origin)
      );
    });
  }

  getJokesFromParent() {
    window.addEventListener("message", (e) => {
      this.state.currentJoke.question = e.data[0];
      this.state.currentJoke.answer = e.data[1];
      iframeView.speechBubbleMouseHandler(this.state.currentJoke);
    });
  }

  changeJokeLanguage() {
    parent.window.addEventListener("load", () => {
      iframeView.changeLanguageHandler(() =>
        parent.postMessage("changeJokeLanguage", window.location.origin)
      );
    });
  }

  handleLoadAndResize(...functions) {
    if (!functions.every((func) => typeof func === "function"))
      throw new Error("Only functions are allowed as parameters!");

    functions.forEach((func) => window.addEventListener("load", func));
    functions.forEach((func) => window.addEventListener("resize", func));
  }
}

const controller = new iframeController();
