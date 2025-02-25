import CONFIG from "../iframeConfig.js";
import requestJokes from "./requestJokes.js";
import adjustFontSize from "./adjustFontSize.js";
import positionDomElement from "./positionDomElement.js";
import speechBubbleMouseHandler from "./speechBubbleMouseHandler.js";

export default class iframeView {
  static CONFIG = CONFIG;
  static adjustFontSize = () => adjustFontSize(this.CONFIG);

  static requestJokes = (message, messageHandler) =>
    requestJokes(CONFIG, message, messageHandler);

  static speechBubbleMouseHandler = (currentJoke) =>
    speechBubbleMouseHandler(this.CONFIG, currentJoke);

  static changeLanguageHandler(handler) {
    this.CONFIG.DOM_ELEMENS.changeLanguageBtn.addEventListener(
      "click",
      handler
    );
  }

  static positionDomElement() {
    //positoning for the text of speech bubble
    positionDomElement(
      CONFIG.DOM_ELEMENS.speechBubble,
      CONFIG.DOM_ELEMENS.speechBubbleText,
      CONFIG.PLACEMENT.SPEECH_BUBBLE.widthInPercent,
      CONFIG.PLACEMENT.SPEECH_BUBBLE.heightInPercent,
      CONFIG.PLACEMENT.SPEECH_BUBBLE.paddingLeft,
      CONFIG.PLACEMENT.SPEECH_BUBBLE.paddingTop
    );

    //positoning of the jextJokeBtn
    positionDomElement(
      CONFIG.DOM_ELEMENS.giftbox,
      CONFIG.DOM_ELEMENS.nextJokeBtn,
      CONFIG.PLACEMENT.NEXT_JOKE_BTN.widthInPercent,
      CONFIG.PLACEMENT.NEXT_JOKE_BTN.heightInPercent,
      CONFIG.PLACEMENT.NEXT_JOKE_BTN.paddingLeft,
      CONFIG.PLACEMENT.NEXT_JOKE_BTN.paddingTop
    );

    //positoning of the changeLanguageBtn
    positionDomElement(
      CONFIG.DOM_ELEMENS.hatCircle,
      CONFIG.DOM_ELEMENS.changeLanguageBtn,
      CONFIG.PLACEMENT.CHANGE_LANGUAGE_BTN.widthInPercent,
      CONFIG.PLACEMENT.CHANGE_LANGUAGE_BTN.heightInPercent,
      CONFIG.PLACEMENT.CHANGE_LANGUAGE_BTN.paddingLeft,
      CONFIG.PLACEMENT.CHANGE_LANGUAGE_BTN.paddingTop
    );
  }
}
