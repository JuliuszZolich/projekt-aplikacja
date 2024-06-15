function changeColors(step) {
    const steps = document.querySelectorAll(".register-progress-bar-item");
    if (step === 1) {
        steps[0].style.borderBottomColor = "#ff0000";//#077412 #ff0000 #808080
        steps[1].style.borderBottomColor = "#808080";
        steps[2].style.borderBottomColor = "#808080";
        steps[3].style.borderBottomColor = "#808080";
    }
    if (step === 2) {
        steps[0].style.borderBottomColor = "#077412";
        steps[1].style.borderBottomColor = "#ff0000";
        steps[2].style.borderBottomColor = "#808080";
        steps[3].style.borderBottomColor = "#808080";
    }
    if (step === 3) {
        steps[0].style.borderBottomColor = "#077412";
        steps[1].style.borderBottomColor = "#077412";
        steps[2].style.borderBottomColor = "#ff0000";
        steps[3].style.borderBottomColor = "#808080";
    }
    if (step === 4) {
        steps[0].style.borderBottomColor = "#077412";
        steps[1].style.borderBottomColor = "#077412";
        steps[2].style.borderBottomColor = "#077412";
        steps[3].style.borderBottomColor = "#ff0000";
    }
    if (step === 5) {
        steps[0].style.borderBottomColor = "#077412";
        steps[1].style.borderBottomColor = "#077412";
        steps[2].style.borderBottomColor = "#077412";
        steps[3].style.borderBottomColor = "#077412";
    }
}

function changeVisibility(prevStep, currStep, nextStep) {
    prevStep.style.animationName = "hide-step";
    setTimeout(() => {
            prevStep.classList.remove("show-step");
        }
        , 500);
    prevStep.style.display = "none";

    nextStep.style.animationName = "hide-step";
    setTimeout(() => {
            nextStep.classList.remove("show-step");
        }
        , 500);
    nextStep.style.display = "none";

    currStep.style.display = "block";
    currStep.style.animationName = "show-step";
    setTimeout(() => {
            currStep.classList.add("show-step");
        }
        , 100);
}

function verifyFirstStep(element) {
    const elements = element.querySelectorAll("input");
    const regex = /[A-z0-9-]+@[A-z0-9-]+\.[A-z0-9-]+/;
    if (elements[0].value === "" || elements[1].value === "" || elements[2].value === "") {
        if (elements[0].value === "") {
            document.querySelector(".wrong-mail").innerHTML = "Pole e-mail jest puste!";
        } else {
            if (!regex.test(elements[0].value)) {
                document.querySelector(".wrong-mail").innerHTML = "Nieprawidłowy format! (xyz@exyz.xyz)";
            } else {
                document.querySelector(".wrong-mail").innerHTML = "";
            }
        }
        if (elements[1].value === "") {
            document.querySelector(".wrong-password").innerHTML = "Pole hasło jest puste!";
        } else {
            document.querySelector(".wrong-password").innerHTML = "";
        }
        if (elements[2].value === "") {
            document.querySelector(".wrong-password-confirm").innerHTML = "Pole potwierdz hasło jest puste!";
        } else {
            document.querySelector(".wrong-password-confirm").innerHTML = "Hasła nie są takie same!";
        }
        return false;
    }
    if (elements[1].value !== elements[2].value) {
        document.querySelector(".wrong-password-confirm").innerHTML = "Hasła nie są takie same!";
        return false;
    }
    if (!regex.test(elements[0].value)) {
        document.querySelector(".wrong-mail").innerHTML = "Nieprawidłowy format! (xyz@exyz.xyz)";
        return false;
    }
    document.querySelector(".wrong-mail").innerHTML = "";
    document.querySelector(".wrong-password").innerHTML = "";
    document.querySelector(".wrong-password-confirm").innerHTML = "";
    return true;
}

function verifySecondStep(element) {
    const elements = element.querySelectorAll("select");
    if (elements[0].value === "default" || elements[1].value === "default" || elements[2].value === "default") {
        if(elements[0].value === "default"){
            document.querySelector(".wrong-faculty").innerHTML = "Nie żadnej wybrałeś Opcji!";
        }
        else{
            document.querySelector(".wrong-faculty").innerHTML = "";
        }
        if(elements[1].value === "default"){
            document.querySelector(".wrong-course").innerHTML = "Nie żadnej wybrałeś Opcji!";
        }
        else{
            document.querySelector(".wrong-course").innerHTML = "";
        }
        if(elements[2].value === "default"){
            document.querySelector(".wrong-semester").innerHTML = "Nie żadnej wybrałeś Opcji!";
        }
        else{
            document.querySelector(".wrong-semester").innerHTML = "";
        }
        return false;
    }
    document.querySelector(".wrong-faculty").innerHTML = "";
    document.querySelector(".wrong-course").innerHTML = "";
    document.querySelector(".wrong-semester").innerHTML = "";
    return true;
}

