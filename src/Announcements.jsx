import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Announcements.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import clockicon from "./assets/clock.png"
import {useEffect, useState} from "react";

function convertDate(date) {
    const date2 = date.split(" ")
    let day = date2[2];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months.indexOf(date2[1]) + 1;
    let year = date2[5];
    if (month < 10) {
        month = "0" + month;
    }
    return `${day}.${month}.${year}`;
}

async function getAnnouncementPosts(setAnnouncementPosts, translation) {
    let headers = new Headers();
    headers.append("UserID", -1);
    headers.append("Action-Type", "GET");
    headers.append("Task-ID", "all");
    const response = await fetch("http://localhost:8001/announcements", {
        method: "GET", headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    setAnnouncementPosts(data["announcements"].map((announcement) => {
        return (<div className={"announcements-posts-item"} key={announcement.id}>
            <Link to={'/projekt-aplikacja/announcementspostpage'}>
                <div className={"announcements-posts-item-left-content"}>
                    <img src={announcement.img.substring(1, announcement.img.length - 1)} alt="post-image"/>
                </div>
            </Link>
            <div className={"announcements-posts-item-right-content"}>
                <Link to={'/projekt-aplikacja/announcementspostpage'}>
                    <div className={"announcements-posts-item-right-content-title header-p"}>
                        {(localStorage.getItem('language') === 'en' ? announcement.title_en : announcement.title_pl).substring(0, 50) + "..."}
                    </div>
                </Link>
                <div className={"announcements-posts-item-right-content-publication-date"}>
                    <img src={clockicon} alt="clock-image"/>
                    <span className={"home-p"}>{convertDate(announcement.date)}</span>
                </div>
                <div className={"announcements-posts-item-right-content-text"}>
                    {localStorage.getItem('language') === 'en' ? announcement.short_text_en : announcement.short_text_pl}
                    <br/>
                    <Link to={'/projekt-aplikacja/announcementspostpage'}>
                        <span className={"announcements-posts-item-right-content-find-more"}>
                            {translation.Announcements.learnMore}
                        </span>
                    </Link>
                </div>
            </div>
        </div>)
    }));
}

const Announcements = () => {
    const {t: translation} = useLanguage();
    const [announcementPosts, setAnnouncementPosts] = useState([]);
    useEffect(()=> {
        getAnnouncementPosts(setAnnouncementPosts, translation)
    }, [translation]);
    return (<>
        {TopBarAndSideMenu()}
        <div className={"announcements-main-content"}>
            <div className={"announcements-top-bar"}>
                <select name={"interval"} id="interval">
                    <option value={"latest"} className={"top-bar-p"}>{translation.Announcements.latest}</option>
                    <option value={"oldest"} className={"top-bar-p"}>{translation.Announcements.oldest}</option>
                    <option value={"last-week"}
                            className={"top-bar-p"}>{translation.Announcements.lastWeek}</option>
                    <option value={"last-month"}
                            className={"top-bar-p"}>{translation.Announcements.lastMonth}</option>
                </select>
                <select name={"types"} id="types">
                    <option value={"all"} className={"top-bar-p"}>{translation.Announcements.all}</option>
                    <option value={"univerity"}
                            className={"top-bar-p"}>{translation.Announcements.university}</option>
                    <option value={"faculty"} className={"top-bar-p"}>{translation.Announcements.faculty}</option>
                    <option value={"student-council"}
                            className={"top-bar-p"}>{translation.Announcements.studentCouncil}</option>
                </select>
                <div className={"announcements-find"}>
                    <img src={findicon} alt="find-icon" title={"Wyszukaj"}/>
                    <input type={"text"} name={"find"} className={"top-bar-p"}
                           placeholder={translation.Announcements.find}/>
                </div>
            </div>
            <div className={"announcements-posts"}>
                {announcementPosts}
            </div>
        </div>
    </>)
}

export default Announcements;