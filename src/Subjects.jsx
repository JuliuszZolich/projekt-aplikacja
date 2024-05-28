import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Subjects.css'
import {Link} from "react-router-dom";

const Subjects = () => {
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"subjects-main-content"}>
                <div className={"subjects-main-content-top-bar"}>
                    <div className={"subjects-main-content-top-bar-item year-firts"}>
                        Rok I
                    </div>
                    <div className={"subjects-main-content-top-bar-item year-second"}>
                        Rok II
                    </div>
                    <div className={"subjects-main-content-top-bar-item year-third"}>
                        Rok III
                    </div>
                    <div className={"subjects-main-content-top-bar-item year-fourth"}>
                        Rok IV
                    </div>
                    <div className={"subjects-main-content-top-bar-item-empty"}></div>
                </div>
                <div className={"subjects-main-content-center"}>
                    <div className={"subjects-main-content-center-left"}>
                        <div className={"subjects-main-content-center-title"}>
                            Semestr I
                        </div>
                        <div className={"subjects-main-content-center-subjects"}>
                            <Link to={'/projekt-aplikacja/subjectpage'}>
                                <div className={"subjects-main-content-center-subjects-item"}>
                                    KCK
                                </div>
                            </Link>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>

                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                        </div>
                    </div>
                    <div className={"subjects-main-content-center-line"}></div>
                    <div className={"subjects-main-content-center-right"}>
                        <div className={"subjects-main-content-center-title"}>
                            Semestr II
                        </div>
                        <div className={"subjects-main-content-center-subjects"}>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>

                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item"}>
                                KCK
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subjects;