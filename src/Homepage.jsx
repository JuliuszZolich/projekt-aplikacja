import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Homepage.css'
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <>
            {TopBarAndSideMenu()}
            <div className="main-content">
                <div className={"menu"}>
                    <Link to={"/projekt-aplikacja/timetable"}>
                        <div className={"menu-item timetable"}>
                            <img src={'./src/assets/timetable.png'} alt="timetable-icon"/>
                            <p>Terminarz</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/announcements"}>
                        <div className={"menu-item announcements"}>
                            <img src={'./src/assets/announcements.png'} alt="announcements-icon"/>
                            <p>Ogłoszenia</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/taskslist"}>
                        <div className={"menu-item tasks-list"}>
                            <img src={'./src/assets/taskslist.png'} alt="tasks-list-icon"/>
                            <p>Lista Zadań</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/notes"}>
                        <div className={"menu-item notes"}>
                            <img src={'./src/assets/notes.png'} alt="notes-icon"/>
                            <p>Notatki</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/map"}>
                        <div className={"menu-item map"}>
                            <img src={'./src/assets/map.png'} alt="map-icon"/>
                            <p>Mapa</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/subjects"}>
                        <div className={"menu-item subjects"}>
                            <img src={'./src/assets/subjects.png'} alt="subjects-icon"/>
                            <p>Przedmioty</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/settings"} className={"menu-item-last"}>
                        <div className={"menu-item settings"}>
                            <img src={'./src/assets/settings.png'} alt="settings-icon"/>
                            <p>Ustawienia</p>
                        </div>
                    </Link>
                </div>
                <div className={"logo"}>
                    <img src={'./src/assets/logo.png'} alt="logo"/>
                </div>
            </div>
        </>
    )
}

export default Homepage;