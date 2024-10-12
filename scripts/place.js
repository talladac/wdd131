document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastmod").textContent = new Date(document.lastModified);

const temperature = document.getElementById("temp").textContent;
const windSpeed = document.getElementById("wind").textContent;
const chillFactor = document.getElementById("chill");

function windChill() {
    let total = 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed ** 0.16)) + (0.3965 * (temperature * (windSpeed ** 0.16)));
    return total;
}
if (temperature >=20 && windSpeed > 8) {
    chillFactor.textContent = windChill().toFixed(1) ;
} else {
    chillFactor.textContent = "N/A";
}

