import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Timetable.css'
import GenerateTimetable, {CurrentDateTimetable} from "./TimetableFunctions.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import {useEffect} from "react";

const Timetable = () => {
    useEffect(() => {
        CurrentDateTimetable();
    },[])
    const {t: translation} = useLanguage();
    return(
        <>
            {TopBarAndSideMenu()}
            <div className={"timetable-content"}>
                <div className={"timetable-day-names"}>
                    <div className={"timetable-day-names-item"}>
                        {translation.Timetable.monday}
                    </div>
                    <div className={"timetable-day-names-item"}>
                        {translation.Timetable.tuesday}
                    </div>
                    <div className={"timetable-day-names-item"}>
                        {translation.Timetable.wednesday}
                    </div>
                    <div className={"timetable-day-names-item"}>
                        {translation.Timetable.thursday}
                    </div>
                    <div className={"timetable-day-names-item"}>
                        {translation.Timetable.friday}
                    </div>
                    <div className={"timetable-day-names-item"}>
                        {translation.Timetable.saturday}
                    </div>
                    <div className={"timetable-day-names-item"}>
                        {translation.Timetable.sunday}
                    </div>
                </div>
                {GenerateTimetable()}
            </div>
        </>
    )
}

export default Timetable;