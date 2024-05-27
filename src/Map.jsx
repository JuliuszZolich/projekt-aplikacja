import './Map.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";

const Map = () => {
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"map-main-content"}>
                <div className={"map-find-input"}>
                    <Link to={"/projekt-aplikacja/mapresult"}>
                        <img src={'./src/assets/find.png'} alt="finc-icon" title={"Znajdz"}/>
                    </Link>
                    <input type={"text"} name={"find"} placeholder={"Wpisz lokalizacje"}/>
                </div>
            </div>
        </>
    )
}
export default Map;