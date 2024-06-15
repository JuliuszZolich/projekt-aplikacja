import {useEffect, useState} from "react";
import arrow from "./assets/closemenu.png";

export const GenerateTimetableItem = ({day}) => {
    return (
        <div className="timetable-item">
            {day}
        </div>
    );
};

let year;
let month;

const monthNames = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
];

export function CurrentDateTimetable() {
    let date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
}

export function ChangeMonth(option, updateDateString, updateItemsCounter, updateDays) {
    if (option === '+') {
        month++;
        if (month === 12) {
            month = 0;
            year++;
        }
    } else {
        month--;
        if (month === -1) {
            month = 11;
            year--;
        }
    }
    updateDateString();
    updateItemsCounter();
    updateDays();
}

export function getCurrentMonthAndYearTimetable() {
    return `${monthNames[month]} ${year}`;
}

const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
};

const GenerateTimetable = () => {
    const [itemsCounter, setItemsCounter] = useState(35);
    const [dateString, setDateString] = useState("");
    const [days, setDays] = useState([]);

    const updateDateString = () => {
        const dateStr = getCurrentMonthAndYearTimetable();
        setDateString(dateStr);
    };

    const updateItemsCounter = () => {
        const firstDayOfWeek = getFirstDayOfMonth(month, year);
        const counter =  firstDayOfWeek === 0 ? 42 : 35;
        setItemsCounter(counter);
        setHeight(counter);
    };

    const updateDays = () => {
        const daysInMonth = getDaysInMonth(month, year);
        const firstDayOfWeek = getFirstDayOfMonth(month, year);
        const daysArray = Array.from({length: firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1}).fill("");
        for (let day = 1; day <= daysInMonth; day++) {
            daysArray.push(day.toString());
        }
        setDays(daysArray);
    };

    useEffect(() => {
        CurrentDateTimetable();
        updateDateString();
        updateItemsCounter();
        updateDays();
    }, []);

    useEffect(() => {
        updateDays();
    }, [itemsCounter]);

    const setHeight = (counter) => {
        const timetableItems = document.querySelectorAll(".timetable-item");
        let value = '119px';
        if (counter === 42) value = '99px';
        timetableItems.forEach(item => {
            item.style.height = value;
        });
    };

    const items = Array.from({length: itemsCounter}).map((_, index) => (
        <GenerateTimetableItem key={index} day={days[index] || ''}/>
    ));

    return (
        <>
            <div className="timetable-navigation">
                <div className="timetable-navigation-arrow-left"
                     onClick={() => ChangeMonth('-', updateDateString, updateItemsCounter, updateDays)}>
                    <img src={arrow} alt="previous-month-icon"/>
                </div>
                <div className="timetable-navigation-month-and-year">
                    {dateString}
                </div>
                <div className="timetable-navigation-arrow-right"
                     onClick={() => ChangeMonth('+', updateDateString, updateItemsCounter, updateDays)}>
                    <img src={arrow} alt="next-month-icon"/>
                </div>
            </div>
            <div className="timetable-container">
                {items}
            </div>
        </>
    );
};

export default GenerateTimetable;