function verifyThirdStep(element) {
    const elements = element.querySelectorAll("input");
    const regex = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
    if (elements[0].value === "" || elements[1].value === "" || elements[2].value === "") {
        if(elements[0].value === ""){
            document.querySelector(".wrong-name").innerHTML = "Pole Imię jest puste!";
        }
        else{
            document.querySelector(".wrong-name").innerHTML = "";
        }
        if(elements[1].value === ""){
            document.querySelector(".wrong-surname").innerHTML = "Pole Nazwisko jest puste!";
        }
        else{
            document.querySelector(".wrong-surname").innerHTML = "";
        }
        if(elements[2].value === ""){
            document.querySelector(".wrong-phone-number").innerHTML = "Pole Nr Telefonu jest puste!";
        }
        else{
            if(!regex.test(elements[2].value)){
                document.querySelector(".wrong-phone-number").innerHTML = "Nieprawidłowy format! (xxx-xxx-xxx)";
            }else {
                document.querySelector(".wrong-phone-number").innerHTML = "";
            }
        }
        return false;
    }
    document.querySelector(".wrong-name").innerHTML = "";
    document.querySelector(".wrong-surname").innerHTML = "";
    if (!regex.test(elements[2].value)) {
        document.querySelector(".wrong-phone-number").innerHTML = "Nieprawidłowy format! (xxx-xxx-xxx)";
        return false;
    }
    document.querySelector(".wrong-phone-number").innerHTML = "";
    return true;
}

function verifyFourthStep(element) {
    const elements = element.querySelectorAll("input");
    if (!elements[0].checked) {
        document.querySelector(".not-confirmed").innerHTML = "Nie Zaznaczyłeś/aś wymaganych pól!";
        return false;
    }
    document.querySelector(".not-confirmed").innerHTML = "";
    return true;
}

async function sendRequest() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const faculty = document.getElementById("faculty").value;
    const course = document.getElementById("course").value;
    const phone = document.getElementById("phone").value;
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const semester = document.getElementById("semester").value;
    await fetch("http://localhost:8001/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "UserID": "-1"
            },
            body: JSON.stringify({
                email: email,
                password: password,
                faculty: faculty,
                course: course,
                phone: phone,
                name: name,
                surname: surname,
                semester: semester
            })
        }
    )
}

export function changeStep(step) {
    const stepOne = document.querySelector(".register-middle-content-step-one");
    const stepTwo = document.querySelector(".register-middle-content-step-two");
    const stepThree = document.querySelector(".register-middle-content-step-three");
    const stepFour = document.querySelector(".register-middle-content-step-four");
    const stepFinish = document.querySelector(".register-middle-content-finished");

    switch (step) {
        case 1:
            break;
        case 2:
            if (!verifyFirstStep(stepOne)) {
                return false;
            }
            break;
        case 3:
            if (!verifySecondStep(stepTwo)) {
                return false;
            }
            break;
        case 4:
            if (!verifyThirdStep(stepThree)) {
                return false;
            }
            break;
        case 5:
            if (!verifyFourthStep(stepFour)) {
                return false;
            }
            break;

    }

    if (step === 1) {
        stepTwo.style.animationName = "hide-step";
        setTimeout(() => {
                stepTwo.classList.remove("show-step");
            }
            , 500);
        stepTwo.style.display = "none";


        stepOne.style.display = "block";
        stepOne.style.animationName = "show-step";
        setTimeout(() => {
                stepOne.classList.add("show-step");
            }
            , 100);
        document.querySelector(".register-bottom-bar-back").style.display = "none";
    } else {
        document.querySelector(".register-bottom-bar-back").style.display = "block";
    }
    if (step === 2) {
        changeVisibility(stepOne, stepTwo, stepThree);
    }
    if (step === 3) {
        changeVisibility(stepTwo, stepThree, stepFour);
    }
    if (step === 4) {
        changeVisibility(stepThree, stepFour, stepFinish);
    }
    if (step === 5) {
        document.querySelector(".register-bottom-bar").style.display = "none";
        stepFour.style.animationName = "hide-step";
        setTimeout(() => {
                stepFour.classList.remove("show-step");
            }
            , 500);
        stepFour.style.display = "none";
        stepFinish.style.display = "block";
        stepFinish.style.animationName = "show-step";
        setTimeout(() => {
                stepFinish.classList.add("show-step");
            }
            , 100);
        sendRequest().then(() => {
            console.log("Request sent");
        });
    }
    changeColors(step);
    return true;
}
