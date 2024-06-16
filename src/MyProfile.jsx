import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import "./css/MyProfile.css"
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";

async function getProfile(user_id,setName,setSurname,setEmail,setFaculty,setFieldOfStudy,setYear) {
    let headers = new Headers();
    headers.append("UserID", user_id);
    headers.append("Action-Type", "GET");
    const response = await fetch("http://localhost:8001/myprofile", {
        method: "GET",
        headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    setName(data.name);
    setSurname(data.surname);
    setEmail(data.email);
    setFaculty(data.faculty);
    setFieldOfStudy(data.field);
    switch (data.semester) {
        case 1:
            data.semester = "I";
            break;
        case 2:
            data.semester = "I";
            break;
        case 3:
            data.semester = "II";
            break;
        case 4:
            data.semester = "II";
            break;
        case 5:
            data.semester = "III";
            break;
        case 6:
            data.semester = "III";
            break;
        case 7:
            data.semester = "IV";
            break;
    }
    setYear(data.semester);

}


const MyProfile = () => {
    const {t: translation} = useLanguage();
    const [cookies] = useCookies(['userID']);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [faculty, setFaculty] = useState("");
    const [fieldOfStudy, setFieldOfStudy] = useState("");
    const [year, setYear] = useState("");
    useEffect(() => {
        getProfile(cookies.userID,setName,setSurname,setEmail,setFaculty,setFieldOfStudy,setYear, cookies);
    }, []);
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"my-profile-content"}>
                <div className={"personal-informations"}>
                    <div className={"my-profile-header"}>
                        {translation.Profile.personalData}
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.name}</span>{name}</div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.surname}</span>{surname}</div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.email}</span>{email}</div>
                </div>
                <div className={"university-informations"}>
                    <div className={"my-profile-header"}>
                        {translation.Profile.polytechnicData}
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.faculty}</span>{faculty}</div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.fieldOfStudy}</span>{fieldOfStudy}</div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.year}</span>{year}</div>
                </div>
            </div>
        </>
    )
}

export default MyProfile;