document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("load-tip");
  const output = document.getElementById("tip-output");

  btn.addEventListener("click", async () => {
    output.textContent = "Loading...";

    const response = await fetch("/.netlify/functions/random-tip");
    const data = await response.json();

    output.textContent = data.tip;
  });
});
