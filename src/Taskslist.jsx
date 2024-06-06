import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import './Taskslist.css'
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import addicon from "./assets/add.png"
import completedicon from "./assets/check.png"
import favouriteicon from "./assets/star.png"
import deleteicon from "./assets/bin.png"

const Tasklist = () => {
    const {t: translation} = useLanguage();
    return(
        <>
            {TopBarAndSideMenu()}
            <div className={"tasks-list-main-content"}>
                <div className={"tasks-list-top-bar"}>
                    <div className={"tasks-list-find"}>
                        <img src={findicon} alt="finc-icon" title={"Wyszukaj"}/>
                        <input type={"text"} name={"find"} className={"top-bar-p"} placeholder={translation.TasksList.find}/>
                    </div>
                </div>
                <div className={"tasks-list-left-content"}>
                    <div className="tasks-list-left-content-item tasks-list-p">
                        {translation.TasksList.all}
                    </div>
                    <div className="tasks-list-left-content-item tasks-list-p">
                        {translation.TasksList.important}
                    </div>
                    <div className="tasks-list-left-content-item tasks-list-p">
                        {translation.TasksList.active}
                    </div>
                    <div className="tasks-list-left-content-item tasks-list-p">
                        {translation.TasksList.done}
                    </div>
                </div>
                <div className="tasks-list-line"></div>
                <div className={"tasks-list-right-content"}>
                    <div className={"tasks-list-right-content-add"}>
                        <div className={"tasks-list-right-content-add-img"}>
                            <img src={addicon} alt="add-icon"/>
                        </div>
                        <div className={"tasks-list-right-content-add-text home-p"}>
                            {translation.TasksList.addItem}
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item"}>
                        <div className={"tasks-list-right-content-item-left"}>
                            <div className={"circle"}>
                                <img src={completedicon} alt="check-icon"/>
                            </div>
                        </div>
                        <div className={"tasks-list-right-content-item-middle"}>
                            <div className={"right-content-item-middle-date medium-text-p"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title tasks-list-p"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text top-bar-p"}>
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
                            <div className={"right-content-item-middle-date medium-text-p"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title tasks-list-p"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text top-bar-p"}>
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
                            <div className={"right-content-item-middle-date medium-text-p"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title tasks-list-p"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text top-bar-p"}>
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
                            <div className={"right-content-item-middle-date medium-text-p"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title tasks-list-p"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text top-bar-p"}>
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
                            <div className={"right-content-item-middle-date medium-text-p"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title tasks-list-p"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text top-bar-p"}>
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
                            <div className={"right-content-item-middle-date medium-text-p"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title tasks-list-p"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text top-bar-p"}>
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
                            <div className={"right-content-item-middle-date medium-text-p"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title tasks-list-p"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text top-bar-p"}>
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
                            <div className={"right-content-item-middle-date medium-text-p"}>
                                24.05.2024
                            </div>
                            <div className={"right-content-item-middle-title tasks-list-p"}>
                                Projekt KCK Figma
                            </div>
                            <div className={"right-content-item-middle-text top-bar-p"}>
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