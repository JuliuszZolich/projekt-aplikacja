import './Subjects.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";
import {changeScenery} from "./SubjectsFunctions.jsx"
import {useLanguage} from './ChangeLanguage.jsx';
import backicon from "./assets/arrowback.png"
import fileicon from "./assets/file.png"
import clockicon from "./assets/clock.png"

const SubjectPage = () => {
    const {t: translation} = useLanguage();
    return (<>
        {TopBarAndSideMenu()}
        <div className={"subject-page-main-content"}>
            <div className={"subject-page-main-content-top-bar"}>
                <Link to={"/projekt-aplikacja/subjects"}>
                    <div className={"subject-page-main-content-top-bar-item back"}>
                        <div className={"back-image"}>
                            <img src={backicon} alt="back-icon"/>
                        </div>
                        <div className={"back-text home-p"}>
                            {translation.Subjects.back}
                        </div>
                    </div>
                </Link>
                <div className={"subject-page-main-content-top-bar-item lectures home-p"}
                     onClick={() => changeScenery(1)}>
                    {translation.Subjects.lectures}
                </div>
                <div className={"subject-page-main-content-top-bar-item exercises home-p"}
                     onClick={() => changeScenery(2)}>
                    {translation.Subjects.exercises}
                </div>
                <div className={"subject-page-main-content-top-bar-item subjects-page-announcements home-p"}
                     onClick={() => changeScenery(3)}>
                    {translation.Subjects.news}
                </div>
                <div className={"subject-page-main-content-top-bar-item marks home-p"}
                     onClick={() => changeScenery(4)}>
                    {translation.Subjects.grades}
                </div>
                <div className={"subject-page-main-content-top-bar-subject-name home-p"}></div>
            </div>
            <div className={"subject-page-middle-content-lectures"} id={"lectures"}>
                <div className={"subject-page-middle-content-lectures-left"}>
                    <a href={"./src/assets/MNwI/Materiały do ćwiczenia dotyczącego równań nieliniowych.zip"}
                       download={"MNwI_Materiały_do_ćwiczenia_dotyczącego_równań_nieliniowych.zip"}>
                        <div className={"subject-page-middle-content-lectures-left-item"}>
                            <div className={"item-image"}>
                                <img src={fileicon} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text header-p"}>
                                {translation.Subjects.lecture} 1
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className={"subject-page-middle-content-exercises"} id={"exercises"}>
                <div className={"subject-page-middle-content-exercises-left"}>
                    <a href={"./src/assets/MNwI/Materiały do ćwiczenia dotyczącego równań nieliniowych.zip"}
                       download={"MNwI_Materiały_do_ćwiczenia_dotyczącego_równań_nieliniowych.zip"}>
                        <div className={"subject-page-middle-content-exercises-left-item"}>
                            <div className={"item-image"}>
                                <img src={fileicon} alt="download-file-icon"/>
                            </div>
                            <div className={"item-text header-p"}>
                                Ćwiczenie 1
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div className={"subject-page-middle-content-announcements"} id={"announcements"}>
                <div className={"subject-page-middle-content-announcements-item"}>
                    <div className={"subject-page-middle-content-announcements-item-top"}>
                        <div className={"top-title side-menu-p"}>
                            Poprawa Kolokwium
                        </div>
                        <div className={"top-date"}>
                            <div className={"top-date-img"}>
                                <img src={clockicon} alt="clock-icon"/>
                            </div>
                            <div className={"top-date-text medium-text-p"}>
                                26.06.2024
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                        Dr. inż. Jacek Kabziński
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                        Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                        odbędzie. Nowy termin wykładu to 03.12.2023 r.
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements-item"}>
                    <div className={"subject-page-middle-content-announcements-item-top"}>
                        <div className={"top-title side-menu-p"}>
                            Poprawa Kolokwium
                        </div>
                        <div className={"top-date"}>
                            <div className={"top-date-img"}>
                                <img src={clockicon} alt="clock-icon"/>
                            </div>
                            <div className={"top-date-text medium-text-p"}>
                                26.06.2024
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                        Dr. inż. Jacek Kabziński
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                        Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                        odbędzie. Nowy termin wykładu to 03.12.2023 r.
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements-item"}>
                    <div className={"subject-page-middle-content-announcements-item-top"}>
                        <div className={"top-title side-menu-p"}>
                            Poprawa Kolokwium
                        </div>
                        <div className={"top-date"}>
                            <div className={"top-date-img"}>
                                <img src={clockicon} alt="clock-icon"/>
                            </div>
                            <div className={"top-date-text medium-text-p"}>
                                26.06.2024
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                        Dr. inż. Jacek Kabziński
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                        Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                        odbędzie. Nowy termin wykładu to 03.12.2023 r.
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements-item"}>
                    <div className={"subject-page-middle-content-announcements-item-top"}>
                        <div className={"top-title side-menu-p"}>
                            Poprawa Kolokwium
                        </div>
                        <div className={"top-date"}>
                            <div className={"top-date-img"}>
                                <img src={clockicon} alt="clock-icon"/>
                            </div>
                            <div className={"top-date-text medium-text-p"}>
                                26.06.2024
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                        Dr. inż. Jacek Kabziński
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                        Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                        odbędzie. Nowy termin wykładu to 03.12.2023 r.
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements-item"}>
                    <div className={"subject-page-middle-content-announcements-item-top"}>
                        <div className={"top-title side-menu-p"}>
                            Poprawa Kolokwium
                        </div>
                        <div className={"top-date"}>
                            <div className={"top-date-img"}>
                                <img src={clockicon} alt="clock-icon"/>
                            </div>
                            <div className={"top-date-text medium-text-p"}>
                                26.06.2024
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                        Dr. inż. Jacek Kabziński
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                        Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                        odbędzie. Nowy termin wykładu to 03.12.2023 r.
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements-item"}>
                    <div className={"subject-page-middle-content-announcements-item-top"}>
                        <div className={"top-title side-menu-p"}>
                            Poprawa Kolokwium
                        </div>
                        <div className={"top-date"}>
                            <div className={"top-date-img"}>
                                <img src={clockicon} alt="clock-icon"/>
                            </div>
                            <div className={"top-date-text medium-text-p"}>
                                26.06.2024
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                        Dr. inż. Jacek Kabziński
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                        Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                        odbędzie. Nowy termin wykładu to 03.12.2023 r.
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements-item"}>
                    <div className={"subject-page-middle-content-announcements-item-top"}>
                        <div className={"top-title side-menu-p"}>
                            Poprawa Kolokwium
                        </div>
                        <div className={"top-date"}>
                            <div className={"top-date-img"}>
                                <img src={clockicon} alt="clock-icon"/>
                            </div>
                            <div className={"top-date-text medium-text-p"}>
                                26.06.2024
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                        Dr. inż. Jacek Kabziński
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                        Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                        odbędzie. Nowy termin wykładu to 03.12.2023 r.
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements-item"}>
                    <div className={"subject-page-middle-content-announcements-item-top"}>
                        <div className={"top-title side-menu-p"}>
                            Poprawa Kolokwium
                        </div>
                        <div className={"top-date"}>
                            <div className={"top-date-img"}>
                                <img src={clockicon} alt="clock-icon"/>
                            </div>
                            <div className={"top-date-text medium-text-p"}>
                                26.06.2024
                            </div>
                        </div>
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                        Dr. inż. Jacek Kabziński
                    </div>
                    <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                        Szanowni studenci, z powodu mojej absencji dnia 26.11.2023, wykład tego dnia się nie
                        odbędzie. Nowy termin wykładu to 03.12.2023 r.
                    </div>
                </div>
            </div>
            <div className={"subject-page-middle-content-marks"} id={"marks"}>
                <div className={"subject-page-middle-content-marks-item"}>
                    <div className={"marks-item-title header-p"}>
                        Kolokwium I
                    </div>
                    <div className={"marks-item-points"}>
                        <div className={"marks-item-points-text points-p"}>
                            16/20
                        </div>
                        <div className={"marks-item-points-progress-bar"}>
                            <div className={"inner"}></div>
                            <div className={"fill"}></div>
                        </div>
                    </div>
                    <div className={"marks-item-bottom"}>
                        <div className={"marks-item-bottom-text medium-text-p"}>
                            {translation.Subjects.grade}
                        </div>
                        <div className={"marks-item-bottom-mark tasks-list-p"}>
                            4
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-marks-item"}>
                    <div className={"marks-item-title header-p"}>
                        Kolokwium I
                    </div>
                    <div className={"marks-item-points"}>
                        <div className={"marks-item-points-text points-p"}>
                            16/20
                        </div>
                        <div className={"marks-item-points-progress-bar"}>
                            <div className={"inner"}></div>
                            <div className={"fill"}></div>
                        </div>
                    </div>
                    <div className={"marks-item-bottom"}>
                        <div className={"marks-item-bottom-text medium-text-p"}>
                            {translation.Subjects.grade}
                        </div>
                        <div className={"marks-item-bottom-mark tasks-list-p"}>
                            4
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-marks-item"}>
                    <div className={"marks-item-title header-p"}>
                        Kolokwium I
                    </div>
                    <div className={"marks-item-points"}>
                        <div className={"marks-item-points-text points-p"}>
                            16/20
                        </div>
                        <div className={"marks-item-points-progress-bar"}>
                            <div className={"inner"}></div>
                            <div className={"fill"}></div>
                        </div>
                    </div>
                    <div className={"marks-item-bottom"}>
                        <div className={"marks-item-bottom-text medium-text-p"}>
                            {translation.Subjects.grade}
                        </div>
                        <div className={"marks-item-bottom-mark tasks-list-p"}>
                            4
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-marks-item"}>
                    <div className={"marks-item-title header-p"}>
                        Kolokwium I
                    </div>
                    <div className={"marks-item-points"}>
                        <div className={"marks-item-points-text points-p"}>
                            16/20
                        </div>
                        <div className={"marks-item-points-progress-bar"}>
                            <div className={"inner"}></div>
                            <div className={"fill"}></div>
                        </div>
                    </div>
                    <div className={"marks-item-bottom"}>
                        <div className={"marks-item-bottom-text medium-text-p"}>
                            {translation.Subjects.grade}
                        </div>
                        <div className={"marks-item-bottom-mark tasks-list-p"}>
                            4
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-marks-item"}>
                    <div className={"marks-item-title header-p"}>
                        Kolokwium I
                    </div>
                    <div className={"marks-item-points"}>
                        <div className={"marks-item-points-text points-p"}>
                            16/20
                        </div>
                        <div className={"marks-item-points-progress-bar"}>
                            <div className={"inner"}></div>
                            <div className={"fill"}></div>
                        </div>
                    </div>
                    <div className={"marks-item-bottom"}>
                        <div className={"marks-item-bottom-text medium-text-p"}>
                            {translation.Subjects.grade}
                        </div>
                        <div className={"marks-item-bottom-mark tasks-list-p"}>
                            4
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-marks-item"}>
                    <div className={"marks-item-title header-p"}>
                        Kolokwium I
                    </div>
                    <div className={"marks-item-points"}>
                        <div className={"marks-item-points-text points-p"}>
                            16/20
                        </div>
                        <div className={"marks-item-points-progress-bar"}>
                            <div className={"inner"}></div>
                            <div className={"fill"}></div>
                        </div>
                    </div>
                    <div className={"marks-item-bottom"}>
                        <div className={"marks-item-bottom-text medium-text-p"}>
                            {translation.Subjects.grade}
                        </div>
                        <div className={"marks-item-bottom-mark tasks-list-p"}>
                            4
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-marks-item"}>
                    <div className={"marks-item-title header-p"}>
                        Kolokwium I
                    </div>
                    <div className={"marks-item-points"}>
                        <div className={"marks-item-points-text points-p"}>
                            16/20
                        </div>
                        <div className={"marks-item-points-progress-bar"}>
                            <div className={"inner"}></div>
                            <div className={"fill"}></div>
                        </div>
                    </div>
                    <div className={"marks-item-bottom"}>
                        <div className={"marks-item-bottom-text medium-text-p"}>
                            {translation.Subjects.grade}
                        </div>
                        <div className={"marks-item-bottom-mark tasks-list-p"}>
                            4
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-marks-item"}>
                    <div className={"marks-item-title header-p"}>
                        Kolokwium I
                    </div>
                    <div className={"marks-item-points"}>
                        <div className={"marks-item-points-text points-p"}>
                            16/20
                        </div>
                        <div className={"marks-item-points-progress-bar"}>
                            <div className={"inner"}></div>
                            <div className={"fill"}></div>
                        </div>
                    </div>
                    <div className={"marks-item-bottom"}>
                        <div className={"marks-item-bottom-text medium-text-p"}>
                            {translation.Subjects.grade}
                        </div>
                        <div className={"marks-item-bottom-mark tasks-list-p"}>
                            4
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default SubjectPage;