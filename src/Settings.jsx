import "./Settings.css"
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";

const Settings = () => {
    return(
        <>
            {TopBarAndSideMenu()}
            <div className={"settings-main-content"}>
                <div className={"settings-change-email"}>
                    <div className={"settings-title"}>
                        Zmiana e-mail
                    </div>
                    <div className={"settings-input"}>
                        <input type="text" required/>
                        <div className={"settings-input-text"}>
                            Wpisz nowy e-mail
                        </div>
                    </div>
                </div>
                <div className={"settings-change-password"}>
                    <div className={"settings-title"}>
                        Zmiana hasła
                    </div>
                    <div className={"settings-input"}>
                        <input type="password" required/>
                        <div className={"settings-input-text"}>
                            Wprowadz aktualne hasło
                        </div>
                    </div>
                    <div className={"settings-input"}>
                        <input type="password" required/>
                        <div className={"settings-input-text"}>
                            Wprowadz nowe hasło
                        </div>
                    </div>
                    <div className={"settings-input"}>
                        <input type="password" required/>
                        <div className={"settings-input-text"}>
                            Potwierdz hasło
                        </div>
                    </div>
                </div>
                <div className={"settings-set-main-language"}>
                    <div className={"settings-title"}>
                        Wybór głównego języka
                    </div>
                    <div className={"settings-button-pl"}>
                         Polski
                    </div>
                    <div className={"settings-button-en"}>
                        Angielski
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings;