import './Register.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import accepticon from "./assets/accept.png"

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
                    <div className={"register-middle-content-step-one"}>
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
                    <div className={"register-middle-content-step-two"}>
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
                    <div className={"register-middle-content-step-three"}>
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
                            {translation.Register.back}
                        </div>
                        <div className={"register-bottom-bar-next"}>
                            {translation.Register.next}
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