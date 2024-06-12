import './LoginPage.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import logoimage from "./assets/logo.png"

const Login = () => {
    const {t: translation} = useLanguage();
    return (
        <>
            <div className={"login-main-content"}>
                <div className={"login-left-content"}>
                    <div className={"login-email"}>
                        <label htmlFor="e-mail">{translation.Login.email}</label>
                        <input type="text" name={"e-mail"} placeholder={translation.Login.enterEmail}/>
                    </div>
                    <div className={"login-password"}>
                        <label htmlFor="password">{translation.Login.password}</label>
                        <input type="password" name={"passowrd"} placeholder={translation.Login.enterPassword}/>
                    </div>
                    <div className={"forgot-password"}>
                        <p>{translation.Login.forgotPassword}</p>
                    </div>
                    <div className={"wrong-login-informations"}>
                        Błędny e-mail lub hasło!
                    </div>
                    <Link to={"/projekt-aplikacja/register"}>
                        <div className={"login-register"}>
                            <button>{translation.Login.registration}</button>
                        </div>
                    </Link>
                    <div className={"log-in"}>
                        <button>{translation.Login.logIn}</button>
                    </div>
                </div>
                <div className={"login-right-content"}>
                    <img src={logoimage} alt="logo"/>
                </div>
            </div>
        </>
    )
}

export default Login;