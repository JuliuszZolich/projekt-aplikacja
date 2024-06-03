import './Notes.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import addicon from "./assets/add.png"
import deleteicon from "./assets/bin.png"
import modifyicon from "./assets/modify.png"

const Notes = () => {
    const {t: translation} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"notes-main-content"}>
                <div className={"notes-search-input"}>
                    <img src={findicon} alt="finc-icon" title={"Znajdz"}/>
                    <input type={"text"} name={"find"} placeholder={translation.Notes.find}/>
                </div>
                <div className={"note"} title={"Dodaj notatke"}>
                    <div className={"add-note"}>
                        <img src={addicon} alt="add-note-icon"/>
                    </div>
                </div>
                <div className={"note"} title={"Wyświetl treść notatki"}>
                    <div className={"note-title"}>
                        Title
                    </div>
                    <div className={"note-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"note-delete"} title={"Usuń notatke"}>
                        <img src={deleteicon} alt="note-delete-icon"/>
                    </div>
                </div>
                <div className={"note"}>
                    <div className={"note-title"}>
                        Title
                    </div>
                    <div className={"note-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"note-delete"}>
                        <img src={deleteicon} alt="note-delete-icon"/>
                    </div>
                </div>
                <div className={"note"}>
                    <div className={"note-title"}>
                        Title
                    </div>
                    <div className={"note-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"note-delete"}>
                        <img src={deleteicon} alt="note-delete-icon"/>
                    </div>
                </div>
                <div className={"note"}>
                    <div className={"note-title"}>
                        Title
                    </div>
                    <div className={"note-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"note-delete"}>
                        <img src={deleteicon} alt="note-delete-icon"/>
                    </div>
                </div>
                <div className={"note"}>
                    <div className={"note-title"}>
                        Title
                    </div>
                    <div className={"note-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"note-delete"}>
                        <img src={deleteicon} alt="note-delete-icon"/>
                    </div>
                </div>
                <div className={"note"}>
                    <div className={"note-title"}>
                        Title
                    </div>
                    <div className={"note-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"note-delete"}>
                        <img src={deleteicon} alt="note-delete-icon"/>
                    </div>
                </div>
                <div className={"note"}>
                    <div className={"note-title"}>
                        Title
                    </div>
                    <div className={"note-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"note-delete"}>
                        <img src={deleteicon} alt="note-delete-icon"/>
                    </div>
                </div>
                <div className={"note"}>
                    <div className={"note-title"}>
                        Title
                    </div>
                    <div className={"note-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"note-delete"}>
                        <img src={deleteicon} alt="note-delete-icon"/>
                    </div>
                </div>
                <div className={"note"}>
                    <div className={"note-title"}>
                        Title
                    </div>
                    <div className={"note-content"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className={"note-delete"}>
                        <img src={deleteicon} alt="note-delete-icon"/>
                    </div>
                </div>
                <div className={"note-window"}>
                    <div className={"note-window-top-bar"}>
                        <div className={"note-window-top-bar-title"}>
                            Title
                        </div>
                        <div className={"note-window-top-bar-modify"}>
                            <img src={modifyicon} alt="modify-icon" title={"Modyfikuj"}/>
                        </div>
                    </div>
                    <div className={"note-window-text"}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat
                            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className={"note-window-bottom-bar"}>
                        <div className={"note-window-bottom-bar-close"}>
                            Zamknij
                        </div>
                    </div>
                </div>
                <div className={"add-note-window"}>
                    <div className={"add-note-window-top-bar"}>
                        Dodaj notatke
                    </div>
                    <div className={"add-note-window-middle-content"}>
                        <input type="text" placeholder={"Wpisz tytuł notatki"}/>
                        <textarea id={"add-note-window-text"} name={"note-content"} placeholder={"Wpisz treść notatki"}>
                        </textarea>
                    </div>
                    <div className={"add-note-window-bottom-bar"}>
                        <div className={"add-note-window-bottom-bar-item add-note-window-bottom-bar-item-cancel"}>
                            Anuluj
                        </div>
                        <div className={"add-note-window-bottom-bar-item add-note-window-bottom-bar-item-add"}>
                            Dodaj
                        </div>
                    </div>
                </div>
                <div className={"cancel-window"}>
                    <div className={"cancel-window-text"}>
                        Niezapisane zmiany <span
                        className={"cancel-window-text-decoration"}>nie zostaną zachowane</span>,
                        czy chcesz anulować?
                    </div>
                    <div className={"cacnel-window-bottom-bar"}>
                        <div className={"cacnel-window-bottom-bar-item cacnel-window-bottom-bar-yes"}>
                            Tak
                        </div>
                        <div className={"cacnel-window-bottom-bar-item cacnel-window-bottom-bar-no"}>
                            Nie
                        </div>
                    </div>
                </div>
                <div className={"delete-window"}>
                    <div className={"delete-window-text"}>
                        Czy napewno chcesz <span className={"delete-window-text-decoration"}>usunąć</span> notatke?
                    </div>
                    <div className={"delete-window-bottom-bar"}>
                        <div className={"delete-window-bottom-bar-item delete-window-bottom-bar-delete"}>
                            Usuń
                        </div>
                        <div className={"delete-window-bottom-bar-item delete-window-bottom-bar-keep"}>
                            Zachowaj
                        </div>
                    </div>
                </div>
                <div className={"modify-note-window"}>
                    <div className={"modify-note-window-top-bar"}>
                        <div className={"modify-note-window-top-bar-text"}>
                            Modyfikuj notatke
                        </div>
                        <div className={"modify-note-window-top-bar-delete"}>
                            <img src={deleteicon} alt="delete-icon" title={"Usuń"}/>
                        </div>
                    </div>
                    <div className={"modify-note-window-middle-content"}>
                        <input type="text" placeholder={"Wpisz tytuł notatki"}/>
                        <textarea id={"modify-note-window-text"} name={"note-content"}
                                  placeholder={"Wpisz treść notatki"}>
                        </textarea>
                    </div>
                    <div className={"modify-note-window-bottom-bar"}>
                        <div className={"modify-note-window-bottom-bar-item modify-note-window-bottom-bar-item-cancel"}>
                            Anuluj
                        </div>
                        <div className={"modify-note-window-bottom-bar-item modify-note-window-bottom-bar-item-save"}>
                            Zapisz
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default Notes;