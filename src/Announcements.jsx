import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Announcements.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import clockicon from "./assets/clock.png"
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

function convertDate(date, type) {
    const date2 = date.split(" ")
    let day = date2[2];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months.indexOf(date2[1]) + 1;
    let year = date2[5];
    if (month < 10) {
        month = "0" + month;
    }
    if (type === 1) return `${day}.${month}.${year}`;
    else return new Date(`${year}-${month}-${day}`).getTime();
}

async function getAnnouncementPosts(setAnnouncementPosts, translation, setCookie) {
    let headers = new Headers();
    headers.append("UserID", -1);
    headers.append("Action-Type", "GET");
    headers.append("Post-ID", "all");
    const response = await fetch("http://localhost:8001/announcements", {
        method: "GET", headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    setAnnouncementPosts(data["announcements"].map((announcement) => {
        return (
            <div className={"announcements-posts-item"}
                 key={announcement.id}
                 data-time={convertDate(announcement.date, 2)}
                 data-typ={announcement.type}>
                <Link to={'/projekt-aplikacja/announcementspostpage'}>
                    <div className={"announcements-posts-item-left-content"} onClick={() => {
                        setCookie("postid", announcement.id, {path: "/"})
                    }}>
                        <img src={announcement.img.substring(1, announcement.img.length - 1)} alt="post-image"/>
                    </div>
                </Link>
                <div className={"announcements-posts-item-right-content"}>
                    <Link to={'/projekt-aplikacja/announcementspostpage'}>
                        <div className={"announcements-posts-item-right-content-title header-p"} onClick={() => {
                            setCookie("postid", announcement.id, {path: "/"})
                        }}>
                            {(localStorage.getItem('language') === 'en' ? announcement.title_en : announcement.title_pl).substring(0, 50) + "..."}
                        </div>
                    </Link>
                    <div className={"announcements-posts-item-right-content-publication-date"}>
                        <img src={clockicon} alt="clock-image"/>
                        <span className={"home-p"}>{convertDate(announcement.date, 1)}</span>
                    </div>
                    <div className={"announcements-posts-item-right-content-text"}>
                        {localStorage.getItem('language') === 'en' ? announcement.short_text_en : announcement.short_text_pl}
                        <br/>
                        <Link to={'/projekt-aplikacja/announcementspostpage'}>
                        <span className={"announcements-posts-item-right-content-find-more"} onClick={() => {
                            setCookie("postid", announcement.id, {path: "/"})
                        }}>
                            {translation.Announcements.learnMore}
                        </span>
                        </Link>
                    </div>
                </div>
                <div className={"bottom-bar"}></div>
            </div>)
    }));
}

function filterPosts(Posts,) {
    return Posts.filter(post => {
        let find = document.getElementById("find").value.toLowerCase();
        let interval = document.getElementById("interval").value;
        let types = document.getElementById("types").value;
        let date = post.props["data-time"];
        let date1 = new Date().getTime();
        let date2 = new Date(date).getTime();
        if (interval === "last-week" && date1 - date2 > 604800000) return false;
        if (interval === "last-month" && date1 - date2 > 2629743000) return false;
        if (types !== "all" && post.props["data-typ"] !== types) return false;
        let postTitle = post.props.children[1].props.children[0].props.children.props.children.toLowerCase();
        let postText = post.props.children[1].props.children[2].props.children[0].toLowerCase();
        return !(find !== "" && !postTitle.includes(find) && !postText.includes(find));

    })

}

const Announcements = () => {
    const {t: translation} = useLanguage();
    const [announcementPosts, setAnnouncementPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [, setCookie] = useCookies(["language"]);
    useEffect(() => {
        getAnnouncementPosts(setAnnouncementPosts, translation, setCookie)
    }, [setCookie, translation]);
    useEffect(() => {
        setFilteredPosts(announcementPosts);
        setFilteredPosts(prevPosts => {
            return [...prevPosts].sort((a, b) => {
                return b.props['data-time'] - a.props['data-time'];
            })
        });
    }, [announcementPosts]);
    let sortingDirection = 1;

    function sortPosts() {
        if (document.getElementById("interval").value === "oldest") sortingDirection = 0;
        else if(document.getElementById("interval").value === "latest") sortingDirection = 1;
        if (sortingDirection === 1) setFilteredPosts(prevPosts => {
            return [...prevPosts].sort((a, b) => {
                return b.props['data-time'] - a.props['data-time'];
            });
        });
        else setFilteredPosts(prevPosts => {
            return [...prevPosts].sort((a, b) => {
                return a.props['data-time'] - b.props['data-time'];
            });
        });
    }

    return (<>
        {TopBarAndSideMenu()}
        <div className={"announcements-main-content"}>
            <div className={"announcements-top-bar"}>
                <select name={"interval"} id="interval"
                        onChange={() => {
                            setFilteredPosts(filterPosts(announcementPosts));
                            sortPosts();
                        }}
                >
                    <option value={"latest"} className={"top-bar-p"}>{translation.Announcements.latest}</option>
                    <option value={"oldest"} className={"top-bar-p"}>{translation.Announcements.oldest}</option>
                    <option value={"last-week"}
                            className={"top-bar-p"}>{translation.Announcements.lastWeek}</option>
                    <option value={"last-month"}
                            className={"top-bar-p"}>{translation.Announcements.lastMonth}</option>
                </select>
                <select name={"types"} id="types"
                        onChange={() => {
                            setFilteredPosts(filterPosts(announcementPosts));
                            sortPosts();
                        }}
                >
                    <option value={"all"} className={"top-bar-p"}>{translation.Announcements.all}</option>
                    <option value={"uczelniane"}
                            className={"top-bar-p"}>{translation.Announcements.university}</option>
                    <option value={"wydziałowe"} className={"top-bar-p"}>{translation.Announcements.faculty}</option>
                    <option value={"samorzad"}
                            className={"top-bar-p"}>{translation.Announcements.studentCouncil}</option>
                </select>
                <div className={"announcements-find"}>
                    <img src={findicon} alt="find-icon" title={"Wyszukaj"}/>
                    <input type={"text"} name={"find"} id={"find"} className={"top-bar-p"}
                           placeholder={translation.Announcements.find}
                           onChange={() => {
                               setFilteredPosts(filterPosts(announcementPosts));
                               sortPosts();
                           }}
                    />
                </div>
            </div>
            <div className={"announcements-posts"}>
                {filteredPosts}
            </div>
        </div>
    </>)
}

export default Announcements;