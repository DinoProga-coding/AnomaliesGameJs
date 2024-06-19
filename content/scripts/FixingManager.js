class FixingManager {
    anomalyCounter = 0;
    fixingAnomaliesCounter = 0;

    UpdateFixingAnomalies() {
        this.fixingAnomaliesCounter++;
        this.anomalyCounter--;
    }

    UpdateAnomalyCounter() {
        this.anomalyCounter++;
    }

    CheckAnomalyCounter(tag) {
        if(this.anomalyCounter >= 4) {
            tag.innerHTML = 'You Lose';
            setTimeout(() => {
                window.location = 'index.html';
            }, 2000);  
        }
    }
}