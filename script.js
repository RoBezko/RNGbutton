const texts = [
    "Have unlimited bacon but no games or unlimited games but no games",
    "Idk what am doin",
    "Will you do the one block jump for the chicken or the one block vertical for the beef",
    "UHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHh",
    "kys",
    "👍",
    "The thing aint lettin me to make this page black, womp womp",
    "d",
    "https://tenor.com/view/marcopolo-paradiso-g8-1800-dd-gif-24605671",
    "those who noes",
    "wake up",
    "💥💥💥💥💥💥💥",
    "Diddy party",
    "Mango",
    "AAAAAAAAAAAAAAAAHHHHHHH",
    "I ran out of things to write",
    "5k ping"
  ];
  
  function generateRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    document.getElementById("displayText").innerText = texts[randomIndex];
  }
  
  document.getElementById("generateButton").addEventListener("click", generateRandomText);