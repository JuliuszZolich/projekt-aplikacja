import './css/Subjects.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";
import {changeScenery} from "./SubjectsFunctions.jsx"
import {useLanguage} from './ChangeLanguage.jsx';
import backicon from "./assets/arrowback.png"
import fileicon from "./assets/file.png"
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
        let newColor;
        if(grade.points_achieved / grade.points_max < 0.3){
            newColor = "#c70219";
        }
        else if(grade.points_achieved / grade.points_max < 0.6){
            newColor = "#db8c04";
        }
        else{
            newColor = "#2b863a";
        }
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
                        <div className={"fill"} style={{width: `${(grade.points_achieved / grade.points_max) * 100}%`, backgroundColor:newColor}}></div>
                    </div>
                </div>
                <div className={"marks-item-bottom"}>
                    <div className={"marks-item-bottom-text medium-text-p"}>
                        {translation.Subjects.grade}
                    </div>
                    <div className={"marks-item-bottom-mark tasks-list-p"} style={{color:newColor}}>
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
                <div className={"subject-page-middle-content-lectures-left-item"} title={lecture.name}>
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
                <div className={"subject-page-middle-content-lectures-left-item"} title={exercise.name}>
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

function convertDate(date, type) {
    const date2 = date.split(" ")
    let day = date2[2];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months.indexOf(date2[1]) + 1;
    let year = date2[5];
    if (month < 10) {
        month = "0" + month;
    }
    if(type===1) return `${day}.${month}.${year}`;
    else return new Date(`${year}-${month}-${day}`).getTime();
}

async function getAnnouncements(setAnnouncements, subjectid, userid){
    let headers = new Headers();
    headers.append("UserID", userid);
    headers.append("Action-Type", "POSTS");
    headers.append("SubjectID", subjectid);
    const response = await fetch("http://localhost:8001/subjects", {
        method: "GET", headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    setAnnouncements(data.postlist.map(announcement => {
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
                            {convertDate(announcement.date, 1)}
                        </div>
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements-item-author small-text-p"}>
                    {announcement.author}
                </div>
                <div className={"subject-page-middle-content-announcements-item-bottom medium-text-p"}>
                    {announcement.content}
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
    getAnnouncements(setAnnouncements, cookies.subjectid, cookies.userID);
}

const SubjectPage = () => {
    const {t: translation} = useLanguage();
    const [cookies,,removeCookies] = useCookies(['subjectid']);
    const [title, setTitle] = useState("");
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

                </div>
                <div className={"subject-page-middle-content-lectures"} id={"exercises"}>
                    <div className={"subject-page-middle-content-lectures-left"}>
                        {exercises}
                    </div>
                </div>
                <div className={"subject-page-middle-content-announcements"} id={"announcements"}>
                    {announcements}
                </div>
                <div className={"subject-page-middle-content-marks"} id={"marks"}>
                    {grades}
                </div>
            </div>
        </>
    )
}
export default SubjectPage;