import {Link} from "react-router-dom";
import {
    CloseMenu,
    OpenMenu,
    OpenFacilitiesMenu,
    CloseFacilitiesMenu,
    ChangeFontSize,
    setFontSize,
    widget,
    OpenNotifications,
    CloseNotifications,
    OpenUserMenu,
    CloseUserMenu
}
    from
        "./TopBarAndmenuFunctions.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import './TopBarAndSideMenu.css'
import timetableicon from "./assets/timetable.png"
import announcementsicon from "./assets/announcements.png"
import taskslisticon from "./assets/taskslist.png"
import notesicon from "./assets/notes.png"
import mapicon from "./assets/map.png"
import subjectsicon from "./assets/subjects.png"
import settingsicon from "./assets/settings.png"
import homeicon from "./assets/homepage.png"
import closemenuicon from "./assets/closemenu.png"
import reporticon from "./assets/report.png"
import askicon from "./assets/ask.png"
import usericon from "./assets/user.png"
import menuicon from "./assets/h-icon.png"
import notificationicon from "./assets/notification.png"
import facilitesicon from "./assets/facilities.png"
import polandflag from "./assets/pl.png"
import ukflag from "./assets/en.png"
import {useEffect, useRef} from "react";

const TopBarAndSideMenu = () => {
    const {t: translation, setLanguage} = useLanguage();
    const didEffectRun = useRef(false);
    useEffect(() => {
        widget();
        OpenMenu();
        CloseMenu();
        OpenFacilitiesMenu();
        OpenNotifications();
        CloseNotifications();
        OpenUserMenu();
        CloseUserMenu();
    }, []);
    useEffect(() => {
        setInterval(() => {
            widget();
        }, 20000);
    }, []);
    useEffect(() => {
        if (!didEffectRun.current) {
            setFontSize();
            didEffectRun.current = true;
        }
    }, []);

    return (
        <>
            <div className={"on-click-menu"} id={"on-click-menu"}>
                <div className={"on-click-menu-top-bar"}>
                    <div className={"on-click-menu-top-bar-home-page"}>
                        <Link to={"/projekt-aplikacja/homepage"}>
                            <img src={homeicon} alt="homepage-icon"/>
                        </Link>
                    </div>
                    <div className={"on-click-menu-top-bar-close-menu"}>
                        <img src={closemenuicon} alt="close-menu-icon"/>
                    </div>
                </div>
                <div className={"on-click-menu-middle-content"}>
                    <Link to={"/projekt-aplikacja/timetable"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={timetableicon} alt="time-table-icon"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p className={"side-menu-p"}
                                   id={"on-click-menu-timetable"}>{translation.Homepage.timetable}</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/taskslist"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={taskslisticon} alt="task-list-icon"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p className={"side-menu-p"}>{translation.Homepage.tasksList}</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/notes"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={notesicon} alt="notes-icion"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p className={"side-menu-p"}>{translation.Homepage.notes}</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/announcements"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={announcementsicon} alt="announcements-icion"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p className={"side-menu-p"}>{translation.Homepage.news}</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/subjects"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={subjectsicon} alt="subjects-icion"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p className={"side-menu-p"}>{translation.Homepage.subjects}</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/map"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={mapicon} alt="map-icion"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p className={"side-menu-p"}>{translation.Homepage.map}</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={"on-click-menu-bottom-bar"}>
                    <div className={"on-click-menu-bottom-bar-item"}>
                        <img src={settingsicon} alt="settings-icon"/>
                    </div>
                    <div className={"on-click-menu-bottom-bar-item"}>
                        <img src={reporticon} alt="report-icon"/>
                    </div>
                    <div className={"on-click-menu-bottom-bar-item"}>
                        <img src={askicon} alt="ask-icon"/>
                    </div>
                    <div className={"on-click-menu-bottom-bar-item"}>
                        <img src={usericon} alt="user-icon"/>
                    </div>
                </div>
            </div>
            <div className={"top-bar"} id={"top-bar"}>
                <div className={"hamburger-menu"}>
                    <img src={menuicon} alt="hamburger-menu-icon"/>
                </div>
                <div className={"weather"}>
                    <div className={"weather-bar"}>
                        <div className={"weather-bar-date"}>
                            <p id={"weather-bar-date"}></p>
                        </div>
                        <div className={"weather-bar-time"}>
                            <p id={"weather-bar-time"}></p>
                        </div>
                        <div className={"weather-bar-icon"}>
                            <img id={"weather-icon"} alt="weather-icon"/>
                        </div>
                    </div>
                </div>
                <div className={"user-icon"}>
                    <img src={usericon} alt="user-icon" className={"open-user-menu"}/>
                    <div className={"user-menu"}>
                        <Link to={"/projekt-aplikacja/myprofile"}>
                            <div className={"user-menu-item"}>
                                Mój Profil
                            </div>
                        </Link>
                        <Link to={"/projekt-aplikacja/settings"}>
                            <div className={"user-menu-item"}>
                                Ustawienia
                            </div>
                        </Link>
                        <div className={"user-menu-item user-menu-item-last"}>
                            Wyloguj
                        </div>
                    </div>
                </div>
                <div className={"notification-bell"}>
                    <img src={notificationicon} alt="notifications-icon" className={"open-notifications"}/>
                    <div className={"drop-down-notifications"}>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                        <div className={"drop-down-notifications-item-line"}></div>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                        <div className={"drop-down-notifications-item-line"}></div>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                        <div className={"drop-down-notifications-item-line"}></div>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                        <div className={"drop-down-notifications-item-line"}></div>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                        <div className={"drop-down-notifications-item-line"}></div>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                        <div className={"drop-down-notifications-item-line"}></div>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                        <div className={"drop-down-notifications-item-line"}></div>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                        <div className={"drop-down-notifications-item-line"}></div>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                        <div className={"drop-down-notifications-item-line"}></div>
                        <div className={"drop-down-notifications-item"}>
                            <div className={"drop-down-notifications-item-text"}>
                                KOLOS AOI
                            </div>
                            <div className={"drop-down-notifications-item-when"}>
                                Po jutrze!
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"facilities"}>
                    <img src={facilitesicon} alt="facilities-icon" className={"open"}/>
                    <div className={"drop-down-menu-facilities"} id={"facilities-drop-down-menu"}>
                        <div className={"facilities-content"}>
                            <div className={"fonts font-small close-facilities-menu"} onClick={() => {
                                ChangeFontSize('s');
                                CloseFacilitiesMenu();
                            }}>
                                A
                            </div>
                            <div className={"fonts font-medium close-facilities-menu"} onClick={() => {
                                ChangeFontSize('m');
                                CloseFacilitiesMenu();
                            }}>
                                A
                            </div>
                            <div className={"fonts font-large close-facilities-menu"} onClick={() => {
                                ChangeFontSize('l');
                                CloseFacilitiesMenu();
                            }}>
                                A
                            </div>
                            <div className={"facilities-content-line"}></div>
                            <div className={"language-pl"}>
                                <img className={"close-facilities-menu"} src={polandflag} alt="poland-flag"
                                     onClick={() => {
                                         setLanguage('pl');
                                         CloseFacilitiesMenu();
                                     }}/>
                            </div>
                            <div className={"language-en"}>
                                <img className={"close-facilities-menu"} src={ukflag} alt="uk-flag" onClick={() => {
                                    setLanguage('en');
                                    CloseFacilitiesMenu();
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBarAndSideMenu;