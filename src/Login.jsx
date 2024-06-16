import './LoginPage.css'
import { Link } from "react-router-dom";
import { useLanguage } from './ChangeLanguage.jsx';
import logoimage from "./assets/logo.png"
import { useCookies } from "react-cookie";
import { useEffect } from "react";

const Login = () => {
    const { t: translation } = useLanguage();
    const [cookies, setCookie, removeCookies] = useCookies([]);

    const handleLogin = async () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        if (email === "" && password === "") {
            document.querySelector(".wrong-login-informations").innerHTML = translation.Login.emptyFields;
        }
        else if (email === "") {
            document.querySelector(".wrong-login-informations").innerHTML = translation.Login.emptyEmail;
        } else if (password === "") {
            document.querySelector(".wrong-login-informations").innerHTML = translation.Login.emptyPassword;
        } else {
            await fetch('http://localhost:8001/login/', {
                method: 'POST',
                headers: {
                    'UserID': '-1',
                    'Content-Type': 'application/json',
                    'Email': email,
                    'Password': password
                },
            }).then(response => {
                response.json().then(data => {
                    console.log(data);
                    if (data['login'] === "true") {
                        console.log("Logged in as: " + data.userID);
                        if (cookies.userID !== undefined) removeCookies('userID', { path: '/' })
                        setCookie('userID', parseInt(data.userID), { path: '/' });
                        if (cookies.field !== undefined) removeCookies('field', { path: '/' })
                        setCookie('field', data.field, { path: '/' });
                        window.location.href = "/projekt-aplikacja/";
                    } else {
                        document.querySelector(".wrong-login-informations").innerHTML = translation.Login.wrongData
                    }
                });
            });
        }
    }

    useEffect(() => {
        const handleEnterPress = (event) => {
            if (event.key === 'Enter') {
                handleLogin();
            }
        }
        document.addEventListener('keydown', handleEnterPress);
        return () => {
            document.removeEventListener('keydown', handleEnterPress);
        }
    }, []);

    return (
        <>
            <div className={"login-main-content"}>
                <div className={"login-left-content"}>
                    <div className={"login-email"}>
                        <label htmlFor="e-mail">{translation.Login.email}</label>
                        <input type="text" name={"e-mail"} placeholder={translation.Login.enterEmail} id={"email"} />
                    </div>
                    <div className={"login-password"}>
                        <label htmlFor="password">{translation.Login.password}</label>
                        <input type="password" name={"passowrd"} placeholder={translation.Login.enterPassword} id={"password"} />
                    </div>
                    <div className={"forgot-password"}>
                        <Link to={"/projekt-aplikacja/forgotpassword"}>
                            <p>{translation.Login.forgotPassword}</p>
                        </Link>
                    </div>
                    <div className={"wrong-login-informations"}>
                    </div>
                    <Link to={"/projekt-aplikacja/register"}>
                        <div className={"login-register"}>
                            <button>{translation.Login.registration}</button>
                        </div>
                    </Link>
                    <div className={"log-in"}>
                        <button onClick={handleLogin}>{translation.Login.logIn}</button>
                    </div>
                </div>
                <div className={"login-right-content"}>
                    <img src={logoimage} alt="logo" />
                </div>
            </div>
        </>
    )
}

export default Login;
