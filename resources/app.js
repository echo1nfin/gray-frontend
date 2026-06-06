function setEmergencyMod(isActive, text=""){
    if(isActive){
        document.getElementById('emergency-banner').classList.add('active');
    }
    else {
        document.getElementById('emergency-banner').classList.remove(active);
    }
}