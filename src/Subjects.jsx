import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Subjects.css'
import {Link} from "react-router-dom";
import {useLanguage} from "./ChangeLanguage.jsx";

const Subjects = () => {
    const {t: translation} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"subjects-main-content"}>
                <div className={"subjects-main-content-top-bar"}>
                    <div className={"subjects-main-content-top-bar-item year-firts home-p"}>
                        {translation.Subjects.year} I
                    </div>
                    <div className={"subjects-main-content-top-bar-item year-second home-p"}>
                        {translation.Subjects.year} II
                    </div>
                    <div className={"subjects-main-content-top-bar-item year-third home-p"}>
                        {translation.Subjects.year} III
                    </div>
                    <div className={"subjects-main-content-top-bar-item year-fourth home-p"}>
                        {translation.Subjects.year} IV
                    </div>
                    <div className={"subjects-main-content-top-bar-item-empty"}></div>
                </div>
                <div className={"subjects-main-content-center"}>
                    <div className={"subjects-main-content-center-left"}>
                        <div className={"subjects-main-content-center-title side-menu-p"}>
                            {translation.Subjects.semester} I
                        </div>
                        <div className={"subjects-main-content-center-subjects"}>
                            <Link to={'/projekt-aplikacja/subjectpage'}>
                                <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                    KCK
                                </div>
                            </Link>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>

                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                        </div>
                    </div>
                    <div className={"subjects-main-content-center-line"}></div>
                    <div className={"subjects-main-content-center-right"}>
                        <div className={"subjects-main-content-center-title side-menu-p"}>
                            {translation.Subjects.semester} II
                        </div>
                        <div className={"subjects-main-content-center-subjects"}>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>

                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
                                KCK
                            </div>
                            <div className={"subjects-main-content-center-subjects-item medium-text-p"}>
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