export default function requestJokes(CONFIG, message, messageHandler) {
  const {
    nextJokeBtn,
    nextJokeBtnSound,
    giftboxMoon,
    giftboxStars,
    hatCircle,
  } = CONFIG.DOM_ELEMENS;
  const { stars_active, stars_default, moon_default, moon_active } =
    CONFIG.COLORS.GIFT_BOX;
  const { timeInMilliSeconds } = CONFIG.ANIMATION.GIFT_BOX;

  nextJokeBtn.addEventListener("click", () => {
    messageHandler(message);

    hatCircle.style.fillOpacity = "0.1";
    giftboxMoon.style.fill = moon_active;
    giftboxStars.forEach((star) => (star.style.fill = stars_active));
    nextJokeBtnSound.play();

    setTimeout(() => {
      hatCircle.style.fillOpacity = "1";
      giftboxMoon.style.fill = moon_default;
      giftboxStars.forEach((star) => (star.style.fill = stars_default));
    }, timeInMilliSeconds);
  });
}
