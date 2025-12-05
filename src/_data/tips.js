// This runs on the server (Node). No document, no DOM.

// Example external API (Spoonacular)
const API_URL = "https://api.spoonacular.com/food/tips/random?apiKey=www.themealdb.com/api/json/v1/1/list.php?c=list";

module.exports = async function () {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return { tip: data.tips?.[0]?.tip || "No tip available" };
  } catch (err) {
    console.error("Tip API failed", err);
    return { tip: "Unable to load cooking tip." };
  }
};
