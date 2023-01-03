function startInterval() {
    let myTimer = document.getElementById("my-timer");
    let now = new Date();
    let minute = now.getMinutes();
    let seconds = now.getSeconds();
    let doil = now.getMilliseconds();
    myTimer.innerHTML = `Minute ${minute} : Second ${seconds} : Doil ${doil}`;
}
window.setInterval(startInterval, 1000);

