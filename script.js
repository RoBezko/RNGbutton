const texts = [
    "Have unlimited bacon but no games or unlimited games but no games",
    "Idk what am doin",
    "Will you do the one block jump for the chicken or the one block vertical for the beef",
    "UHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh",
    "kys",
    "👍",
    "The thing aint lettin me to make this page black, womp womp",
    "d"
  ];
  
  // Function to generate a random text
  function generateRandomText() {
    // Get a random index from the texts array
    const randomIndex = Math.floor(Math.random() * texts.length);
    // Display the selected text in the #displayText div
    document.getElementById("displayText").innerText = texts[randomIndex];
  }
  
  // Add event listener to the button
  document.getElementById("generateButton").addEventListener("click", generateRandomText);