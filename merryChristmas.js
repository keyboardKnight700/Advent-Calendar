const parentContainer = document.querySelector(".calendar__clock");
const parentContainerComputedStyles = getComputedStyle(parentContainer);

const width = parseInt(parentContainerComputedStyles.width);
const height = parseInt(parentContainerComputedStyles.height);

export default function createStar(count = 20, color = "white") {
  let starNumber =
    count <= 50 &&
    count > 0 &&
    Number.isInteger(count) &&
    typeof count === "number"
      ? count
      : 20;

  for (let i = 0; i < starNumber; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    parentContainer.appendChild(star);

    const starWidth = Math.random() * (8 - 5) + 5;
    star.style.width = starWidth + "px";
    star.style.height = starWidth + "px";
    star.style.left = Math.random() * (width + 2 * starWidth) + "px";
    star.style.top = Math.random() * height + "px";
    star.style.setProperty(
      "--starAnimationDuration",
      `${Math.random() * (5 - 2) + 2}` + "s"
    );

    // const color = ["#9FC131", "#9FC131", "#DBF227", "#D6D58E"];

    star.style.backgroundColor = color;
  }
}

// createStar(50);
