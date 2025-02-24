export default function getTimeUntilChristmas() {
  const now = new Date();
  const itIsChristmas = now.getMonth() === 11 && now.getDate() === 25;
  // const itIsChristmas = true;
  const currentYear = now.getFullYear();

  const christmas = new Date(currentYear, 11, 25);
  if (now > christmas) {
    // christmas.year += 1; This does not work with date objects
    christmas.setFullYear(currentYear + 1);
  }

  const timeUntilChristmas = christmas - now;

  const days = Math.floor(timeUntilChristmas / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeUntilChristmas % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (timeUntilChristmas % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((timeUntilChristmas % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    itIsChristmas,
  };
}
