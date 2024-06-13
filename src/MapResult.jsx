import './Map.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import locationimage from "./assets/weeia.jpg"

const MapResult = () => {
    const {t: translation} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"map-result-main-content"}>
                <div className={"map-result-left-content"}>
                    <div className={"map-result-find"}>
                        <Link to={"/projekt-aplikacja/mapresult"}>
                            <img src={findicon} alt="finc-icon" title={"Znajdz"}/>
                        </Link>
                        <input type={"text"} name={"find"} className={"home-p"} placeholder={translation.Map.find}/>
                        <div className={"map-result-find-result"}>
                            <div className={"map-result-find-result-item"}>
                                xd
                            </div>
                            <div className={"map-result-find-result-item"}>
                                xd
                            </div>
                            <div className={"map-result-find-result-item"}>
                                xd
                            </div>
                            <div className={"map-result-find-result-item"}>
                                xd
                            </div>
                            <div className={"map-result-find-result-item"}>
                                xd
                            </div>
                            <div className={"map-result-find-result-item"}>
                                xd
                            </div>
                        </div>
                    </div>
                    <div className={"map-result-iframe"}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2420.217857163626!2d21.744122993635052!3d52.656042454209754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471f037c7bd4657d%3A0xeedc3814c5cb25d3!2sAgroturystyka%20Na%20Zadupiu!5e0!3m2!1spl!2spl!4v1716817941116!5m2!1spl!2spl"></iframe>
                    </div>
                </div>
                <div className={"map-result-right-content"}>
                    <div className={"map-result-location-image"}>
                        <img src={locationimage} alt="location-image"/>
                    </div>
                    <div className={"map-result-location-name"}>
                        <p className={"medium-text-p"}>{translation.Map.building} A10 ul. Wólczańska 175, {translation.Map.campus} A</p>
                        <p className={"medium-text-p"}>{translation.Map.faculty} EEIA, II {translation.Map.floor}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MapResult;