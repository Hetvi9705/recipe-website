export async function handler() {
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data = await response.json();

    const instructions = data.meals[0].strInstructions;
    const tips = instructions.split(". ").filter(Boolean);
    const randomTip = tips[Math.floor(Math.random() * tips.length)];

    return {
      statusCode: 200,
      body: JSON.stringify({ tip: randomTip })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to load tip." })
    };
  }
}
