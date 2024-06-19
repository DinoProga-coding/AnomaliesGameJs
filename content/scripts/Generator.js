manager = new FixingManager();
statusText = document.getElementById("game_status");

function GenerateAnomaly() {
    let anomaly = Math.floor(Math.random() * 10);
    switch(anomaly) {
        case 0:
            manager.UpdateAnomalyCounter();
            anomaly1.style.visibility = "visible";
            manager.CheckAnomalyCounter(statusText);
            break;
        case 1:
            manager.UpdateAnomalyCounter();
            anomaly2.style.visibility = "visible";
            manager.CheckAnomalyCounter(statusText);
            break;
        case 2:
            manager.UpdateAnomalyCounter();
            anomaly3.style.visibility = "visible";
            manager.CheckAnomalyCounter(statusText);
            break;
        case 3:
            manager.UpdateAnomalyCounter();
            anomaly4.style.visibility = "visible";
            manager.CheckAnomalyCounter(statusText);
            break;
        case 4:
            manager.UpdateAnomalyCounter();
            anomaly5.style.visibility = "visible";
            manager.CheckAnomalyCounter(statusText);
            break;
        case 5:
            manager.UpdateAnomalyCounter();
            anomaly6.style.visibility = "visible";
            manager.CheckAnomalyCounter(statusText);
            break;
        case 6:
            manager.UpdateAnomalyCounter();
            anomaly7.style.visibility = "visible";
            manager.CheckAnomalyCounter(statusText);
            break;
        case 7:
            manager.UpdateAnomalyCounter();
            anomaly8.style.visibility = "visible";
            manager.CheckAnomalyCounter(statusText);
            break;
    }
}   setInterval(GenerateAnomaly, 3800);