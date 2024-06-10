import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Homepage.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import timetableicon from "./assets/timetable.png"
import announcementsicon from "./assets/announcements.png"
import taskslisticon from "./assets/taskslist.png"
import notesicon from "./assets/notes.png"
import mapicon from "./assets/map.png"
import subjectsicon from "./assets/subjects.png"
import settingsicon from "./assets/settings.png"
import logoimage from "./assets/logo.png"
import {useEffect} from "react";
import {widget} from "./TopBarAndmenuFunctions.jsx";

const Homepage = () => {
    const {t: translation} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className="main-content">
                <div className={"menu"}>
                    <Link to={"/projekt-aplikacja/timetable"}>
                        <div className={"menu-item timetable"}>
                            <img src={timetableicon} alt="timetable-icon"/>
                            <p className={"home-p"}>{translation.Homepage.timetable}</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/announcements"}>
                        <div className={"menu-item announcements"}>
                            <img src={announcementsicon} alt="announcements-icon"/>
                            <p className={"home-p"}>{translation.Homepage.news}</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/taskslist"}>
                        <div className={"menu-item tasks-list"}>
                            <img src={taskslisticon} alt="tasks-list-icon"/>
                            <p className={"home-p"}>{translation.Homepage.tasksList}</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/notes"}>
                        <div className={"menu-item notes"}>
                            <img src={notesicon} alt="notes-icon"/>
                            <p className={"home-p"}>{translation.Homepage.notes}</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/map"}>
                        <div className={"menu-item map"}>
                            <img src={mapicon} alt="map-icon"/>
                            <p className={"home-p"}>{translation.Homepage.map}</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/subjects"}>
                        <div className={"menu-item subjects"}>
                            <img src={subjectsicon} alt="subjects-icon"/>
                            <p className={"home-p"}>{translation.Homepage.subjects}</p>
                        </div>
                    </Link>
                    <Link to={"/projekt-aplikacja/settings"} className={"menu-item-last"}>
                        <div className={"menu-item settings"}>
                            <img src={settingsicon} alt="settings-icon"/>
                            <p className={"home-p"}>{translation.Homepage.settings}</p>
                        </div>
                    </Link>
                </div>
                <div className={"logo"}>
                    <img src={logoimage} alt="logo"/>
                </div>
            </div>
        </>
    )
}

export default Homepage;