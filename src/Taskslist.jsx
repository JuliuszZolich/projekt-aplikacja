import './Taskslist.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import addicon from "./assets/add.png"
import completedicon from "./assets/check.png"
import favouriteicon from "./assets/star.png"
import deleteicon from "./assets/bin.png"
import openmenu from "./assets/arrows.png"
import {useEffect, useState} from "react";
import {OpenCloseTasksMenu} from "./TasksListFunctions.jsx";

let currentTaskId = 0;

async function getTasks(user_id, setTasks) {
    let headers = new Headers();
    headers.append("UserID", user_id);
    headers.append("Action-Type", "GET");
    headers.append("Task-ID", "all");
    const response = await fetch("http://localhost:8001/tasklist", {
        method: "GET",
        headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    console.log(data);

    setTasks(data["tasklist"].map(task => {
            return (
                <div className={"tasks-list-right-content-item"} key={task["id"]}>
                    <div className={"tasks-list-right-content-item-left"}>
                        <div className={"circle"}>
                            {(() => {
                                if (task["completed"] === "true") {
                                    return <img src={completedicon} alt="check-icon"/>;
                                } else {
                                    return <img src={completedicon} alt="check-icon"/>;
                                }
                            })()
                            }
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item-middle"}>
                        <div className={"right-content-item-middle-date"}>
                            {(()=>{
                                const date = task["date"].split(" ")
                                let day = date[2];
                                const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                let month = months.indexOf(date[1]) + 1;
                                let year = date[5];
                                let hours = date[3].split(":")[0];
                                let minutes = date[3].split(":")[1];
                                if (day < 10) {
                                    day = "0" + day;
                                }
                                if (month < 10) {
                                    month = "0" + month;
                                }
                                return `${day}.${month}.${year} ${hours}:${minutes}`;
                            })()}
                        </div>
                        <div className={"right-content-item-middle-title"}>
                            {task["title"]}
                        </div>
                        <div className={"right-content-item-middle-text"}>
                            {task["content"]}
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item-right"}>
                        <div className={"right-content-item-right-star"}>
                            {(() => {
                                if (task["favourite"] === "true") {
                                    return <img src={favouriteicon} alt="star - icon" title={"Dodaj do Ważnych"}/>;
                                } else {
                                    return <img src={favouriteicon} alt="star - icon" title={"Usuń z Ważnych"}/>;
                                }
                            })()
                            }
                        </div>
                        <div className={"right-content-item-right-delete"}>
                            <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"}/>
                        </div>
                    </div>
                </div>
            );
        }
    ));
}

async function remove_task(task_id) {
    let headers = new Headers();
    headers.append("Note-ID", note_id);
    headers.append("Action-Type", "DELETE");
    const response = await fetch("http://localhost:8001/tasklist", {
        method: "DELETE",
        headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    document.getElementsByClassName("delete-window")[0].style.display = "none";
    window.location.reload();
}

async function add_task(title, content, date) {
    let headers = new Headers();
    headers.append("Action-Type", "POST");
    headers.append("Content-Type", "application/json");
    const response = await fetch("http://localhost:8001/tasklist", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            title: title,
            content: content,
            date: date,
        }),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    window.location.reload();
}

let isOpenMenu = 0;

const Tasklist = () => {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        //todo Ustawić user_id na podstawie ciasteczek
        getTasks("0", setTasks).then(() => console.log("Tasks loaded"));
    }, []);
    const {t: translation} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"task-window"}>
                <div className={"task-window-top-bar"}>
                    <div className={"task-window-top-bar-title"}>
                        Title
                    </div>
                    <div className={"task-window-top-bar-modify"}>
                        <img src={"./src/assets/modify.png"} alt="modify-icon" title={"Modyfikuj"}/>
                    </div>
                </div>
                <div className={"task-window-text"}>
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
                <div className={"task-window-bottom-bar"}>
                    <div className={"task-window-bottom-bar-close"}>
                        Zamknij
                    </div>
                </div>
            </div>
            <div className={"add-task-window"}>
                <div className={"add-task-window-top-bar"}>
                    Dodaj notatke
                </div>
                <div className={"add-task-window-middle-content"}>
                    <input type="text" placeholder={"Wpisz tytuł notatki"}/>
                    <textarea id={"add-task-window-text"} name={"task-content"} placeholder={"Wpisz treść notatki"}>
                        </textarea>
                </div>
                <div className={"add-task-window-bottom-bar"}>
                    <div className={"add-task-window-bottom-bar-item add-task-window-bottom-bar-item-cancel"}>
                        Anuluj
                    </div>
                    <div className={"add-task-window-bottom-bar-item add-task-window-bottom-bar-item-add"}>
                        Dodaj
                    </div>
                </div>
            </div>
            <div className={"cancel-window-task"}>
                <div className={"cancel-window-task-text"}>
                    Niezapisane zmiany <span
                    className={"cancel-window-task-text-decoration"}>nie zostaną zachowane</span>,
                    czy chcesz anulować?
                </div>
                <div className={"cancel-window-bottom-bar"}>
                    <div className={"cancel-window-task-bottom-bar-item cancel-window-task-bottom-bar-yes"}>
                        Tak
                    </div>
                    <div className={"cancel-window-task-bottom-bar-item cancel-window-task-bottom-bar-no"}>
                        Nie
                    </div>
                </div>
            </div>
            <div className={"delete-window-task"}>
                <div className={"delete-window-task-text"}>
                    Czy napewno chcesz <span className={"delete-window-task-text-decoration"}>usunąć</span> notatke?
                </div>
                <div className={"delete-window-task-task-bottom-bar"}>
                    <div className={"delete-window-task-bottom-bar-item delete-window-task-bottom-bar-delete"}>
                        Usuń
                    </div>
                    <div className={"delete-window-task-bottom-bar-item delete-window-task-bottom-bar-keep"}>
                        Zachowaj
                    </div>
                </div>
            </div>
            <div className={"modify-task-window"}>
                <div className={"modify-task-window-top-bar"}>
                    <div className={"modify-task-window-top-bar-text"}>
                        Modyfikuj notatke
                    </div>
                    <div className={"modify-task-window-top-bar-delete"}>
                        <img src={"./src/assets/bin.png"} alt="delete-icon" title={"Usuń"}/>
                    </div>
                </div>
                <div className={"modify-task-window-middle-content"}>
                    <input type="text" placeholder={"Wpisz tytuł notatki"}/>
                    <textarea id={"modify-task-window-text"} name={"task-content"}
                              placeholder={"Wpisz treść notatki"}>
                        </textarea>
                </div>
                <div className={"modify-task-window-bottom-bar"}>
                    <div className={"modify-task-window-bottom-bar-item modify-task-window-bottom-bar-item-cancel"}>
                        Anuluj
                    </div>
                    <div className={"modify-task-window-bottom-bar-item modify-task-window-bottom-bar-item-save"}>
                        Zapisz
                    </div>
                </div>
            </div>
            <div className={"tasks-list-left-content-open-menu"} onClick={() => {OpenCloseTasksMenu(isOpenMenu);if(isOpenMenu === 1) isOpenMenu = 0;else isOpenMenu = 1}}>
                <img className={"tasks-list-left-content-open-menu-img"} src={openmenu} alt="open-menu-icon"/>
            </div>
            <div className={"tasks-list-left-content-menu"}>
                <div className="tasks-list-left-content-menu-item tasks-list-p ">
                    {translation.TasksList.all}
                </div>
                <div className="tasks-list-left-content-menu-item tasks-list-p">
                    {translation.TasksList.important}
                </div>
                <div className="tasks-list-left-content-menu-item tasks-list-p">
                    {translation.TasksList.active}
                </div>
                <div className="tasks-list-left-content-menu-item tasks-list-p">
                    {translation.TasksList.done}
                </div>
            </div>
            <div className={"tasks-list-main-content"}>
                <div className={"tasks-list-top-bar"}>
                    <div className={"tasks-list-find"}>
                        <img className={"tasks-list-find-img"} src={findicon} alt="finc-icon" title={"Wyszukaj"}/>
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
                    {tasks}
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