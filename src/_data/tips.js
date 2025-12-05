const fetch = require("node-fetch");

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

module.exports = async function () {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      console.error("Tip API returned status:", response.status);
      return { tip: "No tip available." };
    }

    const data = await response.json();
    const tip = data.meals?.[0]?.strInstructions || "No tip available.";

    return { tip };
  } catch (err) {
    console.error("Tip API failed", err);
    return { tip: "Unable to load cooking tip." };
  }
};
