// script.js

// Obtener la fecha del próximo año
const today = new Date();
const nextYear = today.getFullYear();
const targetDate = new Date(`August 1, ${nextYear} 00:00:00`).getTime();

// Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calcular días, horas, minutos y segundos
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Mostrar los valores en el HTML
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Detener el temporizador si llega a 0
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<h2>¡Feliz Año Nuevo!</h2>";
    }
}

// Actualizar cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Llamar inmediatamente para evitar un segundo de retraso
updateCountdown();
