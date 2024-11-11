console.log('Welcome Putra S.O');
console.log('Welcome to Debugging!');

const play = document.getElementById("mulaiButton");
const rule = document.getElementById("aturanButton");
const leaderboard = document.getElementById("peringkatButton");
const event15 = document.getElementById("eventButton");
const backButton1 = document.getElementById("pBackButton0");
const backButton2 = document.getElementById("aBackButton0");
const backButton3 = document.getElementById("dBackButton0");
const img = document.getElementById("eventIcon");
const hr = document.getElementById("line0");
const loading0 = document.getElementById("loader0");
const pLoader = document.getElementById("pLoader");

    play.style.display = "block";
    rule.style.display = "block";
    leaderboard.style.display = "block";
    event15.style.display = "block";
    hr.style.display = "block";
    img.style.display = "block";
    loading0.style.display = "none";
    pLoader.style.display = "none";
    // localStorage.setItem("name", keyName);
    // localStorage.setItem("date", keyDate);
    // localStorage.setItem("time", keyTime);
    // localStorage.setItem("nTime", keyNTime);

    window.location.assign = "gameHal1.html";
    window.location.assign = "aturan.html";
    window.location.assign = "peringkat.html";
    window.location.assign = "event15.html";

function mulaiGames() {
    console.log('Game Debugging..');

    setTimeout(() => {
        console.log('Loading Prepare!');
        loading0.style.display = "grid";
        play.style.display = "none";
        rule.style.display = "none";
        leaderboard.style.display = "none";
        event15.style.display = "none";
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

function peringkatGames() {
    console.log('Debugging Laman Peringkat..');
        window.location.assign = "peringkat.html";

    setTimeout(() => {
        console.log('Masuk Laman Peringkat');
        window.location.href = "peringkat.html";
    }, 1700);
}

function pBackButton() {
    console.log("Kembali ke Laman Awal..");
        window.location.assign = "index.html";

    setTimeout(() => {
        console.log('Keluar Laman Berhasil');
        window.location.href = "index.html";
    }, 1700);
}

function aturanGames() {
    console.log('Masuk Laman Rules..');
        window.location.assign = "aturan.html";

    setTimeout(() => {
        console.log('Masuk Laman Rules Berhasil');
        window.location.href = "aturan.html";
    }, 1700);
}

function aBackButton() {
    console.log('Kembali ke Laman Awal..');
        window.location.assign = "index.html";

    setTimeout(() => {
        console.log('Keluar Laman Berhasil');
        window.location.href = "index.html";
    }, 1700);
}

function eventGames() {
    console.log('Masuk Laman Event 15 Nov');
        window.location.assign = "event.html";

    setTimeout(() => {
        console.log('Masuk Laman Event 15 Nov Berhasil');
        window.location.href = "event.html";
    }, 1700);
}

function danaBack() {
    console.log('Kembali ke Laman Awal..');
        window.location.assign = "index.html";

    setTimeout(() => {
        console.log('Keluar Laman Berhasil');
        window.location.href = "index.html";
    }, 1700);
}