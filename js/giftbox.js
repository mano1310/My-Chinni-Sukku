<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5" name="viewport" />
  <meta content="IE=edge" http-equiv="X-UA-Compatible" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Shippori+Antique:wght@400;700&display=swap" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet" />
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11.0.19/dist/sweetalert2.all.min.js"></script>
  <script src="https://unpkg.com/typeit@8.7.0/dist/index.umd.js"></script>
  <title>Special Gift for Sukku ❤️</title>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap");
    :root {
      --warna-bg: rgba(0, 0, 0, 0.5);
      --warna-teks: white;
      --warna-bingkai: rgba(255, 255, 255, 0.8);
      --bingkai: 2px solid var(--warna-bingkai);
      --gaya-font: "Ubuntu", sans-serif;
    }
    body {
      margin: 0;
      padding: 25px;
      font-family: var(--gaya-font);
      text-align: center;
      // overflow: hidden;
      background: linear-gradient(to bottom, #ffe1e1, #ff217de0);
      background-attachment: fixed;
      background-size: cover;
      height: 100vh;
    }
    #bodyblur {
      opacity: 0.3;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      transition: all 1s ease;
    }
    #wallpaper {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 1.5s ease;
    }
    #Content {
      position: relative;
      opacity: 1;
      margin-top: 10vh;
      transition: all 1s ease;
      z-index: 2;
    }
    #kadoIn {
      margin: auto;
      padding: 20px;
      transition: all 4s ease;
    }
    #kadoIn img {
      width: 130px;
      height: auto;
      cursor: pointer;
      transition: all 0.1s ease;
    }
    #kadoIn img:hover {
      transform: scale(1.1);
    }
    #ket {
      font-size: 18px;
      font-weight: 700;
      color: white;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
      margin-top: 10px;
    }
    .kumpulanstiker {
      display: none;
      margin-top: 95px;
    }
    .kumpulanstiker img {
      width: 130px;
      height: auto;
      margin: 10px;
    }
    #halo {
      font-size: 18px;
      font-weight: 700;
      color: white;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
      margin-bottom: 20px;
    }
    #bq {
      opacity: 0;
      visibility: hidden;
      margin: 20px 0;
      padding: 20px;
      background: var(--warna-bg);
      border: var(--bingkai);
      border-radius: 8px;
      color: var(--warna-teks);
      font-weight: 700;
      text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.8);
      transition: all 1s ease;
    }
    #bq p {
      font-size: 17px;
      margin: 20px 0;
      display: none;
    }
    #bq p:first-child {
      display: block;
    }
    .sty2 {
      font-size: 16px;
      font-style: italic;
      color: #ffcc00;
    }
    #kolombaru {
      margin: 15px 0;
      display: flex;
      justify-content: center;
      list-style: none;
      padding: 0;
    }
    #kolombaru li {
      margin: 0 10px;
      font-size: 24px;
      animation: bounce 2s infinite;
      display: none;
    }
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px);
      }
      60% {
        transform: translateY(-5px);
      }
    }
    #Tombol {
      margin: 20px 0;
      opacity: 0;
      visibility: hidden;
      transition: all 1s ease;
    }
    #Tombol a {
      display: inline-block;
      background: linear-gradient(45deg, #ff6b6b, #feca57);
      color: white;
      padding: 15px 30px;
      text-decoration: none;
      border-radius: 50px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    }
    #Tombol a:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.4);
    }
    #pesanditolak {
      display: none;
      margin: 20px 0;
      padding: 20px;
      background: var(--warna-bg);
      border: var(--bingkai);
      border-radius: 8px;
      color: var(--warna-teks);
    }
    #pesanditolak img {
      width: 100px;
      height: auto;
    }
    .sembunyi {
      display: none;
    }
    /* Gift box SVG styling */
    .gift-box {
      width: 130px;
      height: 130px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    .gift-box:hover {
      transform: scale(1.1);
    }
    /* Responsive */
    @media (max-width: 768px) {
      body {
        padding: 15px;
      }
      
      #kadoIn .gift-box {
        width: 100px;
        height: 100px;
      }
      
      #bq p {
        font-size: 15px;
      }
      
      #ket {
        font-size: 16px;
      }
    }
  </style>
