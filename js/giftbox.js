const body = document.querySelector("body");
const swalst = Swal.mixin({
  timer: 2300,
  allowOutsideClick: false,
  showConfirmButton: false,
  timerProgressBar: true,
  imageHeight: 90,
});

audio = new Audio("" + linkmp3.src);
ftganti = 0;
fungsi = 0;
fungsiAwal = 0;
deffotostiker = fotostiker.src;
Content.style = "opacity:1;margin-top:16vh";

const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: "#FF0040",
  imageHeight: 80,
});

document.getElementById("kadoIn").onclick = function () {
  if (fungsiAwal == 0) {
    audio.play();
    fungsiAwal = 1;
    kadoIn.style = "transition:all .8s ease;transform:scale(10);opacity:0";
    wallpaper.style = "transform: scale(1.5);";
    ket.style = "display:none";
    setTimeout(initengahan, 300);
    setTimeout(inipesan, 500);
  }
};

async function inipesan() {
  var { value: nama } = await swals.fire({
    title: "What's your beautiful name, my love?",
    input: "text",
    inputPlaceholder: "Enter your name here...",
  });
  if (nama && nama.length < 11) {
    window.nama = nama;
    vketikhalo = "Happy Birthday, " + nama + "! 💖";
    mulainama();
  } else {
    await Swal.fire({
      title: "Your name is beautiful!",
      text: "Please enter a shorter name so I can call you properly.",
      icon: "info",
    });
    inipesan();
  }
}

var tanya = "Sukku, are you ready for your special photo carousel surprise?";
var opstanya = "Your choice is:";
var tompositif = "Yes! Show me the surprise! 💖";
var tomnegatif = "Maybe later";

async function pertanyaan() {
  var { isConfirmed: prtanya } = await swals.fire({
    title: nama + ", " + tanya,
    text: "" + opstanya,
    imageUrl: "" + fotostiker5.src,
    showCancelButton: true,
    confirmButtonText: "" + tompositif,
    cancelButtonText: "" + tomnegatif,
  });
  if (prtanya) {
    pesanwhatsapp = "Yes " + nama + ", let's see the beautiful photos!";
    menuju();
  } else {
    pesanwhatsapp = nama + ", don't miss this special surprise!";
    await swalst.fire({
      title: "" + kataditolak.innerHTML,
      timer: 2000,
      imageUrl: "" + stikerditolak.src,
    });
    menuju();
  }
}

function menuju() {
  // Redirect to carousel page
  window.location.href = "carousel.html";
}

// Animation functions
function initengahan() {
  bodyblur.style = "opacity:.2;animation:none;background:rgba(0,0,0,.3)";
  kumpulanstiker.style = "display:flex;opacity:1;animation:none";
  bq.style = "opacity:1;visibility:visible;transform: scale(1)";
  Tombol.style = "opacity:1;visibility:visible;transform: scale(1)";
}

function mulainama() {
  new TypeIt("#halo", {
    strings: [vketikhalo],
    startDelay: 400,
    speed: 45,
    cursor: false,
    afterComplete: function () {
      setTimeout(initengahan2, 500);
    },
  }).go();
}

function initengahan2() {
  // Show all messages step by step
  setTimeout(() => {
    document.getElementById("pesan1").style.opacity = "1";
  }, 500);
  setTimeout(() => {
    document.getElementById("kolombaru").style.opacity = "1";
  }, 1000);
  setTimeout(() => {
    document.getElementById("pesan2").style.opacity = "1";
  }, 1500);
  setTimeout(() => {
    document.getElementById("pesan3").style.opacity = "1";
  }, 2000);
  setTimeout(() => {
    document.getElementById("pesan4").style.opacity = "1";
  }, 2500);
  setTimeout(() => {
    document.getElementById("pesan5").style.opacity = "1";
  }, 3000);
  setTimeout(() => {
    document.getElementById("pesan6").style.opacity = "1";
  }, 3500);
  setTimeout(() => {
    document.getElementById("opsL").style.opacity = "1";
    // Enable the next button
    document.getElementById("By").onclick = pertanyaan;
  }, 4000);
}

// Initially hide all messages
document.addEventListener("DOMContentLoaded", function() {
  const messages = ["pesan1", "pesan2", "pesan3", "pesan4", "pesan5", "pesan6", "opsL"];
  messages.forEach(id => {
    document.getElementById(id).style.opacity = "0";
  });
  document.getElementById("kolombaru").style.opacity = "0";
});
