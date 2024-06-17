import './css/Register.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import accepticon from "./assets/accept.png"
import {changeStep} from "./RegisterFunctions";

let step = 1;

const Register = () => {
    const {t: translation} = useLanguage();
    step = 1;
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
                        <div className={"progress-bar-line"}></div>
                        <div className={"register-progress-bar-item step-four"}>
                            {translation.Register.step4}
                        </div>
                    </div>
                    <div className={"register-middle-content-step-one"} style={{"display": "block"}}>
                        <div className={"register-middle-content-item"}>
                            <input type="text" id={"email"} required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterEmail}
                            </div>
                            <div className={"register-input-text-wrong-information wrong-mail"}>

                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="password" id={"password"} required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterPassword}
                            </div>
                            <div className={"register-input-text-wrong-information wrong-password"}>
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="password" required/>
                            <div className={"register-input-text"}>
                                {translation.Register.confirmPassword}
                            </div>
                            <div className={"register-input-text-wrong-information wrong-password-confirm"}>
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-step-two"} style={{"display": "none"}}>
                        <div className={"register-middle-content-item"}>
                            <select name={"faculty"} id={"faculty"} required>
                                <option value="default">DEFAULT</option>
                                <option value="test">TEST</option>
                            </select>
                            <div className={"register-input-text"}>
                                {translation.Register.selectFaculty}
                            </div>
                            <div className={"register-input-text-wrong-information wrong-faculty"}>
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <select name={"course"} id={"course"}>
                                <option value="default">DEFAULT</option>
                                <option value="test">TEST</option>
                            </select>
                            <div className={"register-input-text"}>
                                {translation.Register.selectMajor}
                            </div>
                            <div className={"register-input-text-wrong-information wrong-course"}>
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <select name={"semester"} id={"semester"}>
                                <option value="default">Wybierz semestr</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                            </select>
                            <div className={"register-input-text"}>
                                {translation.Register.selectSemester}
                            </div>
                            <div className={"register-input-text-wrong-information wrong-semester"}>
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-step-three"} style={{"display": "none"}}>
                        <div className={"register-middle-content-item"}>
                            <input type="text" id={"name"} required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterName}
                            </div>
                            <div className={"register-input-text-wrong-information wrong-name"}>
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="text" id={"surname"} required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterSurname}
                            </div>
                            <div className={"register-input-text-wrong-information wrong-surname"}>
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="text" id={"phone"} required/>
                            <div className={"register-input-text"}>
                                {translation.Register.enterPhoneNumber}
                            </div>
                            <div className={"register-input-text-wrong-information wrong-phone-number"}>
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-step-four"} style={{"display": "none"}}>
                        <div className={"register-step-four-information"}>
                            {translation.Register.required}
                        </div>
                        <div className={"register-step-four-item"}>
                            <div className={"register-checkbox"}>
                                <input type="checkbox" id="accept-policy" name="accept-policy"/>
                            </div>
                            <div className={"register-step-four-item-text"}>
                                {translation.Register.agreementData}
                                <span className={"required-checkbox"}>*</span>
                            </div>
                        </div>
                        <div className={"register-step-four-item"}>
                            <div className={"register-checkbox"}>
                                <input type="checkbox" id="accept-localization" name="accept-localization"/>
                            </div>
                            <div className={"register-step-four-item-text"}>
                                {translation.Register.agreementLocation}
                            </div>
                            <div className={"register-input-text-wrong-information not-confirmed"}>
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-finished"} style={{"display": "none"}}>
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
                        <div className={"register-bottom-bar-back"} style={{"display":"none"}}>
                            <span onClick={() => {
                                if (step > 1) {
                                    if (changeStep(step-1)) step--;
                                }
                            }
                            }
                            >{translation.Register.back}</span>
                        </div>
                        <div className={"register-bottom-bar-next"}>
                            <span onClick={() => {
                                if (step < 5) {
                                    if (changeStep(step+1)) step++;
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