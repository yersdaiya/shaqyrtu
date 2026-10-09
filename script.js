// 1. «Шақыртуды ашу» батырмасының функциясы
function toggleInvitation() {
    var mainContent = document.getElementById('mainContent');
    var openBtn = document.getElementById('openBtn');
    var bgMusic = document.getElementById('bgMusic');

    // Музыканы қосу
    if (bgMusic) {
        bgMusic.play().catch(function(e) {
            console.log("Музыка автоойнатылмады:", e);
        });
    }

    // Контентті ашу
    if (mainContent) {
        mainContent.classList.add('show');
        
        // Плавный скролл жасау
        setTimeout(function() {
            mainContent.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
}

// 2. МЕРЕЙТОЙҒА ДЕЙІНГІ ТАЙМЕР ЛОГИКАСЫ (12 Желтоқсан 2026 жыл)
function startTimer() {
    // Мерейтой өтетін дата (2026 жыл, 12 желтоқсан, сағат 12:12)
    const eventDate = new Date("December 12, 2026 12:12:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Сандар 1 таңбалы болса, алдына '0' қосу (мысалы, 05)
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Бет жүктелгенде таймерді іске қосу
document.addEventListener("DOMContentLoaded", function() {
    startTimer();
});

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz5SurUoEj9QslY-keRNecI5XvOxNvZbxNHYeIJd5IQ64tkajBthFd0M0j5cIIZXVmpsA/exec";

document.getElementById('rsvpForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const statusMsg = document.getElementById('formStatus');
    const formData = new FormData(this);
    
    submitBtn.disabled = true;
    submitBtn.innerText = "Жіберілуде...";
    
    fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        statusMsg.innerText = "Жауабыңыз қабылданды! Рахмет! ❤️";
        submitBtn.innerText = "Жіберілді ✨";
        this.reset();
    })
    .catch(error => {
        statusMsg.innerText = "Қате кетті, қайтадан байқап көрсеңіз.";
        submitBtn.disabled = false;
        submitBtn.innerText = "Жіберу ✉️";
    });
});
