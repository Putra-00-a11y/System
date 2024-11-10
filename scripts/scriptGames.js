console.log('Welcome Putra S.O');
console.log('Welcome to Debugging!');

const play = document.getElementById("mulaiButton");
const rule = document.getElementById("aturanButton");
const leaderboard = document.getElementById("peringkatButton");
const img = document.getElementById("eventIcon");
const hr = document.getElementById("line0");
const loading0 = document.getElementById("loader0");
const pLoader = document.getElementById("pLoader");

    play.style.display = "block";
    rule.style.display = "block";
    leaderboard.style.display = "block";
    hr.style.display = "block";
    img.style.display = "block";
    loading0.style.display = "none";
    pLoader.style.display = "none";

function mulaiGames() {
    console.log('Game Debugging..');

    setTimeout(() => {
        console.log('Loading Prepare!');
        loading0.style.display = "grid";
        play.style.display = "none";
        rule.style.display = "none";
        leaderboard.style.display = "none";
        img.style.display = "none";
        hr.style.display = "none";
        pLoader.style.display = "block";
            setTimeout(() => {
                console.log('Games Begin!');
                loading0.style.display = "none";
                pLoader.style.display = "none";
            }, 7300);
    }, 1200);
}