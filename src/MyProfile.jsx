import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import "./MyProfile.css"

const MyProfile = () => {
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"my-profile-content"}>
                <div className={"personal-informations"}>
                    <div className={"my-profile-header"}>
                        Dane Personalne:
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>Imię:</span> Sebastian
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>Nazwisko:</span> Cieślik
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>E-mail:</span> 245787@edu.p.lodz.pl
                    </div>
                </div>
                <div className={"university-informations"}>
                    <div className={"my-profile-header"}>
                        Dane Politechniczne:
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>Wydział:</span> WEEIA
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>Kierunek:</span> Informatyka
                    </div>
                    <div className={"my-profile-item"}>
                        <span className={"my-profile-item-bold"}>Rok:</span> II
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile;