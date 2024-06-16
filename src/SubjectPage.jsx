import './css/Subjects.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";
import {changeScenery} from "./SubjectsFunctions.jsx"
import {useLanguage} from './ChangeLanguage.jsx';
import backicon from "./assets/arrowback.png"
import fileicon from "./assets/file.png"
import mailicon from "./assets/mail.png"
import buildingicon from "./assets/building.png"
import roomicon from "./assets/room.png"
import locationicon from "./assets/location.png"
import clockicon from "./assets/clock.png"
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";


async function getGrades(userid, subjectid, setGrades, translation) {
    let headers = new Headers();
    headers.append("UserID", userid);
    headers.append("Action-Type", "GET");
    headers.append("SubjectID", subjectid);
    const response = await fetch("http://localhost:8001/subjects", {
        method: "GET", headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    setGrades(data.gradelist.map((grade) => {
        return (
            <div className={"subject-page-middle-content-marks-item"} key={grade.id}>
                <div className={"marks-item-title header-p"}>
                    {grade.name}
                </div>
                <div className={"marks-item-points"}>
                    <div className={"marks-item-points-text points-p"}>
                        {grade.points_achieved}/{grade.points_max}
                    </div>
                    <div className={"marks-item-points-progress-bar"}>
                        <div className={"inner"}></div>
                        <div className={"fill"} style={{width: `${(grade.points_achieved / grade.points_max) * 100}%`}}></div>
                    </div>
                </div>
                <div className={"marks-item-bottom"}>
                    <div className={"marks-item-bottom-text medium-text-p"}>
                        {translation.Subjects.grade}
                    </div>
                    <div className={"marks-item-bottom-mark tasks-list-p"}>
                        {grade.grade}
                    </div>
                </div>
            </div>
        )
    }));
}

function getLectures(setLectures, lecturesData, translation){
    setLectures(lecturesData.map((lecture) => {
        return (
            <a href={lecture.link}
               download={lecture.link_name}
                key={lecture.link_name}>
                <div className={"subject-page-middle-content-lectures-left-item"}>
                    <div className={"item-image"}>
                        <img src={fileicon} alt="download-file-icon"/>
                    </div>
                    <div className={"item-text header-p"}>
                        {translation.Subjects.lecture} {`"${lecture.name.substring(0, 30)}${lecture.name.length > 30 ? "..." : ""}"`}
                    </div>
                </div>
            </a>
        )
    }));
}

function getExercises(setExercises, exercisesData, translation){
    setExercises(exercisesData.map((exercise) => {
        return (
            <a href={exercise.link}
               download={exercise.link_name}
               key={exercise.link_name}>
                <div className={"subject-page-middle-content-lectures-left-item"}>
                    <div className={"item-image"}>
                        <img src={fileicon} alt="download-file-icon"/>
                    </div>
                    <div className={"item-text header-p"}>
                        {translation.Subjects.exercise} {`"${exercise.name.substring(0, 35)}${exercise.name.length > 35 ? "..." : ""}"`}
                    </div>
                </div>
            </a>
        )
    }));

}

function getAnnouncements(setAnnouncements, announcementsData, translation){
    setAnnouncements(announcementsData.map((announcement) => {
        return (
            <div className={"subject-page-middle-content-announcements-item"} key={announcement.id}>
                <div className={"subject-page-middle-content-announcements-item-top"}>
                    <div className={"top-title side-menu-p"}>
                        {announcement.title}
                    </div>
                    <div className={"top-date"}>
                        <div className={"top-date-img"}>
                            <img src={clockicon} alt="clock-icon"/>
                        </div>
                        <div className={"top-date-text medium-text-p"}>
                            {announcement.date}
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                    {announcement.author}
                </div>
                <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                    {announcement.text}
                </div>
            </div>
        )
    }));

}

async function getSubject(cookies, setTitle, setLectures, setExercises, setAnnouncements, setGrades, translation) {
    let headers = new Headers();
    headers.append("UserID", cookies.userID);
    headers.append("Action-Type", "SUBJECT");
    headers.append("SubjectID", cookies.subjectid);
    const response = await fetch("http://localhost:8001/subjects", {
        method: "GET", headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    getGrades(cookies.userID, cookies.subjectid, setGrades, translation);
    setTitle(data.subjectlist[0].name);
    getLectures(setLectures, data.subjectlist[0].lectures, translation);
    getExercises(setExercises, data.subjectlist[0].exercises, translation);
}

const SubjectPage = () => {
    const {t: translation} = useLanguage();
    const [cookies,,removeCookies] = useCookies(['subjectid']);
    const [title, setTitle] = useState("lmao");
    const [grades, setGrades] = useState([]);
    const [lectures, setLectures] = useState([]);
    const [exercises, setExercises] = useState([]);
    const [announcements, setAnnouncements] = useState([]);
    useEffect(() => {
        getSubject(cookies, setTitle, setLectures, setExercises, setAnnouncements, setGrades, translation);
    }, [cookies, translation]);
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"subject-page-main-content"}>
                <div className={"subject-page-main-content-top-bar"}>
                    <Link to={"/projekt-aplikacja/subjects"}>
                        <div className={"subject-page-main-content-top-bar-item back"}
                             onClick={() => {
                                 removeCookies("subjectid", {path: "/"})
                             }}
                        >
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
                    <div className={"subject-page-main-content-top-bar-subject-name home-p"}>
                        {title}
                    </div>
                </div>
                <div className={"subject-page-middle-content-lectures"} id={"lectures"}>
                    <div className={"subject-page-middle-content-lectures-left"}>
                        {lectures}
                    </div>
                    <div className={"subject-page-middle-content-lectures-right"}>
                        <div className={"teacher"}>
                            <div className={"header medium-text-p"}>
                                {translation.Subjects.lecturer}
                            </div>
                            <div className={"teacher-name top-bar-p"}>
                                lorem ipsum
                            </div>
                        </div>
                        <div className={"contact"}>
                            <div className={"header medium-text-p"}>
                                {translation.Subjects.contact}
                            </div>
                            <div className={"contact-img"}>
                                <img src={mailicon} alt="mail-icon"/>
                            </div>
                            <div className={"contact-text top-bar-p"}>
                                loremipsum@gmail.com
                            </div>
                        </div>
                        <div className={"subject-location"}>
                            <div className={"header medium-text-p"}>
                                {translation.Subjects.location}
                            </div>
                            <div className={"subject-location-item"}>
                                <div className={"subject-location-item-img"}>
                                    <img src={buildingicon} alt="building-icon"/>
                                </div>
                                <div className={"subject-location-item-text home-p"}>
                                    A21
                                </div>
                            </div>
                            <div className={"subject-location-item"}>
                                <div className={"subject-location-item-img"}>
                                    <img src={roomicon} alt="room-icon"/>
                                </div>
                                <div className={"subject-location-item-text home-p"}>
                                    E2
                                </div>
                                <div className={"subject-location-find"}>
                                    <img src={locationicon} alt="location-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-lectures"} id={"exercises"}>
                    <div className={"subject-page-middle-content-lectures-left"}>
                        {exercises}
                    </div>
                    <div className={"subject-page-middle-content-lectures-right"}>
                        <div className={"teacher"}>
                            <div className={"header medium-text-p"}>
                                {translation.Subjects.lecturer}
                            </div>
                            <div className={"teacher-name top-bar-p"}>
                                lorem ipsum
                            </div>
                        </div>
                        <div className={"contact"}>
                            <div className={"header medium-text-p"}>
                                {translation.Subjects.contact}
                            </div>
                            <div className={"contact-img"}>
                                <img src={mailicon} alt="mail-icon"/>
                            </div>
                            <div className={"contact-text top-bar-p"}>
                                loremipsum@gmail.com
                            </div>
                        </div>
                        <div className={"subject-location"}>
                            <div className={"header medium-text-p"}>
                                {translation.Subjects.location}
                            </div>
                            <div className={"subject-location-item"}>
                                <div className={"subject-location-item-img"}>
                                    <img src={buildingicon} alt="building-icon"/>
                                </div>
                                <div className={"subject-location-item-text home-p"}>
                                    A21
                                </div>
                            </div>
                            <div className={"subject-location-item"}>
                                <div className={"subject-location-item-img"}>
                                    <img src={roomicon} alt="room-icon"/>
                                </div>
                                <div className={"subject-location-item-text home-p"}>
                                    E2
                                </div>
                                <div className={"subject-location-find"}>
                                    <img src={locationicon} alt="location-icon"/>
                                </div>
                            </div>
                        </div>
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
                    {grades}
                </div>
            </div>
        </>
    )
}
export default SubjectPage;