import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Homepage.css'

const Homepage = () => {
    return (
        <>
            {TopBarAndSideMenu()}
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