import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './css/Subjects.css'
import {Link} from "react-router-dom";
import {useLanguage} from "./ChangeLanguage.jsx";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

const handleKeyDown = (event, callback) => {
    if (event.key === 'Enter') {
        callback();
    }
};

function getSubjects(translation, setSubjects, cookies, setCookie) {
    let headers = new Headers();
    headers.append("UserID", cookies.userID);
    headers.append("Action-Type", "LIST");
    headers.append("Field", cookies.field);
    fetch("http://localhost:8001/subjects", {
        method: "GET",
        headers: headers,
    }).then(response => {
        response.json().then(data => {
            setSubjects(data["subjectlist"].map((subject) => {
                return (
                    <Link to={'/projekt-aplikacja/subjectpage'}
                          key={subject.id}
                          data={subject.semester}
                          onClick={() => {
                              setCookie("subjectid", subject.id, {path: "/"});
                          }}
                    >
                        <div className={"subjects-main-content-center-subjects-item medium-text-p"}
                             title={subject.name}>
                            {subject.name}
                        </div>
                    </Link>
                )
            }))
        })
    })
}

const Subjects = () => {
    const {t: translation} = useLanguage();
    const [cookies, setCookie] = useCookies([]);
    const [subjects, setSubjects] = useState([]);
    const [currYear, setCurrYear] = useState(1);
    useEffect(() => {
        getSubjects(translation, setSubjects, cookies, setCookie);
    }, [translation, cookies, setCookie]);

    const handleYear1 = () => {
        setCurrYear(1);
        document.getElementById("year-first").classList.add("year-active");
        document.getElementById("year-second").classList.remove("year-active");
        document.getElementById("year-third").classList.remove("year-active");
        document.getElementById("year-fourth").classList.remove("year-active");
    }

    const handleYear2 = () => {
        setCurrYear(2);
        document.getElementById("year-first").classList.remove("year-active");
        document.getElementById("year-second").classList.add("year-active");
        document.getElementById("year-third").classList.remove("year-active");
        document.getElementById("year-fourth").classList.remove("year-active");
    }

    const handleYear3 = () => {
        setCurrYear(3);
        document.getElementById("year-first").classList.remove("year-active");
        document.getElementById("year-second").classList.remove("year-active");
        document.getElementById("year-third").classList.add("year-active");
        document.getElementById("year-fourth").classList.remove("year-active");
    }

    const handleYear4 = () => {
        setCurrYear(4);
        document.getElementById("year-first").classList.remove("year-active");
        document.getElementById("year-second").classList.remove("year-active");
        document.getElementById("year-third").classList.remove("year-active");
        document.getElementById("year-fourth").classList.add("year-active");
    }

    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"subjects-main-content"}>
                <div className={"subjects-main-content-top-bar"}>
                    <div className={"subjects-main-content-top-bar-item year-first home-p year-active"}
                         id={"year-first"} tabIndex="0"
                         onClick={() => {
                             handleYear1();
                         }}
                         onKeyDown={(e) => handleKeyDown(e, () => {
                             handleYear1();
                         })}>
                        {translation.Subjects.year} I
                    </div>
                    <div className={"subjects-main-content-top-bar-item year-second home-p"} id={"year-second"}
                         tabIndex="0"
                         onClick={() => {
                             handleYear2();
                         }}
                         onKeyDown={(e) => handleKeyDown(e, () => {
                             handleYear2();
                         })}>
                        {translation.Subjects.year} II
                    </div>
                    <div className={"subjects-main-content-top-bar-item year-third home-p"} id={"year-third"}
                         tabIndex="0"
                         onClick={() => {
                             setCurrYear(3);
                             handleYear3();
                         }}
                         onKeyDown={(e) => handleKeyDown(e, () => {
                             handleYear3();
                         })}>
                        {translation.Subjects.year} III
                    </div>
                    <div className={"subjects-main-content-top-bar-item year-fourth home-p"} id={"year-fourth"}
                         tabIndex="0"
                         onClick={() => {
                             handleYear4();
                         }}
                         onKeyDown={(e) => handleKeyDown(e, () => {
                             handleYear4();
                         })}>
                        {translation.Subjects.year} IV
                    </div>
                    <div className={"subjects-main-content-top-bar-item-empty"}></div>
                </div>
                <div className={"subjects-main-content-center"}>
                    <div className={"subjects-main-content-center-left"}>
                        <div className={"subjects-main-content-center-title side-menu-p"}>
                            {translation.Subjects.semester} {currYear * 2 - 1}
                        </div>
                        <div className={"subjects-main-content-center-subjects"}>
                            <Link to={'/projekt-aplikacja/subjectpage'} style={{display: "none"}}>
                                <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                    KCK
                                </div>
                            </Link>
                            {subjects.filter(subject => {
                                return (subject.props.data === currYear * 2 - 1) && (subject.props.data <= cookies.semester);
                            })}
                        </div>
                    </div>
                    <div className={"subjects-main-content-center-line"}></div>
                    <div className={"subjects-main-content-center-right"}>
                        <div className={"subjects-main-content-center-title side-menu-p"}>
                            {translation.Subjects.semester} {currYear * 2}
                        </div>
                        <div className={"subjects-main-content-center-subjects"}>
                            {subjects.filter(subject => {
                                return (subject.props.data === currYear * 2) && (subject.props.data <= cookies.semester);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subjects;