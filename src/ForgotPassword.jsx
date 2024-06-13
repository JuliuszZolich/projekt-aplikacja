import {Link} from "react-router-dom";
import './ForgotPassword.css'
import accept from './assets/accept.png'
const ForgotPassword = () => {
    return (
        <>
            <div className={"forgot-password-content"}>
                <div className={"forgot-password-title"}>
                    Zapomniałem hasła
                </div>
                <div className={"forgot-password-middle-content"}>
                    <div className={"forgot-password-input forgot-password-email"}>
                        <input type="text" id={"forgot-password-email"} required/>
                        <div className={"forgot-password-input-text"}>
                            Wpisz e-mail
                        </div>
                        <div className={"forgot-password-text-wrong-information forgot-password-wrong-email"}>
                            Nie ma takiego e-maila!
                        </div>
                    </div>
                    <div className={"forgot-password-input forgot-password-confirm-code"}>
                        <input type="text" id={"forgot-password-confirm-code"} required/>
                        <div className={"forgot-password-input-text"}>
                            Wpisz kod
                        </div>
                        <div className={"forgot-password-text-wrong-information forgot-password-wrong-code"}>
                            Błędny kod!
                        </div>
                        <div className={"forgot-password-send-again"}>
                            Wyślij Kod ponownie!
                        </div>
                    </div>
                    <div className={"forgot-password-input forgot-password-new-password"}>
                        <input type="text" id={"forgot-password-new-password"} required/>
                        <div className={"forgot-password-input-text"}>
                            Wpisz nowe hasło
                        </div>
                        <div className={"forgot-password-text-wrong-information forgot-password-wrong-new-password"}>
                            Błędne hasło!
                        </div>
                    </div>
                    <div className={"forgot-password-input forgot-password-confirm-new-password"}>
                        <input type="text" id={"forgot-password-confirm-new-password"} required/>
                        <div className={"forgot-password-input-text"}>
                            Powtórz hasło
                        </div>
                        <div className={"forgot-password-text-wrong-information forgot-password-wrong-new-password-confirm"}>
                            Hasła nie są takie same!
                        </div>
                    </div>
                    <div className={"forgot-password-finished"}>
                        <img src={accept} alt="password-chanded-icon"/>
                        <Link to={"/projekt-aplikacja/login"}>
                            Hasło zmienione pomyślnie.
                            <br/>
                            Wróć do strony Logowania.
                        </Link>
                    </div>
                </div>
                <div className={"forgot-password-buttons"}>
                    <div className={"forgot-password-button forgot-password-button-back"}>
                        Cofnij
                    </div>
                    <div className={"forgot-password-button forgot-password-button-next"}>
                        Dalej
                    </div>
                </div>
                <div className={"forgot-password-back"}>
                    <Link to={"/projekt-aplikacja/login"}>
                        Powrót na stronę główną.
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword;