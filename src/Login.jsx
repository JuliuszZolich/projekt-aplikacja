import './LoginPage.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import logoimage from "./assets/logo.png"
import {useCookies} from "react-cookie";

const Login = () => {
    const {t: translation} = useLanguage();
    const [cookies, setCookie, removeCookies] = useCookies([]);
    return (
        <>
            <div className={"login-main-content"}>
                <div className={"login-left-content"}>
                    <div className={"login-email"}>
                        <label htmlFor="e-mail">{translation.Login.email}</label>
                        <input type="text" name={"e-mail"} placeholder={translation.Login.enterEmail} id={"email"}/>
                    </div>
                    <div className={"login-password"}>
                        <label htmlFor="password">{translation.Login.password}</label>
                        <input type="password" name={"passowrd"} placeholder={translation.Login.enterPassword}
                               id={"password"}/>
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
                        <button onClick={(async () => {
                            const email = document.getElementById("email").value;
                            const password = document.getElementById("password").value;
                            if(email === "" && password === ""){
                                document.querySelector(".wrong-login-informations").innerHTML = "Pola e-mail oraz hasło są puste!";
                            }
                            else if (email === "") {
                                document.querySelector(".wrong-login-informations").innerHTML = "Pole e-mail jest puste!";
                            } else if (password === "") {
                                document.querySelector(".wrong-login-informations").innerHTML = "Pole hasło jest puste!";
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
                                                if (cookies.userID !== undefined) removeCookies('userID', {path: '/'})
                                                setCookie('userID', parseInt(data.userID), {path: '/'});
                                                if (cookies.field !== undefined) removeCookies('field', {path: '/'})
                                                setCookie('field', data.field, {path: '/'});
                                                window.location.href = "/projekt-aplikacja/";
                                            } else {
                                                document.querySelector(".wrong-login-informations").innerHTML = "Błędne dane logowania!"
                                            }
                                        }
                                    );

                                });
                            }
                        })}
                        >{translation.Login.logIn}</button>
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