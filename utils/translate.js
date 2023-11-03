const axios = require("axios");

const encodedParams = new URLSearchParams();

encodedParams.set("target", "en");

export const translate = async (text) => {
  try {
    encodedParams.set("q", text);
    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "998bf45a1dmshe0e5628d7abd3a9p150117jsndcde4832bf04",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: encodedParams,
    };
    const response = await axios.request(options);
    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error(error);
  }
};
