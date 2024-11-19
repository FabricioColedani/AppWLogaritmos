
function calculateLogarithm() {
    const number = parseFloat(document.getElementById('numberInput').value);
    const base = document.getElementById('baseSelect').value;
    let logResult;

    if (number <= 0) {
        document.getElementById('result').innerText = "Por favor, ingresa un número mayor que 0.";
        return;
    }

    let baseText;
    if (base === '10') {
        logResult = Math.log10(number);
        baseText = 'log₁₀';
    } else if (base === '2') {
        logResult = Math.log2(number);
        baseText = 'log₂';
    } else if (base === 'e') {
        logResult = Math.log(number);
        baseText = 'ln';
    }

    document.getElementById('result').innerText = `${baseText}(${number}) = ${logResult.toFixed(4)}`;
}

let isPlaying = false;
let isMuted = false;
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');

// Controlar el Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});

// Controlar el Mute/Unmute
muteBtn.addEventListener('click', () => {
    if (isMuted) {
        audioPlayer.muted = false;
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        audioPlayer.muted = true;
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
    isMuted = !isMuted;
});

// Rewind
document.getElementById('prevBtn').addEventListener('click', () => {
    audioPlayer.currentTime -= 10; // Rewind 10 seconds
});

// Skip forward
document.getElementById('nextBtn').addEventListener('click', () => {
    audioPlayer.currentTime += 10; // Forward 10 seconds
});

// Inicializar el audio
audioPlayer.load();  // Cargar el audio cuando la página se cargue

