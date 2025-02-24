import { FETCH_API_TIME_OUT as TIMEOUT } from "./config.js";

export const timeoutFunc = function () {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(
        new Error(
          "Your wish took too long, Santa's elves 🧚‍♀️🧚‍♂️ couldn't make it come true!"
        )
      );
    }, TIMEOUT);
  });
};

export const fetchUrl = async function (url) {
  try {
    // If the request takes more than TIMEOUT/3000, it will be rejected.
    const response = await Promise.race([fetch(url), timeoutFunc()]);

    if (!response.ok || response.status === 400) {
      const data = await response.json();
      throw new Error(`status: ${response.status}, ${data.message}!`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};
