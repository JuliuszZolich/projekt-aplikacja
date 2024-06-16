import "./css/Settings.css";
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import { useLanguage } from './ChangeLanguage.jsx';

const Settings = () => {
    const { t: translation, language, setLanguage } = useLanguage();

    return (
        <>
            <TopBarAndSideMenu />
            <div className={"settings-main-content"}>
                <div className={"settings-change-email"}>
                    <div className={"settings-title side-menu-p"}>
                        {translation.Settings.changeEmail}
                        <div className={"settings-button-email"}>
                            Zapisz
                        </div>
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
                        <div className={"settings-button-change-password"}>
                            Zapisz
                        </div>
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
