const CONFIG = {
  DOM_ELEMENS: {
    speechBubble: document.querySelector(".speechBubble"),
    speechBubbleText: document.querySelector(".speechBubbleText"),
    nextJokeBtn: document.querySelector(".nextJokeContainer"),
    nextJokeBtnSound: document.querySelector(".nextJokeBtnSound"),
    changeLanguageBtn: document.querySelector(".changeLanguageContainer"),
    container: document.querySelector(".gift"),
    giftbox: document.querySelector(".gift"),
    giftboxRibbon: document.querySelector(".ribbon"),
    giftboxMoon: document.querySelector(".moon"),
    giftboxStars: document.querySelectorAll(".giftStar"),
    hatStars: document.querySelectorAll(".hatStar"),
    hatCircle: document.querySelector(".hatCircle"),
    hatAndBeard: document.querySelector(".hatAndBeard"),
    eyes: document.querySelectorAll(".eye"),
    pupils: document.querySelectorAll(".pupil"),
    nose: document.querySelector(".nose"),
    mouth: document.querySelector(".mouth"),
    tongue: document.querySelector(".tongue"),
    hands: document.querySelectorAll(".hand"),
    shoes: document.querySelectorAll(".shoe"),
    shirtAndTrousers: document.querySelector(".shirtAndTrousers"),
  },
  COLORS: {
    GIFT_BOX: {
      moon_default: "#FFD700",
      moon_active: "yellow",
      stars_default: "#4169E1",
      stars_active: "yellow",
    },
  },
  PLACEMENT: {
    SPEECH_BUBBLE: {
      widthInPercent: 0.8,
      heightInPercent: 0.7,
      paddingLeft: 0.1,
      paddingTop: 0.05,
    },
    NEXT_JOKE_BTN: {
      widthInPercent: 0.9,
      heightInPercent: 0.85,
      paddingLeft: 0.05,
      paddingTop: 0.15,
    },
    CHANGE_LANGUAGE_BTN: {
      widthInPercent: 1,
      heightInPercent: 1,
      paddingLeft: 0.0,
      paddingTop: 0.0,
    },
  },
  TEXT: {
    SPEECH_BUBBLE_TEXT: {
      startFontSize: 12,
      minFontSize: 3,
    },
  },
  ANIMATION: {
    GIFT_BOX: {
      timeInMilliSeconds: 300,
    },
  },
};

export default CONFIG;
