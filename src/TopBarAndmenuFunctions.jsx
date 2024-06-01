export function OpenMenu() {
    document.getElementById("on-click-menu").style.marginLeft = '0';
    document.getElementById("on-click-menu").style.display = 'block';
}

export function CloseMenu() {
    document.getElementById("on-click-menu").style.marginLeft = '-30%';
    document.getElementById("on-click-menu").style.display = 'none';
}

export function OpenFacilitiesMenu(){
    document.getElementById("facilities-drop-down-menu").style.display = 'block'
}

export function CloseFacilitiesMenu(){
    document.getElementById("facilities-drop-down-menu").style.display = 'none'
}