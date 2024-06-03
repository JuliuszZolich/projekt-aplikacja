import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Announcements.css'
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import backicon from "./assets/arrowback.png"
import postimage from "./assets/postimage.webp"
import clockicon from "./assets/clock.png"

const AnnouncementsPostPage = () => {
    const {t} = useLanguage();
    return (<>
        {TopBarAndSideMenu()}
        <div className={"post-page-main-content"}>
            <div className={"post-page-main-content-back"}>
                <div className={"back-button"}>
                    <Link to={"/projekt-aplikacja/announcements"}>
                        <div className={"back-button-image"}>
                            <img src={backicon} alt="back-icon"/>
                        </div>
                        <div className={"back-button-text"}>
                            {t.Announcements.back}
                        </div>
                    </Link>
                </div>
            </div>
            <div className={'post-page-header'}>
                <div className={"post-page-header-text"}>
                    Na PŁ rekrutacja do programu Legia Akademicka
                </div>
                <div className={"post-page-header-date"}>
                    <div className={"post-page-header-date-img"}>
                        <img src={clockicon} alt="clock-icon"/>
                    </div>
                    <div className={"post-page-header-date-text"}>
                        26.04.2026
                    </div>
                </div>
            </div>
            <div className={"post-page-main-content-middle-content"}>
                <div className={"post-page-main-content-middle-content-left"}>
                    <img src={postimage} alt="post-image"/>
                </div>
                <div className={"post-page-main-content-middle-content-right"}>
                    <span className={"text-header"}>Politechnika Łódzka po raz kolejny przystąpiła do programu Legia Akademicka. Absolwenci LA, jako
                        żołnierze rezerwy, mogą ubiegać się o powołanie do zawodowej służby wojskowej w różnych
                        formacjach i rodzajach Sił Zbrojnych RP.
                    </span>
                    <br/><br/>
                    Program szkolenia podoficerskiego skierowany jest do studentów, którzy ukończyli szkolenie
                    podstawowe Legii Akademickiej organizowane przez WCR. Moduł podoficerski składa się z dwóch
                    części: teoretycznej, podczas której słuchacze odbywają zajęcia prowadzone przez uczelnię oraz
                    praktycznej odbywanej pod kierunkiem Wojewódzkiego Sztabu Wojskowego w Łodzi (zajęcia terenowe
                    na poligonie wojskowym).
                    <br/><br/>
                    Zajęcia teoretyczne odbędą się w semestrze letnim. Przewidziane są trzy spotkania, dokładne daty
                    będą podane w późniejszym terminie. Planowane są zajęcia zdalne, na platformie MS Teams/Zoom.
                    Wszystkich zainteresowanych zachęcamy do odwiedzenia strony Legia Akademicka. Zgłoszenia do
                    programu należy dokonywać wypełniając wniosek, który należy wydrukować, podpisać i skan przesłać
                    na adres: <span className={"text-email"}>katarzyna.zykwinska@p.lodz.pl</span>.
                    <br/><br/>
                    <span className={"text-italic"}>- Rekrutacja potrwa do 17.05.2024 r. Liczy się kolejność zgłoszeń. Planowane jest uruchomienie
                    jednej grupy szkoleniowej, 15-osobowej. W przypadku dużej liczby chętnych istnieje możliwość
                    wystąpienia do Ministerstwa o utworzenie dodatkowej grupy</span> - informuje koordynatorka programu
                    na
                    PŁ, dr <span className={"text-bold"}>Katarzyna Żykwińska</span>.
                    <br/><br/>
                    Do programu Legia Akademicka może przystąpić student studiów pierwszego stopnia, studiów
                    drugiego stopnia lub jednolitych studiów magisterskich, dowolnego roku studiów, który posiada
                    obywatelstwo polskie i odbył szkolenie podstawowe w ramach Legii Akademickiej.
                    <br/><br/>
                    Uczestnikiem programu nie może być: doktorant, student studiujący poza granicami kraju, student
                    nieposiadający obywatelstwa polskiego, przebywający na terenie Polski na podstawie zezwolenia na
                    pobyt stały. W razie pytań prosimy o kontakt na adres: <span
                    className={"text-email"}>katarzyna.zykwinska@p.lodz.pl.</span>.
                </div>
            </div>
        </div>
    </>)
}
export default AnnouncementsPostPage;