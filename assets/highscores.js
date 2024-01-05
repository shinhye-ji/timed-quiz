let storedData = localStorage.getItem("userScore"); // the highscore in local data

if (storedData) {
    storedData = JSON.parse(storedData);

    let initials = storedData.initials;
    let scoreFraction = storedData.scoreFraction;

    document.getElementById("initialsOutput").textContent = "Initials: " + initials;
    document.getElementById("scoreOutput").textContent = "Score: " + scoreFraction;
} else {
    console.log("No user score data found.");
}