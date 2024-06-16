import sun from './assets/widget/sun.png'
import moon from './assets/widget/moon.png'
import cloudymoon from './assets/widget/cloudy-moon.png'
import cloudysun from './assets/widget/cloudy-sun.png'
import clouds from './assets/widget/clouds.png'
import rain from './assets/widget/rain.png'
import thunderstorm from './assets/widget/thunderstorm.png'
import snowing from './assets/widget/snowing.png'
import mist from './assets/widget/mist.png'
import {useCookies} from "react-cookie";


export function useLoginCookie(){
    const [cookies] = useCookies(['userID']);
    if (cookies['userID'] === undefined) {
        window.location.href = "/projekt-aplikacja/login";
    }
}

export async function sendEmail(user_id, type, message) {
    let headers = new Headers();
    headers.append("UserID", user_id);
    headers.append("Action-Type", "SEND");
    headers.append("Type", type);
    await fetch("http://localhost:8001/mail", {
        method: "POST",
        headers: headers,
        body: message
    });
}

let isWindowClickListenerAdded = false;
let clickOutsideWindowHandler = null;

let isMenuClickListenerAdded = false;
let clickOutsideMenuHandler = null;

export function OpenMenu(element, className, animationNameHide) {
    const targetMenu = document.querySelector(element);
    targetMenu.style.animationName = className;
    setTimeout(() => {
        targetMenu.classList.add(className);
    },100)
    if (!isMenuClickListenerAdded) {
        setTimeout(() => {
            clickOutsideMenuHandler = createClickOutsideMenuHandler(element, className, animationNameHide);
            window.addEventListener('click', clickOutsideMenuHandler);
            isMenuClickListenerAdded = true;
        }, 100);
    }
}

export function CloseMenu(element, animationName, className) {
    const targetMenu = document.querySelector(element);
    targetMenu.style.animationName = animationName;
    setTimeout(() => {
        targetMenu.classList.remove(className);
    }, 500);
    removeMenuClickListener();
}

function createClickOutsideMenuHandler(element, className, animationName) {
    return function handleClickOutside(e) {
        const targetElement = document.querySelector(element);
        if (targetElement && !targetElement.contains(e.target)) {
            CloseMenu(element, animationName, className);
        }
    };
}

function removeMenuClickListener() {
    if (isMenuClickListenerAdded && clickOutsideMenuHandler) {
        window.removeEventListener('click', clickOutsideMenuHandler);
        isMenuClickListenerAdded = false;
        clickOutsideMenuHandler = null;
    }
}

export function OpenWindow(element) {
    const targetWindow = document.querySelector(element);
    targetWindow.style.display = "block";
    CloseMenu('.on-click-menu', 'hide-side-menu', 'show-side-menu');
    if (!isWindowClickListenerAdded) {
        setTimeout(() => {
            clickOutsideWindowHandler = createClickOutsideWindowHandler(element);
            window.addEventListener('click', clickOutsideWindowHandler);
            isWindowClickListenerAdded = true;
        }, 100);
    }
}

export function CloseWindow(element) {
    const targetWindow = document.querySelector(element);
    targetWindow.style.display = "none";
    removeWindowClickListener();
}

function createClickOutsideWindowHandler(element) {
    return function handleClickOutside(e) {
        const targetElement = document.querySelector(element);
        if (targetElement && !targetElement.contains(e.target)) {
            CloseWindow(element);
        }
    };
}

function removeWindowClickListener() {
    if (isWindowClickListenerAdded && clickOutsideWindowHandler) {
        window.removeEventListener('click', clickOutsideWindowHandler);
        isWindowClickListenerAdded = false;
        clickOutsideWindowHandler = null;
    }
}

let flag = 0;

export function ChangeFontSize(action) {
    ChangeFontSizeByClass(action, 'home-p');
    ChangeFontSizeByClass(action, 'side-menu-p');
    ChangeFontSizeByClass(action, 'top-bar-p');
    ChangeFontSizeByClass(action, 'header-p');
    ChangeFontSizeByClass(action, 'announcements-posts-item-right-content-text');
    ChangeFontSizeByClass(action, 'post-page-header-text');
    ChangeFontSizeByClass(action, 'post-page-header-date-text');
    ChangeFontSizeByClass(action, 'text-header');
    ChangeFontSizeByClass(action, 'post-page-main-content-middle-content-right');
    ChangeFontSizeByClass(action, 'tasks-list-p');
    ChangeFontSizeByClass(action, 'medium-text-p');
    ChangeFontSizeByClass(action, 'small-text-p');
    ChangeFontSizeByClass(action, 'points-p');

    if (action === 'l') {
        flag = 1;
    } else if (action === 'm') {
        flag = 0;
    } else if (action === 's') {
        flag = -1;
    }
}

