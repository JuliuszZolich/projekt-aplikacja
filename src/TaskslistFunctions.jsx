export function OpenCloseTasksMenu(state){
    if(state === 0){
        document.querySelector(".tasks-list-left-content-menu").style.marginLeft = '0';
        document.querySelector(".tasks-list-left-content-open-menu").style.marginLeft = '251px';
        document.querySelector(".tasks-list-left-content-open-menu-img").style.rotate = '180deg';
    }
    else {
        document.querySelector(".tasks-list-left-content-menu").style.marginLeft = '-252px';
        document.querySelector(".tasks-list-left-content-open-menu").style.marginLeft = '0';
        document.querySelector(".tasks-list-left-content-open-menu-img").style.rotate = '0deg';
    }
}