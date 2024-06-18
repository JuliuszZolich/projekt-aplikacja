import "./css/Settings.css";
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import {useCookies} from "react-cookie";
import {OnClickPlay} from "./AudioFunctions.jsx";

const handleKeyDown = (event, callback) => {
    if (event.key === 'Enter') {
        callback();
    }
};

async function changeField(user_id, field, value) {
    let data = {
        userid: user_id,
        field: field,
        value: value
    };

    await fetch("/api/settings", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
}

const Settings = () => {
    const {t: translation, language, setLanguage} = useLanguage();
    const [cookies] = useCookies([]);

    const handleChangePassword = () => {
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
        changeField(cookies.userID, "password", newPass);
    }

    const handleChangeEmail = () => {
        const newEmail = document.getElementById("newEmail").value;
        if (newEmail === "") {
            document.querySelector(".settings-wrong-email").style.display = "block";
            return;
        }
        changeField(cookies.userID, "email", newEmail);
    }

    return (
        <>
            <TopBarAndSideMenu/>
            <div className={"settings-main-content"}>
                <div className={"settings-change-email"}>
                    <div className={"settings-title side-menu-p"}>
                        {translation.Settings.changeEmail}
                        <div className={"settings-button-email"} tabIndex="0"
                             onClick={() => {
                                 handleChangeEmail()
                             }}
                             onKeyDown={(e) => handleKeyDown(e, () => {
                                 handleChangeEmail()
                             })}>
                            {translation.Settings.save}
                        </div>
                    </div>
                    <div className={"settings-wrong-email"}
                         style={{display: "none"}}
                    >
                        {translation.Settings.emailFieldEmpty}
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
                        <div className={"settings-button-change-password"} tabIndex="0"
                             onClick={() => {
                                 handleChangePassword()
                             }}
                             onKeyDown={(e) => handleKeyDown(e, () => {
                                 handleChangePassword()
                             })}>
                            {translation.Settings.save}
                        </div>
                    </div>
                    <div className={"settings-wrong-change-password"}
                         style={{display: "none"}}
                    >
                        {translation.Settings.passwordFieldEmpty}
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
                <div className={"settings-set-main-language"} onClick={() => OnClickPlay("user")}>
                    <div className={"settings-title side-menu-p"}>
                        {translation.Settings.mainLanguage}
                    </div>
                    <div
                        className={`settings-button-pl home-p ${language === 'pl' ? 'active-language' : 'disabled-language'}`}
                        tabIndex="0"
                        onClick={() => {setLanguage('pl')}}
                        onKeyDown={(e) => handleKeyDown(e, () => setLanguage('pl'))}
                    >
                        {translation.Settings.pl}
                    </div>
                    <div
                        className={`settings-button-en home-p ${language === 'en' ? 'active-language' : 'disabled-language'}`}
                        tabIndex="0"
                        onClick={() => {setLanguage('en')}}
                        onKeyDown={(e) => handleKeyDown(e, () => setLanguage('en'))}
                    >
                        {translation.Settings.en}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;
