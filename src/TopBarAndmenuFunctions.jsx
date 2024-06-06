export function OpenMenu() {
    document.getElementById("on-click-menu").style.marginLeft = '0';
    document.getElementById("on-click-menu").style.display = 'block';
}

export function CloseMenu() {
    document.getElementById("on-click-menu").style.marginLeft = '-30%';
    document.getElementById("on-click-menu").style.display = 'none';
}

export function OpenFacilitiesMenu() {
    document.getElementById("facilities-drop-down-menu").style.display = 'block'
}

export function CloseFacilitiesMenu() {
    document.getElementById("facilities-drop-down-menu").style.display = 'none'
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