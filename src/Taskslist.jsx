import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Taskslist.css'
import findicon from "./assets/find.png"
import addicon from "./assets/add.png"
import completedicon from "./assets/check.png"
import favouriteicon from "./assets/star.png"
import deleteicon from "./assets/bin.png"
const Tasklist = () => {
    return(
        <>
            {TopBarAndSideMenu()}
            <div className={"tasks-list-main-content"}>
                <div className={"tasks-list-top-bar"}>
                    <div className={"tasks-list-find"}>
                        <img src={findicon} alt="finc-icon" title={"Wyszukaj"}/>
                        <input type={"text"} name={"find"} placeholder={"Wyszukaj..."}/>
                    </div>
                </div>
                <div className={"tasks-list-left-content"}>
                    <div className="tasks-list-left-content-item">
                        Wszystkie
                    </div>
                    <div className="tasks-list-left-content-item">
                        Ważnene
                    </div>
                    <div className="tasks-list-left-content-item">
                        Aktywne
                    </div>
                    <div className="tasks-list-left-content-item">
                        Zakończone
                    </div>
                </div>
                <div className="tasks-list-line"></div>
                <div className={"tasks-list-right-content"}>
                    <div className={"tasks-list-right-content-add"}>
                        <div className={"tasks-list-right-content-add-img"}>
                            <img src={addicon} alt="add-icon"/>
                        </div>
                        <div className={"tasks-list-right-content-add-text"}>
                            Dodaj pozycję
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item"}>
                        <div className={"tasks-list-right-content-item-left"}>
                            <div className={"circle"}>
                                <img src={completedicon} alt="check-icon"/>
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-middle"}>
                            <div className={"right-content-item-middle-date"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text"}>
                                Wykonać makiete cyfrową aplikacji
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-right"}>
                            <div className={"right-content-item-right-star"}>
                                <img src={favouriteicon} alt="star-icon" title={"Dodaj do Ważnych"}/>
                            </div>
                            <div className={"right-content-item-right-delete"}>
                                <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item"}>
                        <div className={"tasks-list-right-content-item-left"}>
                            <div className={"circle"}>
                                <img src={completedicon} alt="check-icon"/>
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-middle"}>
                            <div className={"right-content-item-middle-date"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text"}>
                                Wykonać makiete cyfrową aplikacji
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-right"}>
                            <div className={"right-content-item-right-star"}>
                                <img src={favouriteicon} alt="star-icon" title={"Dodaj do Ważnych"}/>
                            </div>
                            <div className={"right-content-item-right-delete"}>
                                <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item"}>
                        <div className={"tasks-list-right-content-item-left"}>
                            <div className={"circle"}>
                                <img src={completedicon} alt="check-icon"/>
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-middle"}>
                            <div className={"right-content-item-middle-date"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text"}>
                                Wykonać makiete cyfrową aplikacji
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-right"}>
                            <div className={"right-content-item-right-star"}>
                                <img src={favouriteicon} alt="star-icon" title={"Dodaj do Ważnych"}/>
                            </div>
                            <div className={"right-content-item-right-delete"}>
                                <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item"}>
                        <div className={"tasks-list-right-content-item-left"}>
                            <div className={"circle"}>
                                <img src={completedicon} alt="check-icon"/>
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-middle"}>
                            <div className={"right-content-item-middle-date"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text"}>
                                Wykonać makiete cyfrową aplikacji
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-right"}>
                            <div className={"right-content-item-right-star"}>
                                <img src={favouriteicon} alt="star-icon" title={"Dodaj do Ważnych"}/>
                            </div>
                            <div className={"right-content-item-right-delete"}>
                                <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item"}>
                        <div className={"tasks-list-right-content-item-left"}>
                            <div className={"circle"}>
                                <img src={completedicon} alt="check-icon"/>
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-middle"}>
                            <div className={"right-content-item-middle-date"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text"}>
                                Wykonać makiete cyfrową aplikacji
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-right"}>
                            <div className={"right-content-item-right-star"}>
                                <img src={favouriteicon} alt="star-icon" title={"Dodaj do Ważnych"}/>
                            </div>
                            <div className={"right-content-item-right-delete"}>
                                <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item"}>
                        <div className={"tasks-list-right-content-item-left"}>
                            <div className={"circle"}>
                                <img src={completedicon} alt="check-icon"/>
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-middle"}>
                            <div className={"right-content-item-middle-date"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text"}>
                                Wykonać makiete cyfrową aplikacji
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-right"}>
                            <div className={"right-content-item-right-star"}>
                                <img src={favouriteicon} alt="star-icon" title={"Dodaj do Ważnych"}/>
                            </div>
                            <div className={"right-content-item-right-delete"}>
                                <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item"}>
                        <div className={"tasks-list-right-content-item-left"}>
                            <div className={"circle"}>
                                <img src={completedicon} alt="check-icon"/>
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-middle"}>
                            <div className={"right-content-item-middle-date"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text"}>
                                Wykonać makiete cyfrową aplikacji
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-right"}>
                            <div className={"right-content-item-right-star"}>
                                <img src={favouriteicon} alt="star-icon" title={"Dodaj do Ważnych"}/>
                            </div>
                            <div className={"right-content-item-right-delete"}>
                                <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"}/>
                            </div>
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item"}>
                        <div className={"tasks-list-right-content-item-left"}>
                            <div className={"circle"}>
                                <img src={completedicon} alt="check-icon"/>
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-middle"}>
                            <div className={"right-content-item-middle-date"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text"}>
                                Wykonać makiete cyfrową aplikacji
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-right"}>
                            <div className={"right-content-item-right-star"}>
                                <img src={favouriteicon} alt="star-icon" title={"Dodaj do Ważnych"}/>
                            </div>
                            <div className={"right-content-item-right-delete"}>
                                <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasklist;