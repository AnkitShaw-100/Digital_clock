let month = document.getElementById('month');
let day = document.getElementById('day');
let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let millisec = document.getElementById('millisec');

setInterval(() => {
    let currentTime = new Date();
    
    // Target date (January 1, 2025)
    let targetDate = new Date('January 1, 2025 00:00:00');

    // Calculate the difference in milliseconds
    let diff = targetDate - currentTime;

    // Calculate remaining time components
    let remainingMilliseconds = diff % 1000;
    let remainingSeconds = Math.floor(diff / 1000);
    let remainingMinutes = Math.floor(remainingSeconds / 60);
    let remainingHours = Math.floor(remainingMinutes / 60);
    let remainingDays = Math.floor(remainingHours / 24);
    let remainingMonths = Math.floor(remainingDays / 30); // Approximate month duration

    // Update the countdown values
    month.innerHTML = remainingMonths.toString().padStart(2, '0') + ' : ';
    day.innerHTML = (remainingDays % 30).toString().padStart(2, '0') + ' : '; // Days in current month
    hour.innerHTML = (remainingHours % 24).toString().padStart(2, '0') + ' : '; // Hours in current day
    min.innerHTML = (remainingMinutes % 60).toString().padStart(2, '0') + ' : '; // Minutes in current hour
    sec.innerHTML = (remainingSeconds % 60).toString().padStart(2, '0') + ' : '; // Seconds in current minute
    millisec.innerHTML = remainingMilliseconds.toString().padStart(3, '0'); // Milliseconds
}, 10);
