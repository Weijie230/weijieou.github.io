const menu = document.getElementById("planetMenu");
const title = document.getElementById("planetTitle");
const description =
      document.getElementById("planetDescription");
const image =
      document.getElementById("planetImage");

let planetData = [];

// Load JSON data
fetch("data.json")
  .then(response => response.json())
  .then(data => {

    planetData = data.planets;

    menu.innerHTML =
      '<option value="">-- Select a Planet --</option>';

    // Populate menu dynamically
    planetData.forEach((planet, index) => {

      const option = document.createElement("option");

      option.value = index;
      option.textContent = planet.title;

      menu.appendChild(option);
    });
  });

// Display selected planet
menu.addEventListener("change", () => {

  const selectedIndex = menu.value;

  if (selectedIndex !== "") {

    const planet = planetData[selectedIndex];

    title.textContent = planet.title;

    description.textContent =
      planet.description;

    image.src = planet.image;
  }
});

// Text-to-speech
document.getElementById("speakButton")
  .addEventListener("click", () => {

    const text = description.textContent;

    const speech =
      new SpeechSynthesisUtterance(text);

    speechSynthesis.speak(speech);
  });
