import "./Settings.css";
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import { useLanguage } from './ChangeLanguage.jsx';

const Settings = () => {
    const {t: translation, setLanguage} = useLanguage();
    return (
        <>
            <TopBarAndSideMenu />
            <div className={"settings-main-content"}>
                <div className={"settings-change-email"}>
                    <div className={"settings-title side-menu-p"}>
                        {translation.Settings.changeEmail}
                    </div>
                    <div className={"settings-input"}>
                        <input type="text" required />
                        <div className={"settings-input-text home-p"}>
                            {translation.Settings.newEmail}
                        </div>
                    </div>
                </div>
                <div className={"settings-change-password"}>
                    <div className={"settings-title side-menu-p"}>
                        {translation.Settings.changePassword}
                    </div>
                    <div className={"settings-input"}>
                        <input type="password" required />
                        <div className={"settings-input-text home-p"}>
                            {translation.Settings.currentPassword}
                        </div>
                    </div>
                    <div className={"settings-input"}>
                        <input type="password" required />
                        <div className={"settings-input-text home-p"}>
                            {translation.Settings.newPassword}
                        </div>
                    </div>
                    <div className={"settings-input"}>
                        <input type="password" required />
                        <div className={"settings-input-text home-p"}>
                            {translation.Settings.confirmPassword}
                        </div>
                    </div>
                </div>
                <div className={"settings-set-main-language"}>
                    <div className={"settings-title side-menu-p"}>
                        {translation.Settings.mainLanguage}
                    </div>
                    <div className={"settings-button-pl home-p"} onClick={() => setLanguage('pl')}>
                        {translation.Settings.pl}
                    </div>
                    <div className={"settings-button-en home-p"} onClick={() => setLanguage('en')}>
                        {translation.Settings.en}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Settings;
