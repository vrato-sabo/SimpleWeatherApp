const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'December',
];
const today = new Date();
const day = days[today.getDay()];
const month = months[today.getMonth()].toString();
const date = today.getDate().toString();
const hours = today.getHours();
const minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
// console.log();

export const now = `${day}, ${month} ${date} ${hours}:${minutes}`;

const input = 'Tisovec';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const currentWatherResponse = fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}&units=metric`
);

const fiveDaysResponse = fetch(
  `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=metric`
);

async function bothApiCalls(input) {
  try {
    const response = await Promise.all([
      currentWatherResponse,
      fiveDaysResponse,
    ]);

    // const data = await response.json();
    const currentData = await response[0].json();
    const fiveDaysData = await response[1].json();
    console.log(currentData, fiveDaysData);

    return currentData && fiveDaysData;
    // setApiData(data);
  } catch (error) {
    console.error(error);
  }
}
