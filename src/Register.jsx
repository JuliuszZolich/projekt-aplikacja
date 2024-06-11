import './Register.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import accepticon from "./assets/accept.png"

let step = 1;

function changeColors(step){
    const steps = document.querySelectorAll(".register-progress-bar-item");
    if(step === 1){
        steps[0].style.borderBottomColor = "#ff0000";//#077412 #ff0000 #808080
        steps[1].style.borderBottomColor = "#808080";
        steps[2].style.borderBottomColor = "#808080";
    }
    if(step === 2){
        steps[0].style.borderBottomColor = "#077412";
        steps[1].style.borderBottomColor = "#ff0000";
        steps[2].style.borderBottomColor = "#808080";
    }
    if(step === 3){
        steps[0].style.borderBottomColor = "#077412";
        steps[1].style.borderBottomColor = "#077412";
        steps[2].style.borderBottomColor = "#ff0000";
    }
}

function changeStep(step) {
    const stepOne = document.querySelector(".register-middle-content-step-one");
    const stepTwo = document.querySelector(".register-middle-content-step-two");
    const stepThree = document.querySelector(".register-middle-content-step-three");
    if (step === 1) {
        stepOne.style.display = "block";
        stepTwo.style.display = "none";
        stepThree.style.display = "none";
    }
    if (step === 2) {
        stepOne.style.display = "none";
        stepTwo.style.display = "block";
        stepThree.style.display = "none";
    }
    if (step === 3) {
        stepOne.style.display = "none";
        stepTwo.style.display = "none";
        stepThree.style.display = "block";
    }
    changeColors(step);
}

const Register = () => {
    const {t: translation} = useLanguage();
    return (
        <>
            <div className={"register-main-content"}>
                <div className={"register-panel"}>
                    <div className={"register-top-bar"}>
                        {translation.Register.registration}
                    </div>
                    <div className={"register-progress-bar"}>
                        <div className={"register-progress-bar-item step-one"}>
                            {translation.Register.step1}
                        </div>
                        <div className={"progress-bar-line"}></div>
                        <div className={"register-progress-bar-item step-two"}>
                            {translation.Register.step2}
                        </div>
                        <div className={"progress-bar-line"}></div>
                        <div className={"register-progress-bar-item step-three"}>
                            {translation.Register.step3}
                        </div>
                    </div>
                    <div className={"register-middle-content-step-one"} style={{"display": "block"}}>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterEmail}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="password" required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterPassword}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="password" required/>
                            <div className={"register-input-text"}>
                                {translation.Register.confirmPassword}
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-step-two"} style={{"display": "none"}}>
                        <div className={"register-middle-content-item"}>
                            <select name={"faculty"} id={"registerFaculty"} required>
                                <option value="default"></option>
                            </select>
                            <div className={"register-input-text"}>
                                {translation.Register.selectFaculty}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <select name={"course"} id={"registerCourse"}>
                                <option value="default"></option>
                            </select>
                            <div className={"register-input-text"}>
                                {translation.Register.selectMajor}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <select name={"year"} id={"registerYear"}>

                            </select>
                            <div className={"register-input-text"}>
                                {translation.Register.selectYear}
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-step-three"} style={{"display": "none"}}>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterName}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterSurname}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterPhoneNumber}
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-finished"}>
                        <div className={"register-middle-content-finished-img"}>
                            <img src={accepticon} alt="accepted-icon"/>
                        </div>
                        <div className={"register-middle-content-finished-text"}>
                            <Link to={'/projekt-aplikacja/login'}>
                                {translation.Register.successful}
                                <br/>
                                {translation.Register.backToLogin}
                            </Link>
                        </div>
                    </div>
                    <div className={"register-bottom-bar"}>
                        <div className={"register-bottom-bar-back"}>
                            <span onClick={() => {
                                if (step > 1) {
                                    step--;
                                    changeStep(step);
                                }
                            }
                            }
                            >{translation.Register.back}</span>
                        </div>
                        <div className={"register-bottom-bar-next"}>
                            <span onClick={() => {
                                if (step < 3) {
                                    step++;
                                    changeStep(step);
                                }
                            }
                            }
                            >{translation.Register.next}</span>
                        </div>
                        <div className={"register-bottom-bar-back-to-login-page"}>
                            <Link to={'/projekt-aplikacja/login'}>
                                {translation.Register.account}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;