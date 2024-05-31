import './LoginPage.css'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <>
            <div className={"login-main-content"}>
                <div className={"login-left-content"}>
                    <form action="">
                        <div className={"login-email"}>
                            <label htmlFor="e-mail">E-mail:</label>
                            <input type="text" name={"e-mail"} placeholder={"Wprowadz e-mail"}/>
                        </div>
                        <div className={"login-password"}>
                            <label htmlFor="password">Hasło:</label>
                            <input type="password" name={"passowrd"} placeholder={"Wprowadz hasło"}/>
                        </div>
                    </form>
                    <div className={"forgot-password"}>
                        <p>Nie pamiętasz hasła?</p>
                    </div>
                    <Link to={"/projekt-aplikacja/register"}>
                        <div className={"login-register"}>
                            <button>Zarejestruj się</button>
                        </div>
                    </Link>
                    <div className={"log-in"}>
                        <button>Zaloguj</button>
                    </div>
                </div>
                <div className={"login-right-content"}>
                    <img src={'./src/assets/logo.png'} alt="logo"/>
                </div>
            </div>
        </>
    )
}

export default Login;