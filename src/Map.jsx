import './css/Map.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

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
        return (<div className={"find-result-item"} key={building.id}
                onClick={()=>{
                    document.querySelector(".find-result").style.display = "none";
                    document.querySelector("input[id=search]").value = `${translation.Map.campus} ${building.campus}: ${building.building} ${building.facility}`;
                }}>
            {`${translation.Map.campus} ${building.campus}: ${building.building} ${building.facility}`}
        </div>)
    }));
}

const Map = () => {
    const {t: translation} = useLanguage();
    const [buildings, setBuildings] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [cookies,setCookies, removeCookies] = useCookies([]);
    useEffect(() => {
        getBuildings(translation, setBuildings)
    }, [translation])
    const filteredBuildings = buildings.filter(building => {
        return building.props.children.toLowerCase().includes(searchTerm.toLowerCase());
    })
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"map-main-content"}>
                <div className={"map-find-input"}>
                    <Link to={"/projekt-aplikacja/mapresult"}>
                        <img src={findicon} alt="find-icon" title={"Znajdz"} onClick={
                            () => {
                                if(cookies.searchedmap !== undefined) removeCookies("searchedmap", {path: "/"})
                                setCookies("searchedmap", document.querySelector("input[id=search]").value.split(" ")[2])
                            }
                        }/>
                    </Link>
                    <input type={"text"}
                           name={"hidden"}
                           id={"search"}
                           autoComplete={"false"}
                           className={"home-p"}
                           placeholder={translation.Map.find}
                           onChange={(e) => {
                               setSearchTerm(e.target.value);
                               if (e.target.value.length > 0) {
                                   document.querySelector(".find-result").style.display = "block";
                               } else {
                                   document.querySelector(".find-result").style.display = "none";
                               }
                           }}
                    />
                    <div className={"find-result"} style={{"display": "none"}}>
                        {filteredBuildings}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Map;