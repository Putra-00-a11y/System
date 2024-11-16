console.log('Welcome Developer!');
console.log('Welcoming for Putra');

const buttonM0 = document.getElementById("button0");
const buttonM1 = document.getElementById("button1");
const buttonM2 = document.getElementById("button2");
const buttonM3 = document.getElementById("button3");
const mCorrect = document.getElementById("musicCorrect");

    buttonM0.style.display = "block";
    buttonM1.style.display = "block";
    buttonM2.style.display = "block";
    buttonM3.style.display = "block";

    window.location.assign = "09.html";
    window.location.assign = "gagal.html";

function buttons0() {
    console.log('Jawaban Benar!');
    buttonM0.style.backgroundColor = "green";
    buttonM1.style.display = "none";
    buttonM2.style.display = "none";
    buttonM3.style.display = "none";
    mCorrect.play();
    setTimeout(() => {
        window.location.href = "09.html";
    }, 1500);
}

function buttons1() {
    console.log('Jawaban Salah!');
    alert('Jawaban Salah!');
    buttonM0.style.display = "none";
    buttonM1.style.backgroundColor = "red";
    buttonM2.style.display = "none";
    buttonM3.style.display = "none";
    setTimeout(() => {
        console.log('Kembali Ke Laman Gagal');
        window.location.href = "08.html";
    }, 1500);
}

function buttons2() {
    console.log('Jawaban Salah!');
    alert('Jawaban Salah!');
    buttonM0.style.display = "none";
    buttonM1.style.display = "none";
    buttonM2.style.backgroundColor = "red";
    buttonM3.style.display = "none";
    setTimeout(() => {
        console.log('Kembali Ke Laman Gagal');
        window.location.href = "gagal.html";
    }, 1500);
}

function buttons3() {
    console.log('Jawaban Salah!');
    alert('Jawaban Salah!');
    buttonM0.style.display = "none";
    buttonM1.style.display = "none";
    buttonM2.style.display = "none";
    buttonM3.style.backgroundColor = "red";
    setTimeout(() => {
        console.log('Kembali Ke Laman Gagal');
        window.location.href = "gagal.html";
    }, 1500);
}