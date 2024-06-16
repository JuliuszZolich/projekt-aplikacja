import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import "./MyProfile.css"

const MyProfile = () => {
    const {t: translation} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"my-profile-content"}>
                <div className={"personal-informations"}>
                    <div className={"my-profile-header"}>
                        {translation.Profile.personalData}
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.name}</span> Sebastian
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.surname}</span> Cieślik
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.email}</span> 245787@edu.p.lodz.pl
                    </div>
                </div>
                <div className={"university-informations"}>
                    <div className={"my-profile-header"}>
                        {translation.Profile.polytechnicData}
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.faculty}</span> WEEIA
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.fieldOfStudy}</span> Informatyka
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>{translation.Profile.year}</span> II
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile;