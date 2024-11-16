console.log('Welcome Developer!');
console.log('Welcoming for Putra!');

const buttonPrize = document.getElementById("buttonTf");

function buttonTF() {
    console.log('Masuk Laman Penukaran Hadiah!');

    window.location.assign = "prizepool.html";
    setTimeout(() => {
        console.log('Masuk Laman Berhasil..');
        window.location.href = "prizepool.html";
    }, 2000);
}