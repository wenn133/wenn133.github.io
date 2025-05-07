let isVoicePlaying = false;  // Track whether the voice message is playing

window.onload = () => {
  const messages = ["Hello mi love!", "Smile while waiting...", "Almost there..."];
  const loadingText = document.getElementById("loading-text");
  let i = 0;

  const interval = setInterval(() => {
    loadingText.textContent = messages[i];
    i++;
    if (i >= messages.length) clearInterval(interval);
  }, 1500);

  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.querySelector(".container").classList.add("show");
    launchConfetti();
  }, 4500);
};

function playSound() {
  // Removed background music; no sound is played here anymore
}

// Function to play the voice message
function playVoiceMessage() {
  const voiceMessage = document.getElementById("voice-message");

  // Play the voice message if it isn't already playing
  if (!isVoicePlaying) {
    voiceMessage.play().then(() => {
      isVoicePlaying = true;
    }).catch(console.error);
  }
}

// Go back to the main frame
function goBack() {
  playSound();
  document.getElementById("panel-window").classList.add("hidden");
  document.getElementById("contentArea").innerHTML = "";
}

// Show Birthday Message
function showMessage() {
  playSound();

  const panel = document.getElementById("panel-window");
  panel.classList.remove("hidden");
  document.getElementById("contentArea").innerHTML = `
    <p class="birthday-message"> Hello pangga this is what im doing for the past 5 days i think. Yet i dont have enough money to make or to buy you
    something, amo gd ni gina pangasubo ko. Damo ko want na ubrahon pero tungod sa lack sng kwarta nd ko maubra. So i came up with this idea
    nga ubrahan ko ikaw website. Simple lng ni sya but budlay para saakon i hope you like it. ILOVEYOUALWAYS
    
    
    -noynoy</p>
  `;
}

// Show Gallery
function showGallery() {
  playSound();

  const panel = document.getElementById("panel-window");
  panel.classList.remove("hidden");
  const content = document.getElementById("contentArea");
  content.innerHTML = `<p>🖼️ Loading your memories ( with me 🤗)!</p><div class="printing-container" id="galleryPrint"></div>`;

  const container = document.getElementById("galleryPrint");
  const images = [
    "one.jpg",
    "two.jpg",
    "three.jpg"
  ];

  images.forEach((src, index) => {
    setTimeout(() => {
      const photo = document.createElement("div");
      photo.className = "polaroid";
      photo.innerHTML = `<img src="${src}" alt="Photo ${index + 1}">`;
      container.appendChild(photo);
    }, index * 800);
  });

  setTimeout(() => {
    const video = document.createElement("video");
    video.src = "us.mp4";
    video.controls = true;
    video.width = 200;
    video.style.marginTop = "20px";
    container.appendChild(video);
  }, images.length * 900);
}

// Show Music Controls
function showMusic() {
  playSound();

  const panel = document.getElementById("panel-window");
  panel.classList.remove("hidden");
  const content = document.getElementById("contentArea");

  content.innerHTML = `
    <div class="music-player">
      <h3>HERE HERE HERE</h3>
      <button onclick="playVoiceMessage()">📢 Play Voice Message</button>
      <p style="margin-top:10px;">"Voice Message" - noynoy</p>
    </div>
  `;
}

// 🎊 Simple Confetti
function launchConfetti() {
  const container = document.getElementById("confetti-container");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.position = "absolute";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `-${Math.random() * 20 + 10}px`;
    confetti.style.width = `${6 + Math.random() * 4}px`;
    confetti.style.height = `${6 + Math.random() * 4}px`;
    confetti.style.backgroundColor = ["#ff66b2", "#ffc0cb", "#ff99cc"][Math.floor(Math.random() * 3)];
    confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
    container.appendChild(confetti);
  }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall {
  0% { transform: translateY(0) rotate(0); }
  100% { transform: translateY(100vh) rotate(360deg); }
}
`;
document.head.appendChild(style);

// Function to show the Celebrate panel
function triggerCelebrate() {
  const celebratePanel = document.getElementById("celebrate-panel");
  celebratePanel.classList.remove("hidden"); // Show the panel
}

// Back function for Celebrate panel (Returns to the main screen)
function goBackCelebrate() {
  const celebratePanel = document.getElementById("celebrate-panel");
  celebratePanel.classList.add("hidden"); // Hide the panel
}

