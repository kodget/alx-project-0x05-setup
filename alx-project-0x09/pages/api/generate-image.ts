const axios = require("axios");

const options = {
  method: "POST",
  url: "https://chatgpt-42.p.rapidapi.com/texttoimage3",
  headers: {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_GPT_API_KEY,
    "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
    "Content-Type": "application/json",
  },
  data: {
    text: "a dog",
    width: 512,
    height: 512,
    steps: 1,
  },
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
