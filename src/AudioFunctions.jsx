import clickmusic from './assets/onclickmusic.mp3'
import tapmusic from './assets/tapmusic.mp3'
import usermusic from './assets/usermusic.mp3'
import addmusic from './assets/addmusic.mp3'
import deletemusic from './assets/deletemusic.mp3'

export function OnClickPlay(action) {
    let music;
    if (action === "home") {
        music = new Audio(clickmusic);
    } else if (action === "tap") {
        music = new Audio(tapmusic);
    } else if (action === "user") {
        music = new Audio(usermusic);
    } else if (action === "add") {
        music = new Audio(addmusic);
    } else if (action === "delete") {
        music = new Audio(deletemusic);
    }
    music.play();
}