let maxSize = 1.15;
let minSize = 0.85;

export function ChangeFontSizeByClass(action, className) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        const style = window.getComputedStyle(elements[i]);
        const fontSize = style.getPropertyValue('font-size');

        if (action === 'l' && flag !== 1) {
            if (flag === 0) {
                elements[i].style.fontSize = parseFloat(fontSize) * maxSize + "px";
            } else if (flag === -1) {
                elements[i].style.fontSize = parseFloat(fontSize) / minSize * maxSize + "px";
            }
        } else if (action === 'm' && flag !== 0) {
            if (flag === 1) {
                elements[i].style.fontSize = parseFloat(fontSize) / maxSize + "px";
            } else if (flag === -1) {
                elements[i].style.fontSize = parseFloat(fontSize) / minSize + "px";
            }
        } else if (action === 's' && flag !== -1) {
            if (flag === 0) {
                elements[i].style.fontSize = parseFloat(fontSize) * minSize + "px";
            } else if (flag === 1) {
                elements[i].style.fontSize = parseFloat(fontSize) / maxSize * minSize + "px";
            }
        }
    }
}

export function setFontSize() {
    if (flag === 1) {
        flag = 0;
        ChangeFontSize('l');
    } else if (flag === 0) {
        ChangeFontSize('m');
    } else if (flag === -1) {
        flag = 0;
        ChangeFontSize('s');
    }
}

let language = "pl-PL"
let dayPart = 0;
let weather;
let description;
let lon;
let lat;
let data;

export function getCurrentDate() {
    const savedLanguage = localStorage.getItem('language');
    const language = savedLanguage || 'pl';
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    data = new Date().toLocaleDateString(language, options);
    document.getElementById("weather-bar-date").innerHTML = data;
}

export function getCurrentTime() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    document.getElementById("weather-bar-time").innerHTML = date.toLocaleTimeString(language, {
        hour: '2-digit',
        minute: "2-digit",
        hour12: false
    });
    if (hour === 0 && minutes === 0) {
        getCurrentDate();
    }
    if (hour >= 8 && hour <= 20) {
        dayPart = 0;
    } else {
        dayPart = 1;
    }
}

async function getCurrentWeather() {
    const url = 'https://geolocation-db.com/json/';
    await fetch(url).then(response => {return response.json();})
        .then(data => {
            lon = data.longitude;
            lat = data.latitude;
        })
        .catch(error => {
            console.error('Error:', error);
        });
    await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=789f15dc022d7efb66b70c8c09986075`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            weather = data.weather[0].main.toLowerCase();
            description = data.weather[0].description.toLowerCase();
        })
        .catch(error => {
            console.error('Error:', error);
        });
    if (weather === "clear") {
        if (dayPart === 0) {
            document.getElementById("weather-icon").src = sun;
        } else {
            document.getElementById("weather-icon").src = moon;
        }
    } else if (weather === "clouds") {
        if (dayPart === 0) {
            if (description === "few clouds") {
                document.getElementById("weather-icon").src = cloudysun;
            } else {
                document.getElementById("weather-icon").src = clouds;
            }
        } else {
            if (description === "few clouds") {
                document.getElementById("weather-icon").src = cloudymoon;
            } else {
                document.getElementById("weather-icon").src = clouds;
            }
        }
    } else if (weather === "drizzle" || weather === "rain") {
        document.getElementById("weather-icon").src = rain;
    } else if (weather === "thunderstorm") {
        document.getElementById("weather-icon").src = thunderstorm;
    } else if (weather === "snow") {
        document.getElementById("weather-icon").src = snowing;
    } else {
        document.getElementById("weather-icon").src = mist;
    }
}


export function widget() {
    getCurrentDate();
    getCurrentTime();
    getCurrentWeather();
}