import { Link } from "react-router-dom";
import { CloseMenu, OpenMenu, OpenFacilitiesMenu, CloseFacilitiesMenu } from "./TopBarAndmenuFunctions.jsx";
import { useLanguage } from './ChangeLanguage.jsx';
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
import weathericon from "./assets/weather-sunny.png"
import notificationicon from "./assets/notification.png"
import facilitesicon from "./assets/facilities.png"
import polandflag from "./assets/pl.png"
import ukflag from "./assets/en.png"

const TopBarAndSideMenu = () => {
    const {t: translation, setLanguage} = useLanguage();
    return (
        <>
            <div className={"on-click-menu"} id={"on-click-menu"}>
                <div className={"on-click-menu-top-bar"}>
                    <div className={"on-click-menu-top-bar-home-page"}>
                        <Link to={"/projekt-aplikacja/homepage"}>
                            <img src={homeicon} alt="homepage-icon"/>
                        </Link>
                    </div>
                    <div onClick={() => CloseMenu()} className={"on-click-menu-top-bar-close-menu"}>
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
                                <p id={"on-click-menu-timetable"}>{translation.Homepage.timetable}</p>
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
                                <p>{translation.Homepage.tasksList}</p>
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
                                <p>{translation.Homepage.notes}</p>
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
                                <p>{translation.Homepage.news}</p>
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
                                <p>{translation.Homepage.subjects}</p>
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
                                <p>{translation.Homepage.map}</p>
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
                <div onClick={() => OpenMenu()} className={"hamburger-menu"}>
                    <img src={menuicon} alt="hamburger-menu-icon"/>
                </div>
                <div className={"weather"}>
                    <div className={"weather-bar"}>
                        <div className={"weather-bar-date"}>
                            <p>{translation.TopBar.day} {translation.TopBar.month} {translation.TopBar.year}</p>
                        </div>
                        <div className={"weather-bar-time"}>
                            <p>{translation.TopBar.time}</p>
                        </div>
                        <div className={"weather-bar-icon"}>
                            <img src={weathericon} alt="weather-icon"/>
                        </div>
                    </div>
                </div>
                <div className={"user-icon"}>
                    <Link to={"/projekt-aplikacja/login"}>
                        <img src={usericon} alt="user-icon"/>
                    </Link>
                </div>
                <div className={"notification-bell"}>
                    <img src={notificationicon} alt="notifications-icon"/>
                </div>
                <div className={"facilities"}>
                    <img src={facilitesicon} alt="facilities-icon" onClick={() => OpenFacilitiesMenu()}/>
                </div>
                <div className={"drop-down-menu-facilities"} id={"facilities-drop-down-menu"}>
                    <div className={"triangle"}></div>
                    <div className={"triangle-2"}></div>
                    <div className={"facilities-content"}>
                        <div className={"fonts font-small"}>
                            A
                        </div>
                        <div className={"fonts font-medium"}>
                            A
                        </div>
                        <div className={"fonts font-large"}>
                            A
                        </div>
                        <div className={"facilities-content-line"}></div>
                        <div className={"language-pl"}>
                            <img src={polandflag} alt="poland-flag" onClick={() => { setLanguage('pl'); CloseFacilitiesMenu(); }} />
                        </div>
                        <div className={"language-en"}>
                            <img src={ukflag} alt="uk-flag" onClick={() => { setLanguage('en'); CloseFacilitiesMenu(); }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopBarAndSideMenu;