import './Register.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import accepticon from "./assets/accept.png"

const Register = () => {
    const {t} = useLanguage();
    return (
        <>
            <div className={"register-main-content"}>
                <div className={"register-panel"}>
                    <div className={"register-top-bar"}>
                        {t.Register.registration}
                    </div>
                    <div className={"register-progress-bar"}>
                        <div className={"register-progress-bar-item step-one"}>
                            {t.Register.step1}
                        </div>
                        <div className={"progress-bar-line"}></div>
                        <div className={"register-progress-bar-item step-two"}>
                            {t.Register.step2}
                        </div>
                        <div className={"progress-bar-line"}></div>
                        <div className={"register-progress-bar-item step-three"}>
                            {t.Register.step3}
                        </div>
                    </div>
                    <div className={"register-middle-content-step-one"}>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                {t.Register.enterEmail}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="password" required/>
                            <div className={"register-input-text"}>
                                {t.Register.enterPassword}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="password" required/>
                            <div className={"register-input-text"}>
                                {t.Register.confirmPassword}
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-step-two"}>
                        <div className={"register-middle-content-item"}>
                            <select name={"faculty"} id={"registerFaculty"} required>
                                <option value="default"></option>
                            </select>
                            <div className={"register-input-text"}>
                                {t.Register.selectFaculty}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <select name={"course"} id={"registerCourse"}>
                                <option value="default"></option>
                            </select>
                            <div className={"register-input-text"}>
                                {t.Register.selectMajor}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <select name={"year"} id={"registerYear"}>

                            </select>
                            <div className={"register-input-text"}>
                                {t.Register.selectYear}
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-step-three"}>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                {t.Register.enterName}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                {t.Register.enterSurname}
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                {t.Register.enterPhoneNumber}
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-finished"}>
                        <div className={"register-middle-content-finished-img"}>
                            <img src={accepticon} alt="accepted-icon"/>
                        </div>
                        <div className={"register-middle-content-finished-text"}>
                            <Link to={'/projekt-aplikacja/login'}>
                                {t.Register.successful}
                                <br/>
                                {t.Register.backToLogin}
                            </Link>
                        </div>
                    </div>
                    <div className={"register-bottom-bar"}>
                        <div className={"register-bottom-bar-back"}>
                            {t.Register.back}
                        </div>
                        <div className={"register-bottom-bar-next"}>
                            {t.Register.next}
                        </div>
                        <div className={"register-bottom-bar-back-to-login-page"}>
                            <Link to={'/projekt-aplikacja/login'}>
                                {t.Register.account}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;