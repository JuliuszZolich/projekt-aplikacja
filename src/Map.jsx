import './Map.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {Link} from "react-router-dom";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"

const Map = () => {
    const {t} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"map-main-content"}>
                <div className={"map-find-input"}>
                    <Link to={"/projekt-aplikacja/mapresult"}>
                        <img src={findicon} alt="finc-icon" title={"Znajdz"}/>
                    </Link>
                    <input type={"text"} name={"find"} placeholder={t.Map.find}/>
                </div>
            </div>
        </>
    )
}
export default Map;