</head>
<body>
  <div id="bodyblur">
    <img src="" id="wallpaper" />
  </div>
  <div id="Content">
    <div id="kadoIn">
      <!-- SVG Gift Box instead of image -->
      <svg class="gift-box" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <!-- Gift box base -->
        <rect x="15" y="35" width="70" height="50" fill="#ff6b6b" stroke="#d63031" stroke-width="2" rx="5"/>
        <!-- Gift box lid -->
        <rect x="12" y="25" width="76" height="20" fill="#e17055" stroke="#d63031" stroke-width="2" rx="3"/>
        <!-- Ribbon vertical -->
        <rect x="45" y="25" width="10" height="60" fill="#fdcb6e"/>
        <!-- Ribbon horizontal -->
        <rect x="12" y="40" width="76" height="10" fill="#fdcb6e"/>
        <!-- Bow -->
        <ellipse cx="42" cy="25" rx="8" ry="6" fill="#f39c12"/>
        <ellipse cx="58" cy="25" rx="8" ry="6" fill="#f39c12"/>
        <circle cx="50" cy="25" r="4" fill="#e67e22"/>
        <!-- Sparkles -->
        <circle cx="25" cy="15" r="1.5" fill="#ffeaa7"/>
        <circle cx="75" cy="20" r="1" fill="#ffeaa7"/>
        <circle cx="20" cy="70" r="1" fill="#ffeaa7"/>
        <circle cx="80" cy="75" r="1.5" fill="#ffeaa7"/>
      </svg>
    </div>
    <p id="ket">
      <span style="font-style: italic; color: rgb(255,255,255); margin-top: 3px !important;">Open the gift, Sukku 💝</span>
    </p>
    <div class="kumpulanstiker">
      <img src="https://media.tenor.com/4Ijycn6xFzUAAAAj/mochi-blue-roses.gif" id="fotostiker" />
      <img src="https://feeldreams.github.io/bunga.gif" id="fotostiker1" />
      <img src="https://feeldreams.github.io/pandacoklat.gif" id="fotostiker2" />
      <img src="https://media.tenor.com/snFoLI-S9CQAAAAj/milk-and-mocha.gif" id="fotostiker3" />
      <img src="https://feeldreams.github.io/emawh.gif" id="fotostiker4" />
      <img src="https://feeldreams.github.io/pandacoklat.gif" id="fotostiker5" />
    </div>
    <p id="halo" class="halo"></p>
    <div>
      <blockquote id="bq" data-text="💞">
        <p id="kalimat">
          Happy Birthday, Sukku! Today is all about celebrating you, my love.
        </p>
        <p id="pesan1">Tap here for your special surprise! 🎉</p>
        <div id="kolombaru">
          <li id="lv1">❤️</li>
          <li id="lv2">💖</li>
          <li id="lv3">💕</li>
          <li id="lv4">💞</li>
        </div>
        <p id="pesan2">You make every day magical, Chinni! ✨</p>
        <p id="pesan3">Do you know what makes today extra special?</p>
        <p id="pesan4" class="sty2">It's your birthday, my beautiful Sukku!</p>
        <p id="pesan5" class="sty2">
          Today, I wish you a year filled with our love, laughter, and beautiful memories together.
        </p>
        <p id="pesan6" class="sty2">
          Remember, you deserve every happiness in the world. You are my everything, Sukku!
        </p>
        <p id="opsL">Tap to see your photo carousel!</p>
      </blockquote>
    </div>
    <div id="Tombol"><a id="By">💝 Next Surprise</a></div>
    <div id="pesanditolak">
      <img id="stikerditolak" src="https://feeldreams.github.io/weee.gif" />
      <p id="kataditolak">
        You can't skip this special moment, Sukku!
      </p>
    </div>
  </div>

  <script>
    // Your original giftbox.js functionality (modified to work without audio)
    const body = document.querySelector("body");
    const swalst = Swal.mixin({
      timer: 2300,
      allowOutsideClick: false,
      showConfirmButton: false,
      timerProgressBar: true,
      imageHeight: 90,
    });

    // Skip audio initialization since we removed it
    ftganti = 0;
    fungsi = 0;
    fungsiAwal = 0;
    
    // Get elements
    const Content = document.getElementById('Content');
    const kadoIn = document.getElementById('kadoIn');
    const wallpaper = document.getElementById('wallpaper');
    const ket = document.getElementById('ket');
    const bodyblur = document.getElementById('bodyblur');
    const kumpulanstiker = document.querySelector('.kumpulanstiker');
    const bq = document.getElementById('bq');
    const Tombol = document.getElementById('Tombol');
    const fotostiker = document.getElementById('fotostiker');
    const fotostiker5 = document.getElementById('fotostiker5');
    const stikerditolak = document.getElementById('stikerditolak');
    const kataditolak = document.getElementById('kataditolak');
    
    Content.style = "opacity:1;margin-top:16vh";

    const swals = Swal.mixin({
      allowOutsideClick: false,
      cancelButtonColor: "#FF0040",
      imageHeight: 80,
    });

    document.getElementById("kadoIn").onclick = function () {
      if (fungsiAwal == 0) {
        // Skip audio.play() since we removed audio
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
        inputValue: "Sukku" // Default value
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

    var tanya = "are you ready for your special photo carousel surprise?";
    var opstanya = "Your choice is:";
    var tompositif = "Yes! Show me the surprise! 💖";
    var tomnegatif = "Maybe later";

    async function pertanyaan() {
      var { isConfirmed: prtanya } = await swals.fire({
        title: nama + ", " + tanya,
        text: "" + opstanya,
        imageUrl: fotostiker5 ? fotostiker5.src : "https://feeldreams.github.io/pandacoklat.gif",
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
          imageUrl: stikerditolak ? stikerditolak.src : "https://feeldreams.github.io/weee.gif",
        });
        menuju();
      }
    }

    function menuju() {
      // For now, just show an alert since carousel.html might not exist
      Swal.fire({
        title: "Photo Carousel Coming Soon!",
        text: "This would redirect to your photo carousel page",
        icon: "success"
      });
      // Uncomment this when you have carousel.html ready:
      // window.location.href = "carousel.html";
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
        const element = document.getElementById(id);
        if (element) {
          element.style.opacity = "0";
        }
      });
      const kolombaru = document.getElementById("kolombaru");
      if (kolombaru) {
        kolombaru.style.opacity = "0";
      }
    });
  </script>
</body>
</html>
