import './css/Map.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

async function getMap(builingID, setMap, setText, setImage, removeCookies, translation) {
    let headers = new Headers();
    headers.append("BuildingID", builingID);
    headers.append("UserID", -1);
    headers.append("Action-Type", "GET");
    const response = await fetch('http://localhost:8001/map/', {
        method: 'GET',
        headers: headers,
    });
    const data = await response.json();
    console.log(data)
    setMap((<iframe src={data.map.iframe.substring(1, data.map.iframe.length - 1)}></iframe>));
    setText(() => {
        return (
            <div>
                <p className={"medium-text-p"}>{translation.Map.building} {data.map.building} {data.map.address} {translation.Map.campus} {data.map.campus}</p>
                <p className={"medium-text-p"}>{translation.Map.faculty} {data.map.facility}</p>
            </div>
        )
    });
    setImage(`${data.map.img}`);
    removeCookies("searchedmap", {path: "/"});
}

async function getBuildings(translation, setBuildings) {
    let headers = new Headers();
    headers.append("UserID", -1);
    headers.append("Action-Type", "LIST");
    const response = await fetch("http://localhost:8001/map", {
        method: "GET",
        headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    setBuildings(data["maplist"].map((building) => {
        return (<div className={"map-result-find-result-item"} key={building.id}
                     onClick={() => {
                         document.querySelector(".map-result-find-result").style.display = "none";
                         document.querySelector("input[id=search]").value = `${translation.Map.campus} ${building.campus}: ${building.building} ${building.facility}`;
                     }}>
            {`${translation.Map.campus} ${building.campus}: ${building.building} ${building.facility}`}
        </div>)
    }));
}

const MapResult = () => {
    const {t: translation} = useLanguage();
    const [Map, setMap] = useState([]);
    const [Text, setText] = useState([]);
    const [Image, setImage] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cookies, setCookies, removeCookies] = useCookies([]);
    useEffect(() => {
        getMap(cookies.searchedmap, setMap, setText, setImage, removeCookies, translation).then(() => console.log("Map loaded"));
    }, [cookies.searchedmap, removeCookies, translation]);
    const [buildings, setBuildings] = useState([]);
    useEffect(() => {
        getBuildings(translation, setBuildings)
    }, [translation])
    const filteredBuildings = buildings.filter(building => {
        return building.props.children.toLowerCase().includes(searchTerm.toLowerCase());
    })
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"map-result-main-content"}>
                <div className={"map-result-left-content"}>
                    <div className={"map-result-find"}>
                        <Link to={"/projekt-aplikacja/mapresult"}
                              onClick={() => {
                                  if (cookies.searchedmap !== undefined) removeCookies("searchedmap", {path: "/"})
                                  setCookies("searchedmap", document.querySelector("input[id=search]").value.split(" ")[2])
                                  window.location.reload();
                              }}
                        >
                            <img src={findicon} alt="find-icon" title={"Znajdz"}/>
                        </Link>
                        <input type={"text"}
                               name={"find"}
                               id={"search"}
                               className={"home-p"}
                               placeholder={translation.Map.find}
                               onChange={(e) => {
                                   setSearchTerm(e.target.value);
                                   if (e.target.value.length > 0) {
                                       document.querySelector(".map-result-find-result").style.display = "block";
                                   } else {
                                       document.querySelector(".map-result-find-result").style.display = "none";
                                   }
                               }}
                        />
                        <div className={"map-result-find-result"} style={{"display": "none"}}>
                            {filteredBuildings}
                        </div>
                    </div>
                    <div className={"map-result-iframe"}>
                        {Map}
                    </div>
                </div>
                <div className={"map-result-right-content"}>
                    <div className={"map-result-location-image"}>
                        <img src={Image} alt="location-image"/>
                    </div>
                    <div className={"map-result-location-name"}>
                        <p className={"medium-text-p"}>{Text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MapResult;