export function changeScenery(i){
    if(i === 1){
        document.getElementById("marks").style.display = 'none';
        document.getElementById("announcements").style.display = 'none';
        document.getElementById("exercises").style.display = 'none';
        document.getElementById("lectures").style.display = 'block';
    }
    else if(i === 2){
        document.getElementById("marks").style.display = 'none';
        document.getElementById("announcements").style.display = 'none';
        document.getElementById("exercises").style.display = 'block';
        document.getElementById("lectures").style.display = 'none';
    }
    else if(i === 3){
        document.getElementById("marks").style.display = 'none';
        document.getElementById("announcements").style.display = 'block';
        document.getElementById("exercises").style.display = 'none';
        document.getElementById("lectures").style.display = 'none';
    }
    else{
        document.getElementById("marks").style.display = 'block';
        document.getElementById("announcements").style.display = 'none';
        document.getElementById("exercises").style.display = 'none';
        document.getElementById("lectures").style.display = 'none';
    }
}