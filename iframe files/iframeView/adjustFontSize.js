export default function adjustFontSize(CONFIG) {
  const { speechBubbleText } = CONFIG.DOM_ELEMENS;

  let { startFontSize, minFontSize } = CONFIG.TEXT.SPEECH_BUBBLE_TEXT;
  speechBubbleText.style.fontSize = `${startFontSize}px`;

  while (
    speechBubbleText.scrollWidth > speechBubbleText.offsetWidth &&
    speechBubbleText.scrollHeight > speechBubbleText.offsetHeight &&
    startFontSize > minFontSize
  ) {
    startFontSize--;
    speechBubbleText.style.fontSize = `${startFontSize}px`;
  }
}
