import './Map.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import {useEffect, useState} from "react";

async function get_map(builingID, setMap, translation) {
    let headers = new Headers();
    headers.append("BuildingID", builingID);
    headers.append("UserID", -1);
    headers.append("Action-Type", "GET");
    const response = await fetch('http://localhost:8001/map/', {
        method: 'GET',
        headers: headers,
    });
    const data = await response.json();
    let mapData = Array.isArray(data["map"]) ? data["map"] : [data["map"]];
    setMap(mapData.map(map => {
            const image_src = `${map["img"]}`;
            return (
                <div className={"map-result-main-content"} key={map["building"]}>
                    <div className={"map-result-left-content"}>
                        <div className={"map-result-find"}>
                            <Link to={"/projekt-aplikacja/mapresult"}>
                                <img src={findicon} alt="finc-icon" title={"Znajdz"}/>
                            </Link>
                            <input type={"text"} name={"find"} placeholder={translation.Map.find}/>
                        </div>
                        <div className={"map-result-iframe"}>
                            <iframe src={map["iframe"]}></iframe>
                        </div>
                    </div>
                    <div className={"map-result-right-content"}>
                        <div className={"map-result-location-image"}>
                            <img src={image_src} alt="location-image"/>`
                        </div>
                        <div className={"map-result-location-name"}>
                            <p>{translation.Map.building} {map["building"]} {map["address"]}, {translation.Map.campus} {map["campus"]}</p>
                            <p>{translation.Map.faculty} {map["facility"]}</p>
                        </div>
                    </div>
                </div>
            );
        }
    ));
}

const MapResult = () => {
    const {t: translation} = useLanguage();
    const [Map, setMap] = useState([]);
    useEffect(() => {
        get_map("A1", setMap, translation).then(() => console.log("Map loaded"));
    }, []);
    return (
        <>
            {TopBarAndSideMenu()}
            {Map}
        </>
    )
}
export default MapResult;