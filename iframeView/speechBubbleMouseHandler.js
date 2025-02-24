export default function speechBubbleMouseHandler(CONFIG, currentJoke) {
  const { speechBubble, speechBubbleText } = CONFIG.DOM_ELEMENS;
  speechBubbleText.textContent = currentJoke.question;

  const mouseEnterHandler = () => {
    speechBubbleText.textContent = currentJoke.answer;
    speechBubble.style.stroke = "blue";
  };

  const mouseLeaveHandler = () => {
    speechBubbleText.textContent = currentJoke.question;
    speechBubble.style.stroke = "#ffff00";
  };

  speechBubbleText.addEventListener("mouseenter", mouseEnterHandler);
  speechBubbleText.addEventListener("mouseleave", mouseLeaveHandler);
}
