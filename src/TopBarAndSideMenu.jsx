import {Link} from "react-router-dom";
import {CloseMenu, OpenMenu} from "./OpenCloseMenu.jsx";
import './TopBarAndSideMenu.css'

const TopBarAndSideMenu = () => {
    return (
        <>
            <div className={"on-click-menu"} id={"on-click-menu"}>
                <div className={"on-click-menu-top-bar"}>
                    <div className={"on-click-menu-top-bar-home-page"}>
                        <Link to={"/projekt-aplikacja/homepage"}>
                            <img src={"./src/assets/homepage.png"} alt="homepage-icon"/>
                        </Link>
                    </div>
                    <div onClick={() => CloseMenu()} className={"on-click-menu-top-bar-close-menu"}>
                        <img src={"./src/assets/closemenu.png"} alt="close-menu-icon"/>
                    </div>
                </div>
                <div className={"on-click-menu-middle-content"}>
                    <Link to={"/projekt-aplikacja/timetable"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={"./src/assets/timetable.png"} alt="time-table-icon"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p id={"on-click-menu-timetable"}>Terminarz</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/taskslist"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={"./src/assets/taskslist.png"} alt="task-list-icon"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p>Lista Zadań</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/notes"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={"./src/assets/notes.png"} alt="notes-icion"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p>Notatki</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/announcements"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={"./src/assets/announcements.png"} alt="announcements-icion"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p>Ogłoszenia</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/subjects"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={"./src/assets/subjects.png"} alt="subjects-icion"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p>Przedmioty</p>
                            </div>
                        </div>
                    </Link>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <Link to={"/projekt-aplikacja/map"}>
                        <div className={"on-click-menu-middle-content-item"}>
                            <div className={"on-click-menu-middle-content-item-img"}>
                                <img src={"./src/assets/map.png"} alt="map-icion"/>
                            </div>
                            <div className={"on-click-menu-middle-content-item-text"}>
                                <p>Mapa</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={"on-click-menu-bottom-bar"}>
                    <div className={"on-click-menu-bottom-bar-item"}>
                        <img src={"./src/assets/settings.png"} alt="settings-icon"/>
                    </div>
                    <div className={"on-click-menu-bottom-bar-item"}>
                        <img src={"./src/assets/report.png"} alt="report-icon"/>
                    </div>
                    <div className={"on-click-menu-bottom-bar-item"}>
                        <img src={"./src/assets/ask.png"} alt="ask-icon"/>
                    </div>
                    <div className={"on-click-menu-bottom-bar-item"}>
                        <img src={"./src/assets/user.png"} alt="user-icon"/>
                    </div>
                </div>
            </div>
            <div className={"top-bar"} id={"top-bar"}>
                <div onClick={() => OpenMenu()} className={"hamburger-menu"}>
                    <img src={'./src/assets/h-icon.png'} alt="hamburger-menu-icon"/>
                </div>
                <div className={"weather"}>
                    <div className={"weather-bar"}>
                        <div className={"weather-bar-date"}>
                            <p>17 Maja 2024</p>
                        </div>
                        <div className={"weather-bar-time"}>
                            <p>15:00</p>
                        </div>
                        <div className={"weather-bar-icon"}>
                            <img src={'./src/assets/weather-sunny.png'} alt="weather-icon"/>
                        </div>
                    </div>
                </div>
                <div className={"user-icon"}>
                    <Link to={"/projekt-aplikacja/login"}>
                        <img src={'./src/assets/user.png'} alt="user-icon"/>
                    </Link>
                </div>
                <div className={"notification-bell"}>
                    <img src={'./src/assets/notification.png'} alt="notifications-icon"/>
                </div>
                <div className={"facilities"}>
                    <img src={'./src/assets/facilities.png'} alt="facilities-icon"/>
                </div>
            </div>
        </>
    )
}

export default TopBarAndSideMenu;