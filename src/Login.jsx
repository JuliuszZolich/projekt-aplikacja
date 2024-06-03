import './LoginPage.css'
import {Link} from "react-router-dom";
import { useLanguage } from './ChangeLanguage.jsx';
import logoimage from "./assets/logo.png"

const Login = () => {
    const {t} = useLanguage();
    return (
        <>
            <div className={"login-main-content"}>
                <div className={"login-left-content"}>
                    <form action="">
                        <div className={"login-email"}>
                            <label htmlFor="e-mail">{t.Login.email}</label>
                            <input type="text" name={"e-mail"} placeholder={t.Login.enterEmail}/>
                        </div>
                        <div className={"login-password"}>
                            <label htmlFor="password">{t.Login.password}</label>
                            <input type="password" name={"passowrd"} placeholder={t.Login.enterPassword}/>
                        </div>
                    </form>
                    <div className={"forgot-password"}>
                        <p>{t.Login.forgotPassword}</p>
                    </div>
                    <Link to={"/projekt-aplikacja/register"}>
                        <div className={"login-register"}>
                            <button>{t.Login.registration}</button>
                        </div>
                    </Link>
                    <div className={"log-in"}>
                        <button>{t.Login.logIn}</button>
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