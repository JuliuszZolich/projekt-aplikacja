import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Announcements.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import postimage from "./assets/postimage.webp"
import clockicon from "./assets/clock.png"

const Announcements = () => {
    const {t: translation} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"announcements-main-content"}>
                <div className={"announcements-top-bar"}>
                    <select name={"interval"} id="interval">
                        <option value={"latest"}>{translation.Announcements.latest}</option>
                        <option value={"oldest"}>{translation.Announcements.oldest}</option>
                        <option value={"last-week"}>{translation.Announcements.lastWeek}</option>
                        <option value={"last-month"}>{translation.Announcements.lastMonth}</option>
                    </select>
                    <select name={"types"} id="types">
                        <option value={"all"}>{translation.Announcements.all}</option>
                        <option value={"univerity"}>{translation.Announcements.university}</option>
                        <option value={"faculty"}>{translation.Announcements.faculty}</option>
                        <option value={"student-council"}>{translation.Announcements.studentCouncil}</option>
                    </select>
                    <div className={"announcements-find"}>
                        <img src={findicon} alt="find-icon" title={"Wyszukaj"}/>
                        <input type={"text"} name={"find"} placeholder={translation.Announcements.find}/>
                    </div>
                </div>
                <div className={"announcements-posts"}>
                    <div className={"announcements-posts-item"}>
                        <Link to={'/projekt-aplikacja/announcementspostpage'}>
                            <div className={"announcements-posts-item-left-content"}>
                                <img src={postimage} alt="post-image"/>
                            </div>
                        </Link>
                        <div className={"announcements-posts-item-right-content"}>
                            <Link to={'/projekt-aplikacja/announcementspostpage'}>
                                <div className={"announcements-posts-item-right-content-title"}>
                                    Na PŁ rekrutacja do programu Legia Akademicka
                                </div>
                            </Link>
                            <div className={"announcements-posts-item-right-content-publication-date"}>
                                <img src={clockicon} alt="clock-image"/>
                                <span>26.04.2024</span>
                            </div>
                            <div className={"announcements-posts-item-right-content-text"}>
                                Politechnika Łódzka po raz kolejny przystąpiła do programu Legia Akademicka. Absolwenci
                                LA, jako żołnierze rezerwy, mogą ubiegać się o powołanie do zawodowej służby wojskowej w
                                różnych formacjach i rodzajach Sił Zbrojnych RP.
                                <br/>
                                <Link to={'/projekt-aplikacja/announcementspostpage'}>
                                    <span className={"announcements-posts-item-right-content-find-more"}>
                                        {translation.Announcements.learnMore}
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={"announcements-posts-item"}>
                        <div className={"announcements-posts-item-left-content"}>
                            <img src={postimage} alt="post-image"/>
                        </div>
                        <div className={"announcements-posts-item-right-content"}>
                            <div className={"announcements-posts-item-right-content-title"}>
                                Na PŁ rekrutacja do programu Legia Akademicka
                            </div>
                            <div className={"announcements-posts-item-right-content-publication-date"}>
                                <img src={clockicon} alt="clock-image"/>
                                <span>26.04.2024</span>
                            </div>
                            <div className={"announcements-posts-item-right-content-text"}>
                                Politechnika Łódzka po raz kolejny przystąpiła do programu Legia Akademicka. Absolwenci
                                LA, jako żołnierze rezerwy, mogą ubiegać się o powołanie do zawodowej służby wojskowej w
                                różnych formacjach i rodzajach Sił Zbrojnych RP.
                                <br/><span className={"announcements-posts-item-right-content-find-more"}>{translation.Announcements.learnMore}</span>
                            </div>
                        </div>
                    </div>
                    <div className={"announcements-posts-item"}>
                        <div className={"announcements-posts-item-left-content"}>
                            <img src={postimage} alt="post-image"/>
                        </div>
                        <div className={"announcements-posts-item-right-content"}>
                            <div className={"announcements-posts-item-right-content-title"}>
                                Na PŁ rekrutacja do programu Legia Akademicka
                            </div>
                            <div className={"announcements-posts-item-right-content-publication-date"}>
                                <img src={clockicon} alt="clock-image"/>
                                <span>26.04.2024</span>
                            </div>
                            <div className={"announcements-posts-item-right-content-text"}>
                                Politechnika Łódzka po raz kolejny przystąpiła do programu Legia Akademicka. Absolwenci
                                LA, jako żołnierze rezerwy, mogą ubiegać się o powołanie do zawodowej służby wojskowej w
                                różnych formacjach i rodzajach Sił Zbrojnych RP.
                                <br/><span className={"announcements-posts-item-right-content-find-more"}>{translation.Announcements.learnMore}</span>
                            </div>
                        </div>
                    </div>
                    <div className={"announcements-posts-item"}>
                        <div className={"announcements-posts-item-left-content"}>
                            <img src={postimage} alt="post-image"/>
                        </div>
                        <div className={"announcements-posts-item-right-content"}>
                            <div className={"announcements-posts-item-right-content-title"}>
                                Na PŁ rekrutacja do programu Legia Akademicka
                            </div>
                            <div className={"announcements-posts-item-right-content-publication-date"}>
                                <img src={clockicon} alt="clock-image"/>
                                <span>26.04.2024</span>
                            </div>
                            <div className={"announcements-posts-item-right-content-text"}>
                                Politechnika Łódzka po raz kolejny przystąpiła do programu Legia Akademicka. Absolwenci
                                LA, jako żołnierze rezerwy, mogą ubiegać się o powołanie do zawodowej służby wojskowej w
                                różnych formacjach i rodzajach Sił Zbrojnych RP.
                                <br/><span className={"announcements-posts-item-right-content-find-more"}>{translation.Announcements.learnMore}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Announcements;