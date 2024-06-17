import "./css/Settings.css";
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {useLanguage} from './ChangeLanguage.jsx';

const Settings = () => {
    const {t: translation, language, setLanguage} = useLanguage();

    return (
        <>
            <TopBarAndSideMenu/>
            <div className={"settings-main-content"}>
                <div className={"settings-change-email"}>
                    <div className={"settings-title side-menu-p"}>
                        {translation.Settings.changeEmail}
                        <div className={"settings-button-email"}
                                onClick={() => {
                                    const newEmail = document.getElementById("newEmail").value;
                                    if (newEmail === "") {
                                        document.querySelector(".settings-wrong-email").style.display = "block";
                                        return;
                                    }
                                }}
                        >
                            Zapisz
                        </div>
                    </div>
                    <div className={"settings-wrong-email"}
                         style={{display: "none"}}
                    >
                        Pole do zmiany e-maila jest puste
                    </div>
                    <div className={"settings-input"}>
                        <input type="text" id={"newEmail"} required/>
                        <div className={"settings-input-text home-p"}>
                            {translation.Settings.newEmail}
                        </div>
                    </div>
                </div>
                <div className={"settings-change-password"}>
                    <div className={"settings-title side-menu-p"}>
                        {translation.Settings.changePassword}
                        <div className={"settings-button-change-password"}
                             onClick={() => {
                                 const currPass = document.getElementById("currPass").value;
                                 const newPass = document.getElementById("newPass").value;
                                 const newPassConfirm = document.getElementById("newPassConfirm").value;
                                 if (currPass === "" || newPass === "" || newPassConfirm === "") {
                                     document.querySelector(".settings-wrong-change-password").style.display = "block";
                                     return;
                                 }
                                 if (newPass !== newPass) {
                                     document.querySelector(".settings-wrong-change-password").style.display = "block";
                                     return;
                                 }
                             }}>
                            Zapisz
                        </div>
                    </div>
                    <div className={"settings-wrong-change-password"}
                         style={{display: "none"}}
                    >
                        Pole do zmiany hasła jest puste
                    </div>
                    <div className={"settings-input"}>
                        <input type="password" id={"currPass"} required/>
                        <div className={"settings-input-text home-p"}>
                            {translation.Settings.currentPassword}
                        </div>
                    </div>
                    <div className={"settings-input"}>
                        <input type="password" id={"newPass"} required/>
                        <div className={"settings-input-text home-p"}>
                            {translation.Settings.newPassword}
                        </div>
                    </div>
                    <div className={"settings-input"}>
                        <input type="password" id={"newPassConfirm"} required/>
                        <div className={"settings-input-text home-p"}>
                            {translation.Settings.confirmPassword}
                        </div>
                    </div>
                </div>
                <div className={"settings-set-main-language"}>
                    <div className={"settings-title side-menu-p"}>
                        {translation.Settings.mainLanguage}
                    </div>
                    <div
                        className={`settings-button-pl home-p ${language === 'pl' ? 'active-language' : 'disabled-language'}`}
                        onClick={() => setLanguage('pl')}
                    >
                        {translation.Settings.pl}
                    </div>
                    <div
                        className={`settings-button-en home-p ${language === 'en' ? 'active-language' : 'disabled-language'}`}
                        onClick={() => setLanguage('en')}
                    >
                        {translation.Settings.en}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;
