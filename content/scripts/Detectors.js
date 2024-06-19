manager = new FixingManager();
statusText = document.getElementById("game_status");

function AnomalyDetected(anomaly) {
    anomaly.addEventListener('click', () => {
        detectStatus.style.visibility = "visible";
        detectStatus.innerHTML = "Detecting";
        setTimeout(() => {
            anomaly.style.visibility = "hidden";
            detectStatus.innerHTML = "Anomaly Detected";
            manager.UpdateFixingAnomalies();
            if(manager.fixingAnomaliesCounter >= 13) {
                statusText.innerHTML = "You win!";
                setTimeout(() => {
                    window.location = 'index.html';
                }, 2000);  
            }
        }, 2000);
    });
}

function BackgroundClick() {
    detectStatus.style.visibility = "visible";
    detectStatus.innerHTML = "Detecting";
    setTimeout(() => {
        detectStatus.innerHTML = "Anomaly No Detected";
    }, 2000);  
}