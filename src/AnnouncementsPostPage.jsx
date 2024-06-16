import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './css/Announcements.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import backicon from "./assets/arrowback.png"
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
    if(type===1) return `${day}.${month}.${year}`;
    else return new Date(`${year}-${month}-${day}`).getTime();
}

async function getAnnouncementPost(setTitle,setShortText,setText,setDate,setImage,postid){
    let headers = new Headers();
    headers.append("UserID", -1);
    headers.append("Action-Type", "GET");
    headers.append("Post-ID", postid);
    const response = await fetch("http://localhost:8001/announcements", {
        method: "GET", headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    setTitle(localStorage.getItem('language') === 'en' ? data["announcements"][0].title_en : data["announcements"][0].title_pl);
    setShortText(localStorage.getItem('language') === 'en' ? data["announcements"][0].short_text_en : data["announcements"][0].short_text_pl);
    setText(localStorage.getItem('language') === 'en' ? data["announcements"][0].text_en : data["announcements"][0].text_pl);
    setDate(convertDate(data["announcements"][0].date,1));
    setImage(data["announcements"][0].img.substring(1, data["announcements"][0].img.length - 1));
}

const AnnouncementsPostPage = () => {
    const {t: translation} = useLanguage();
    const [cookies,,removeCookie] = useCookies(['postid']);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [text, setText] = useState("");
    const [shortText, setShortText] = useState("");
    const [image, setImage] = useState("");
    useEffect(() => {
        getAnnouncementPost(setTitle, setShortText, setText, setDate, setImage, cookies.postid);
    }, [cookies.postid]);
    return (<>
        {TopBarAndSideMenu()}
        <div className={"post-page-main-content"}>
            <div className={"post-page-main-content-back"}>
                <div className={"back-button"}>
                    <Link to={"/projekt-aplikacja/announcements"} onClick={()=> {
                        removeCookie("postid", {path: "/"})
                    }}>
                        <div className={"back-button-image"}>
                            <img src={backicon} alt="back-icon"/>
                        </div>
                        <div className={"back-button-text side-menu-p"}>
                            {translation.Announcements.back}
                        </div>
                    </Link>
                </div>
            </div>
            <div className={'post-page-header'}>
                <div className={"post-page-header-text"}>
                    {title}
                </div>
                <div className={"post-page-header-date"}>
                    <div className={"post-page-header-date-img"}>
                        <img src={clockicon} alt="clock-icon"/>
                    </div>
                    <div className={"post-page-header-date-text"}>
                        {date}
                    </div>
                </div>
            </div>
            <div className={"post-page-main-content-middle-content"}>
                <div className={"post-page-main-content-middle-content-left"}>
                    <img src={image} alt="post-image"/>
                </div>
                <div className={"post-page-main-content-middle-content-right"}>
                    <span className={"text-header"}>{shortText}</span>
                    <div className={"text"} dangerouslySetInnerHTML={{__html: text}}></div>
                </div>
            </div>
        </div>
    </>)
}
export default AnnouncementsPostPage;