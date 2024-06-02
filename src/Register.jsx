import './Register.css'
import {Link} from "react-router-dom";
import accepticon from "./assets/accept.png"

const Register = () => {
    return (
        <>
            <div className={"register-main-content"}>
                <div className={"register-panel"}>
                    <div className={"register-top-bar"}>
                        Rejestracja
                    </div>
                    <div className={"register-progress-bar"}>
                        <div className={"register-progress-bar-item step-one"}>
                            Krok 1
                        </div>
                        <div className={"progress-bar-line"}></div>
                        <div className={"register-progress-bar-item step-two"}>
                            Krok 2
                        </div>
                        <div className={"progress-bar-line"}></div>
                        <div className={"register-progress-bar-item step-three"}>
                            Krok 3
                        </div>
                    </div>
                    <div className={"register-middle-content-step-one"}>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                Wpisz e-mail
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="password" required/>
                            <div className={"register-input-text"}>
                                Wpisz Hasło
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="password" required/>
                            <div className={"register-input-text"}>
                                Potwierdz hasło
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-step-two"}>
                        <div className={"register-middle-content-item"}>
                            <select name={"faculty"} id={"registerFaculty"} required>
                                <option value="default"></option>
                            </select>
                            <div className={"register-input-text"}>
                                Wybierz Wydział
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <select name={"course"} id={"registerCourse"}>
                                <option value="default"></option>
                            </select>
                            <div className={"register-input-text"}>
                                Wybierz Kierunek
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <select name={"year"} id={"registerYear"}>

                            </select>
                            <div className={"register-input-text"}>
                                Wybierz Rok
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-step-three"}>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                Wpisz Imię
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                Wpisz Nazwisko
                            </div>
                        </div>
                        <div className={"register-middle-content-item"}>
                            <input type="text" required/>
                            <div className={"register-input-text"}>
                                Wpisz Nr Telefonu
                            </div>
                        </div>
                    </div>
                    <div className={"register-middle-content-finished"}>
                        <div className={"register-middle-content-finished-img"}>
                            <img src={accepticon} alt="accepted-icon"/>
                        </div>
                        <div className={"register-middle-content-finished-text"}>
                            <Link to={'/projekt-aplikacja/login'}>
                                Rejestracja pomyślna
                                <br/>
                                Wróć do strony Logowania
                            </Link>
                        </div>
                    </div>
                    <div className={"register-bottom-bar"}>
                        <div className={"register-bottom-bar-back"}>
                            Cofnij
                        </div>
                        <div className={"register-bottom-bar-next"}>
                            Dalej
                        </div>
                        <div className={"register-bottom-bar-back-to-login-page"}>
                            <Link to={'/projekt-aplikacja/login'}>
                                Posiadam już konto.
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;