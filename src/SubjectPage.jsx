import './Subjects.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";
import {changeScenery} from "./SubjectsFunctions.jsx"

const SubjectPage = () => {
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"subject-page-main-content"}>
                <div className={"subject-page-main-content-top-bar"}>
                    <Link to={"/projekt-aplikacja/subjects"}>
                        <div className={"subject-page-main-content-top-bar-item back"}>
                            <div className={"back-image"}>
                                <img src={'./src/assets/arrowback.png'} alt="back-icon"/>
                            </div>
                            <div className={"back-text"}>
                                Powrót
                            </div>
                        </div>
                    </Link>
                    <div className={"subject-page-main-content-top-bar-item lectures"} onClick={() => changeScenery(1)}>
                        Wykłady
                    </div>
                    <div className={"subject-page-main-content-top-bar-item exercises"}>
                        Ćwiczenia
                    </div>
                    <div className={"subject-page-main-content-top-bar-item subjects-page-announcements"} onClick={() => changeScenery(2)}>
                        Ogłoszenia
                    </div>
                    <div className={"subject-page-main-content-top-bar-item marks"} onClick={() => changeScenery(3)}>
                        Oceny
                    </div>
                    <div className={"subject-page-main-content-top-bar-subject-name"}>
                        Komunikacja Człowiek-Komputer
                    </div>
                </div>
                <div className={"subject-page-middle-content-lectures"}  id={"lectures"}>
                    <div className={"subject-page-middle-content-lectures-left"}>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={'./src/assets/file.png'} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text"}>
                                Wyklad 1
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-lectures-right"}>
                        <div className={"teacher"}>
                            <div className={"header"}>
                                Prowadzący:
                            </div>
                            <div className={"teacher-name"}>
                                lorem ipsum
                            </div>
                        </div>
                        <div className={"contact"}>
                            <div className={"header"}>
                                Kontakt:
                            </div>
                            <div className={"contact-img"}>
                                <img src={'./src/assets/mail.png'} alt="mail-icon"/>
                            </div>
                            <div className={"contact-text"}>
                                loremipsum@gmail.com
                            </div>
                        </div>
                        <div className={"subject-location"}>
                            <div className={"header"}>
                                Lokalizacja:
                            </div>
                            <div className={"subject-location-item"}>
                                <div className={"subject-location-item-img"}>
                                    <img src={'./src/assets/building.png'} alt="building-icon"/>
                                </div>
                                <div className={"subject-location-item-text"}>
                                    A21
                                </div>
                            </div>
                            <div className={"subject-location-item"}>
                                <div className={"subject-location-item-img"}>
                                    <img src={'./src/assets/room.png'} alt="room-icon"/>
                                </div>
                                <div className={"subject-location-item-text"}>
                                    E2
                                </div>
                                <div className={"subject-location-find"}>
                                    <img src={'./src/assets/location.png'} alt="location-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements"} id={"announcements"}>
                    <div className={"subject-page-middle-content-announcements-item"}>
                        <div className={"subject-page-middle-content-announcements-item-top"}>
                            <div className={"top-title"}>
                                Poprawa Kolokwium
                            </div>
                            <div className={"top-date"}>
                                <div className={"top-date-img"}>
                                    <img src={'./src/assets/clock.png'} alt="clock-icon"/>
                                </div>
                                <div className={"top-date-text"}>
                                    26.06.2024
                                </div>
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-author"}>
                            Dr. inż. Jacek Kabziński
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-bottom"}>
                            Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                            odbędzie. Nowy termin wykładu to 03.12.2023 r.
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item"}>
                        <div className={"subject-page-middle-content-announcements-item-top"}>
                            <div className={"top-title"}>
                                Poprawa Kolokwium
                            </div>
                            <div className={"top-date"}>
                                <div className={"top-date-img"}>
                                    <img src={'./src/assets/clock.png'} alt="clock-icon"/>
                                </div>
                                <div className={"top-date-text"}>
                                    26.06.2024
                                </div>
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-author"}>
                            Dr. inż. Jacek Kabziński
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-bottom"}>
                            Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                            odbędzie. Nowy termin wykładu to 03.12.2023 r.
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item"}>
                        <div className={"subject-page-middle-content-announcements-item-top"}>
                            <div className={"top-title"}>
                                Poprawa Kolokwium
                            </div>
                            <div className={"top-date"}>
                                <div className={"top-date-img"}>
                                    <img src={'./src/assets/clock.png'} alt="clock-icon"/>
                                </div>
                                <div className={"top-date-text"}>
                                    26.06.2024
                                </div>
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-author"}>
                            Dr. inż. Jacek Kabziński
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-bottom"}>
                            Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                            odbędzie. Nowy termin wykładu to 03.12.2023 r.
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item"}>
                        <div className={"subject-page-middle-content-announcements-item-top"}>
                            <div className={"top-title"}>
                                Poprawa Kolokwium
                            </div>
                            <div className={"top-date"}>
                                <div className={"top-date-img"}>
                                    <img src={'./src/assets/clock.png'} alt="clock-icon"/>
                                </div>
                                <div className={"top-date-text"}>
                                    26.06.2024
                                </div>
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-author"}>
                            Dr. inż. Jacek Kabziński
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-bottom"}>
                            Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                            odbędzie. Nowy termin wykładu to 03.12.2023 r.
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item"}>
                        <div className={"subject-page-middle-content-announcements-item-top"}>
                            <div className={"top-title"}>
                                Poprawa Kolokwium
                            </div>
                            <div className={"top-date"}>
                                <div className={"top-date-img"}>
                                    <img src={'./src/assets/clock.png'} alt="clock-icon"/>
                                </div>
                                <div className={"top-date-text"}>
                                    26.06.2024
                                </div>
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-author"}>
                            Dr. inż. Jacek Kabziński
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-bottom"}>
                            Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                            odbędzie. Nowy termin wykładu to 03.12.2023 r.
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item"}>
                        <div className={"subject-page-middle-content-announcements-item-top"}>
                            <div className={"top-title"}>
                                Poprawa Kolokwium
                            </div>
                            <div className={"top-date"}>
                                <div className={"top-date-img"}>
                                    <img src={'./src/assets/clock.png'} alt="clock-icon"/>
                                </div>
                                <div className={"top-date-text"}>
                                    26.06.2024
                                </div>
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-author"}>
                            Dr. inż. Jacek Kabziński
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-bottom"}>
                            Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                            odbędzie. Nowy termin wykładu to 03.12.2023 r.
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item"}>
                        <div className={"subject-page-middle-content-announcements-item-top"}>
                            <div className={"top-title"}>
                                Poprawa Kolokwium
                            </div>
                            <div className={"top-date"}>
                                <div className={"top-date-img"}>
                                    <img src={'./src/assets/clock.png'} alt="clock-icon"/>
                                </div>
                                <div className={"top-date-text"}>
                                    26.06.2024
                                </div>
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-author"}>
                            Dr. inż. Jacek Kabziński
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-bottom"}>
                            Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                            odbędzie. Nowy termin wykładu to 03.12.2023 r.
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item"}>
                        <div className={"subject-page-middle-content-announcements-item-top"}>
                            <div className={"top-title"}>
                                Poprawa Kolokwium
                            </div>
                            <div className={"top-date"}>
                                <div className={"top-date-img"}>
                                    <img src={'./src/assets/clock.png'} alt="clock-icon"/>
                                </div>
                                <div className={"top-date-text"}>
                                    26.06.2024
                                </div>
                            </div>
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-author"}>
                            Dr. inż. Jacek Kabziński
                        </div>
                        <div className={"subject-page-middle-content-announcements-item-bottom"}>
                            Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                            odbędzie. Nowy termin wykładu to 03.12.2023 r.
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-marks"} id={"marks"}>
                    <div className={"subject-page-middle-content-marks-item"}>
                        <div className={"marks-item-title"}>
                            Kolokwium I
                        </div>
                        <div className={"marks-item-points"}>
                            <div className={"marks-item-points-text"}>
                                16/20
                            </div>
                            <div className={"marks-item-points-progress-bar"}>
                                <div className={"inner"}></div>
                                <div className={"fill"}></div>
                            </div>
                        </div>
                        <div className={"marks-item-bottom"}>
                            <div className={"marks-item-bottom-text"}>
                                Ocena:
                            </div>
                            <div className={"marks-item-bottom-mark"}>
                                4
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-marks-item"}>
                        <div className={"marks-item-title"}>
                            Kolokwium I
                        </div>
                        <div className={"marks-item-points"}>
                            <div className={"marks-item-points-text"}>
                                16/20
                            </div>
                            <div className={"marks-item-points-progress-bar"}>
                                <div className={"inner"}></div>
                                <div className={"fill"}></div>
                            </div>
                        </div>
                        <div className={"marks-item-bottom"}>
                            <div className={"marks-item-bottom-text"}>
                                Ocena:
                            </div>
                            <div className={"marks-item-bottom-mark"}>
                                4
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-marks-item"}>
                        <div className={"marks-item-title"}>
                            Kolokwium I
                        </div>
                        <div className={"marks-item-points"}>
                            <div className={"marks-item-points-text"}>
                                16/20
                            </div>
                            <div className={"marks-item-points-progress-bar"}>
                                <div className={"inner"}></div>
                                <div className={"fill"}></div>
                            </div>
                        </div>
                        <div className={"marks-item-bottom"}>
                            <div className={"marks-item-bottom-text"}>
                                Ocena:
                            </div>
                            <div className={"marks-item-bottom-mark"}>
                                4
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-marks-item"}>
                        <div className={"marks-item-title"}>
                            Kolokwium I
                        </div>
                        <div className={"marks-item-points"}>
                            <div className={"marks-item-points-text"}>
                                16/20
                            </div>
                            <div className={"marks-item-points-progress-bar"}>
                                <div className={"inner"}></div>
                                <div className={"fill"}></div>
                            </div>
                        </div>
                        <div className={"marks-item-bottom"}>
                            <div className={"marks-item-bottom-text"}>
                                Ocena:
                            </div>
                            <div className={"marks-item-bottom-mark"}>
                                4
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-marks-item"}>
                        <div className={"marks-item-title"}>
                            Kolokwium I
                        </div>
                        <div className={"marks-item-points"}>
                            <div className={"marks-item-points-text"}>
                                16/20
                            </div>
                            <div className={"marks-item-points-progress-bar"}>
                                <div className={"inner"}></div>
                                <div className={"fill"}></div>
                            </div>
                        </div>
                        <div className={"marks-item-bottom"}>
                            <div className={"marks-item-bottom-text"}>
                                Ocena:
                            </div>
                            <div className={"marks-item-bottom-mark"}>
                                4
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-marks-item"}>
                        <div className={"marks-item-title"}>
                            Kolokwium I
                        </div>
                        <div className={"marks-item-points"}>
                            <div className={"marks-item-points-text"}>
                                16/20
                            </div>
                            <div className={"marks-item-points-progress-bar"}>
                                <div className={"inner"}></div>
                                <div className={"fill"}></div>
                            </div>
                        </div>
                        <div className={"marks-item-bottom"}>
                            <div className={"marks-item-bottom-text"}>
                                Ocena:
                            </div>
                            <div className={"marks-item-bottom-mark"}>
                                4
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-marks-item"}>
                        <div className={"marks-item-title"}>
                            Kolokwium I
                        </div>
                        <div className={"marks-item-points"}>
                            <div className={"marks-item-points-text"}>
                                16/20
                            </div>
                            <div className={"marks-item-points-progress-bar"}>
                                <div className={"inner"}></div>
                                <div className={"fill"}></div>
                            </div>
                        </div>
                        <div className={"marks-item-bottom"}>
                            <div className={"marks-item-bottom-text"}>
                                Ocena:
                            </div>
                            <div className={"marks-item-bottom-mark"}>
                                4
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-marks-item"}>
                        <div className={"marks-item-title"}>
                            Kolokwium I
                        </div>
                        <div className={"marks-item-points"}>
                            <div className={"marks-item-points-text"}>
                                16/20
                            </div>
                            <div className={"marks-item-points-progress-bar"}>
                                <div className={"inner"}></div>
                                <div className={"fill"}></div>
                            </div>
                        </div>
                        <div className={"marks-item-bottom"}>
                            <div className={"marks-item-bottom-text"}>
                                Ocena:
                            </div>
                            <div className={"marks-item-bottom-mark"}>
                                4
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SubjectPage;