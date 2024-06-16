import {Link} from "react-router-dom";
import './ForgotPassword.css'
import accept from './assets/accept.png'
import {useLanguage} from './ChangeLanguage.jsx';

const ForgotPassword = () => {
    const {t: translation} = useLanguage();
    return (
        <>
            <div className={"forgot-password-content"}>
                <div className={"forgot-password-title"}>
                    {translation.ForgotPassword.forgot}
                </div>
                <div className={"forgot-password-middle-content"}>
                    <div className={"forgot-password-input forgot-password-email"}>
                        <input type="text" id={"forgot-password-email"} required/>
                        <div className={"forgot-password-input-text"}>
                            {translation.ForgotPassword.enterEmail}
                        </div>
                        <div className={"forgot-password-text-wrong-information forgot-password-wrong-email"}>
                            {translation.ForgotPassword.noEmail}
                        </div>
                    </div>
                    <div className={"forgot-password-input forgot-password-confirm-code"}>
                        <input type="text" id={"forgot-password-confirm-code"} required/>
                        <div className={"forgot-password-input-text"}>
                            {translation.ForgotPassword.enterCode}
                        </div>
                        <div className={"forgot-password-text-wrong-information forgot-password-wrong-code"}>
                            {translation.ForgotPassword.wrongCode}
                        </div>
                        <div className={"forgot-password-send-again"}>
                            {translation.ForgotPassword.sendAgain}
                        </div>
                    </div>
                    <div className={"forgot-password-input forgot-password-new-password"}>
                        <input type="text" id={"forgot-password-new-password"} required/>
                        <div className={"forgot-password-input-text"}>
                            {translation.ForgotPassword.newPassword}
                        </div>
                        <div className={"forgot-password-text-wrong-information forgot-password-wrong-new-password"}>
                            {translation.ForgotPassword.wrongPassword}
                        </div>
                    </div>
                    <div className={"forgot-password-input forgot-password-confirm-new-password"}>
                        <input type="text" id={"forgot-password-confirm-new-password"} required/>
                        <div className={"forgot-password-input-text"}>
                            {translation.ForgotPassword.repeatPassword}
                        </div>
                        <div className={"forgot-password-text-wrong-information forgot-password-wrong-new-password-confirm"}>
                            {translation.ForgotPassword.differentPasswords}
                        </div>
                    </div>
                    <div className={"forgot-password-finished"}>
                        <img src={accept} alt="password-chanded-icon"/>
                        <Link to={"/projekt-aplikacja/login"}>
                            {translation.ForgotPassword.changeOK}
                            <br/>
                            {translation.ForgotPassword.backToLogin}
                        </Link>
                    </div>
                </div>
                <div className={"forgot-password-buttons"}>
                    <div className={"forgot-password-button forgot-password-button-back"}>
                        {translation.ForgotPassword.back}
                    </div>
                    <div className={"forgot-password-button forgot-password-button-next"}>
                        {translation.ForgotPassword.next}
                    </div>
                </div>
                <div className={"forgot-password-back"}>
                    <Link to={"/projekt-aplikacja/login"}>
                        {translation.ForgotPassword.backToHomepage}
                    </Link>
                </div>
            </div>
        </>
    )
}
export default ForgotPassword;