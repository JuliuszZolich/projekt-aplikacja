import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Timetable.css'
import GenerateTimetable, {CurrentDateTimetable} from "./TimetableFunctions.jsx";
import {useEffect} from "react";
const Timetable = () => {
    useEffect(() => {
        CurrentDateTimetable();
    },[])
    return(
        <>
            {TopBarAndSideMenu()}
            <div className={"timetable-content"}>
                <div className={"timetable-day-names"}>
                    <div className={"timetable-day-names-item"}>
                        Poniedziałek
                    </div>
                    <div className={"timetable-day-names-item"}>
                        Wtorek
                    </div>
                    <div className={"timetable-day-names-item"}>
                        Środa
                    </div>
                    <div className={"timetable-day-names-item"}>
                        Czwartek
                    </div>
                    <div className={"timetable-day-names-item"}>
                        Piątek
                    </div>
                    <div className={"timetable-day-names-item"}>
                        Sobota
                    </div>
                    <div className={"timetable-day-names-item"}>
                        Niedziela
                    </div>
                </div>
                {GenerateTimetable()}
            </div>
        </>
    )
}

export default Timetable;