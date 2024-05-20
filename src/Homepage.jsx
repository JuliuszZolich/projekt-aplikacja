import {CloseMenu, OpenMenu} from './OpenCloseMenu.jsx'

const Homepage = () => {
    return (
        <>
            <div className={"on-click-menu"} id={"on-click-menu"}>
                <div className={"on-click-menu-top-bar"}>
                    <div className={"on-click-menu-top-bar-home-page"}>
                        <img src={"./src/assets/homepage.png"} alt="homepage-icon"/>
                    </div>
                    <div onClick={() => CloseMenu()} className={"on-click-menu-top-bar-close-menu"}>
                        <img src={"./src/assets/closemenu.png"} alt="close-menu-icon"/>
                    </div>
                </div>
                <div className={"on-click-menu-middle-content"}>
                    <div className={"on-click-menu-middle-content-item"}>
                        <div className={"on-click-menu-middle-content-item-img"}>
                            <img src={"./src/assets/timetable.png"} alt="time-table-icon"/>
                        </div>
                        <div className={"on-click-menu-middle-content-item-text"}>
                            <p id={"on-click-menu-timetable"}>Terminarz</p>
                        </div>
                    </div>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <div className={"on-click-menu-middle-content-item"}>
                        <div className={"on-click-menu-middle-content-item-img"}>
                            <img src={"./src/assets/taskslist.png"} alt="task-list-icon"/>
                        </div>
                        <div className={"on-click-menu-middle-content-item-text"}>
                            <p>Lista Zadań</p>
                        </div>
                    </div>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <div className={"on-click-menu-middle-content-item"}>
                        <div className={"on-click-menu-middle-content-item-img"}>
                            <img src={"./src/assets/notes.png"} alt="notes-icion"/>
                        </div>
                        <div className={"on-click-menu-middle-content-item-text"}>
                            <p>Notatki</p>
                        </div>
                    </div>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <div className={"on-click-menu-middle-content-item"}>
                        <div className={"on-click-menu-middle-content-item-img"}>
                            <img src={"./src/assets/announcements.png"} alt="announcements-icion"/>
                        </div>
                        <div className={"on-click-menu-middle-content-item-text"}>
                            <p>Ogłoszenia</p>
                        </div>
                    </div>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <div className={"on-click-menu-middle-content-item"}>
                        <div className={"on-click-menu-middle-content-item-img"}>
                            <img src={"./src/assets/subjects.png"} alt="subjects-icion"/>
                        </div>
                        <div className={"on-click-menu-middle-content-item-text"}>
                            <p>Przedmioty</p>
                        </div>
                    </div>
                    <hr className={"on-click-menu-middle-content-line"}/>
                    <div className={"on-click-menu-middle-content-item"}>
                        <div className={"on-click-menu-middle-content-item-img"}>
                            <img src={"./src/assets/map.png"} alt="map-icion"/>
                        </div>
                        <div className={"on-click-menu-middle-content-item-text"}>
                            <p>Mapa</p>
                        </div>
                    </div>
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
            <div className={"top-bar"}>
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
                        <img src={'./src/assets/user.png'} alt="user-icon"/>
                    </div>
                <div className={"notification-bell"}>
                    <img src={'./src/assets/notification.png'} alt="notifications-icon"/>
                </div>
            </div>
            <div className="main-content">
                <div className={"menu"}>
                    <div className={"menu-item timetable"}>
                        <img src={'./src/assets/timetable.png'} alt="timetable-icon"/>
                        <p>Terminarz</p>
                    </div>
                    <div className={"menu-item announcements"}>
                        <img src={'./src/assets/announcements.png'} alt="announcements-icon"/>
                        <p>Ogłoszenia</p>
                    </div>
                    <div className={"menu-item tasks-list"}>
                        <img src={'./src/assets/taskslist.png'} alt="tasks-list-icon"/>
                        <p>Lista Zadań</p>
                    </div>
                    <div className={"menu-item notes"}>
                        <img src={'./src/assets/notes.png'} alt="notes-icon"/>
                        <p>Notatki</p>
                    </div>
                    <div className={"menu-item map"}>
                        <img src={'./src/assets/map.png'} alt="map-icon"/>
                        <p>Mapa</p>
                    </div>
                    <div className={"menu-item subjects"}>
                        <img src={'./src/assets/subjects.png'} alt="subjects-icon"/>
                        <p>Przedmioty</p>
                    </div>
                    <div className={"menu-item settings menu-item-last"}>
                        <img src={'./src/assets/settings.png'} alt="settings-icon"/>
                        <p>Ustawienia</p>
                    </div>
                </div>
                <div className={"logo"}>
                    <img src={'./src/assets/logo.png'} alt="logo"/>
                </div>
            </div>
        </>
    )
}

export default Homepage;