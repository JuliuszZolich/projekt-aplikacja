import sun from './assets/widget/sun.png'
import moon from './assets/widget/moon.png'
import cloudymoon from './assets/widget/cloudy-moon.png'
import cloudysun from './assets/widget/cloudy-sun.png'
import clouds from './assets/widget/clouds.png'
import rain from './assets/widget/rain.png'
import thunderstorm from './assets/widget/thunderstorm.png'
import snowing from './assets/widget/snowing.png'
import mist from './assets/widget/mist.png'


export function OpenMenu() {
    document.querySelector('.on-click-menu').style.animationName = "show-side-menu";
    setTimeout(() => {
        document.querySelector('.on-click-menu').classList.add("show-side-menu");
    }, 100);
    OnClickOutside(".on-click-menu", ".hamburger-menu", 0);
}

export function CloseMenu() {
    document.querySelector('.on-click-menu').style.animationName = "hide-side-menu";
    setTimeout(() => {
        document.querySelector('.on-click-menu').classList.remove("show-side-menu");
    }, 500);
}

export function OpenFacilitiesMenu() {
    document.querySelector('.drop-down-menu-facilities').style.animationName = "show-facilities-menu";
    setTimeout(() => {
        document.querySelector('.drop-down-menu-facilities').classList.add("show-facilities-menu");
    }, 100);
    OnClickOutside(".drop-down-menu-facilities", "#facilities-menu-open", 1);
}

export function OnClickOutside(element, element2, menu) {
    window.addEventListener('click', function (e) {
            if (!document.querySelector(element).contains(e.target) && !document.querySelector(element2).contains(e.target)) {
                if (menu === 1) {
                    CloseFacilitiesMenu();
                } else if (menu === 2) {
                    CloseNotifications();
                } else if (menu === 3) {
                    CloseUserMenu();
                } else {
                    CloseMenu();
                }
            }
        }
    )
}

export function CloseFacilitiesMenu() {
    document.querySelector('.drop-down-menu-facilities').style.animationName = "hide-facilities-menu";
    setTimeout(() => {
        document.querySelector('.drop-down-menu-facilities').classList.remove("show-facilities-menu");
    }, 500);
}

export function OpenNotifications() {
    document.querySelector('.drop-down-notifications').style.animationName = "show-notifications";
    setTimeout(() => {
        document.querySelector('.drop-down-notifications').classList.add("show-notifications");
    }, 100);
    OnClickOutside(".drop-down-notifications", ".open-notifications", 2);
}

export function CloseNotifications() {
    document.querySelector('.drop-down-notifications').style.animationName = "hide-notifications";
    setTimeout(() => {
        document.querySelector('.drop-down-notifications').classList.remove("show-notifications");
    }, 500);
}

export function OpenUserMenu() {
    document.querySelector('.user-menu').style.animationName = "show-user-menu";
    setTimeout(() => {
        document.querySelector('.user-menu').classList.add("show-user-menu");
    }, 100);
    OnClickOutside(".user-menu", ".open-user-menu", 3);
}

export function CloseUserMenu() {
    document.querySelector('.user-menu').style.animationName = "hide-user-menu";
    setTimeout(() => {
        document.querySelector('.user-menu').classList.remove("show-user-menu");
    }, 500);
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
    //ChangeFontSizeByClass(action, 'topBar-p');
    //ChangeFontSizeByClass(action, 'topBar-p');

    if (action === 'l') {
        flag = 1;
    } else if (action === 'm') {
        flag = 0;
    } else if (action === 's') {
        flag = -1;
    }
}

// home-p => 30px (homepage)
// side-menu-p => 40px (sideMenu)
// top-bar-p => 20px (topBar)
// header-p => 35px (announcements)
// announcements-posts-item-right-content-text => 16px (announcements)
// post-page-header-text => 66px (announcementsPostPage)
// text-header => 32px (announcementsPostPage)
// post-page-main-content-middle-content-right => 22px (announcementsPostPage)
// tasks-list-p => 50px (taskList)
// medium-text-p => 25px (taskList)(mapResult)(subjects)
// small-text-p => 14px (subjects->ogłoszenia)
// points-p => 70px (subjects)

export function ChangeFontSizeByClass(action, className) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        const style = window.getComputedStyle(elements[i]);
        const fontSize = style.getPropertyValue('font-size');

        if (action === 'l' && flag !== 1) {
            if (flag === 0) {
                elements[i].style.fontSize = parseFloat(fontSize) * 1.2 + "px";
            } else if (flag === -1) {
                elements[i].style.fontSize = parseFloat(fontSize) / 0.8 * 1.2 + "px";
            }
        } else if (action === 'm' && flag !== 0) {
            if (flag === 1) {
                elements[i].style.fontSize = parseFloat(fontSize) / 1.2 + "px";
            } else if (flag === -1) {
                elements[i].style.fontSize = parseFloat(fontSize) / 0.8 + "px";
            }
        } else if (action === 's' && flag !== -1) {
            if (flag === 0) {
                elements[i].style.fontSize = parseFloat(fontSize) * 0.8 + "px";
            } else if (flag === 1) {
                elements[i].style.fontSize = parseFloat(fontSize) / 1.2 * 0.8 + "px";
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
    data = new Date().toLocaleDateString(language, {day: '2-digit', month: 'long', year: 'numeric'});
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
    await fetch(url)
        .then(response => {
            return response.json();
        })
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