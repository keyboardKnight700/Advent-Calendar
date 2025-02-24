export default function renderTimeUntilChristmas(dateValues) {
  try {
    const dateElements = {
      days: document.getElementById("days"),
      hours: document.getElementById("hours"),
      minutes: document.getElementById("minutes"),
      seconds: document.getElementById("seconds"),
    };

    for (const [key, value] of Object.entries(dateElements)) {
      if (!value) {
        throw new Error(key);
      }
    }

    // const dateValues = timeValues;

    if (dateValues.itIsChristmas) {
      document.querySelector(".calendar__clock").classList.add("itIsChristmas");
      return;
    } else {
      document
        .querySelector(".calendar__clock")
        .classList.remove("itIsChristmas");
    }

    dateElements.days.textContent = String(dateValues.days).padStart(2, "0");
    dateElements.hours.textContent = String(dateValues.hours).padStart(2, "0");
    dateElements.minutes.textContent = String(dateValues.minutes).padStart(
      2,
      "0"
    );
    dateElements.seconds.textContent = String(dateValues.seconds).padStart(
      2,
      "0"
    );
  } catch (error) {
    console.log(`The html element (${error.message}) does not exist!`);
    // throw error;
  }
}
