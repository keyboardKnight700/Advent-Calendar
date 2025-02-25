export default function positionDomElement(
  targetPosition,
  targetElement,
  widthInPercent,
  heightInPercent,
  paddingLeft,
  paddingTop
) {
  const position = targetPosition.getBoundingClientRect();

  targetElement.style.left = `${
    position.left + position.width * paddingLeft // 5% padding
  }px`;
  targetElement.style.top = `${
    position.top + position.height * paddingTop // 15% padding
  }px`;
  targetElement.style.width = `${position.width * widthInPercent}px`;
  targetElement.style.height = `${position.height * heightInPercent}px`;
}
