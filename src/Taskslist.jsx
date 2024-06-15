import './Taskslist.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import addicon from "./assets/add.png"
import completedicon from "./assets/check.png"
import favouriteicon from "./assets/star.png"
import filledstaricon from "./assets/checkedstar.png"
import deleteicon from "./assets/bin.png"
import openmenu from "./assets/arrows.png"
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {OpenCloseTasksMenu} from "./TaskslistFunctions.jsx";

let currentTaskId = 0;
let isOpenMenu = 0;

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

    setTasks(data["tasklist"].map(task => {
            return (
                <div className={"tasks-list-right-content-item"}
                     key={task["id"]}
                     data-fav={task.favourite}
                     data-fin={task.completed}
                     onClick={() => {
                         if(document.getElementById("delete").style.display !== "none") return;
                         currentTaskId = task["id"];
                         document.getElementById("display").style.display = "block";
                         document.getElementsByClassName("task-window-text")[0].children[0].innerText = task["content"];
                         document.getElementsByClassName("task-window-top-bar-title")[0].innerText = task["title"];

                     }}
                >
                    <div className={"tasks-list-right-content-item-left"}>
                        {(() => {
                            if (task["completed"] === true) {
                                return (<div className={"circle"} style={{backgroundColor: "#5EC25C"}}>
                                    <img src={completedicon} alt="check-icon" style={{display: "block"}}/>
                                </div>);
                            } else {
                                return (<div className={"circle"} style={{backgroundColor: "none"}}>
                                    <img src={completedicon} alt="check-icon" style={{display: "none"}}/>
                                </div>);
                            }
                        })()
                        }
                    </div>
                    <div className={"tasks-list-right-content-item-middle"}>
                        <div className={"right-content-item-middle-date"}>
                            {(() => {
                                const date = task["date"].split(" ")
                                let day = date[2];
                                const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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
                        <div className={"right-content-item-middle-title"} data-title={task.title}>
                            {task["title"]}
                        </div>
                        <div className={"right-content-item-middle-text"} data-content={task.content}>
                            {task["content"]}
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item-right"}>
                        <div className={"right-content-item-right-star"}>
                            {(() => {
                                if (task["favourite"] === "true") {
                                    return <img src={favouriteicon} alt="star - icon" title={"Dodaj do Ważnych"}/>;
                                } else {
                                    return <img src={filledstaricon} alt="star - icon" title={"Usuń z Ważnych"}/>;
                                }
                            })()
                            }
                        </div>
                        <div className={"right-content-item-right-delete"}>
                            <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"} onClick={()=>
                            {
                                currentTaskId = task["id"];
                                document.getElementById("delete").style.display = "block";
                            }}/>
                        </div>
                    </div>
                </div>
            );
        }
    ));
}

async function removeTask() {
    let headers = new Headers();
    headers.append("Task-ID", currentTaskId);
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

async function addTask(title, content, date) {
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

function filterTasks(tasks, filter, inputValue) {
    return tasks.filter(task => {
        let typefilter;
        switch (filter) {
            case 0:
                typefilter = true;
                break;
            case 1:
                typefilter = task.props["data-fav"] === true;
                break;
            case 2:
                typefilter = task.props["data-fin"] === false;
                break;
            case 3:
                typefilter = task.props["data-fin"] === true;
                break;
            default:
                typefilter = true;
                break;
        }
        if (inputValue.length === 0) {
            return typefilter;
        }

        let searchfilter = true;

        let title = task.props.children[1].props.children[1].props.children.toLowerCase();
        let content = task.props.children[1].props.children[2].props.children.toLowerCase();
        if (!title.includes(inputValue) && !content.includes(inputValue)) {
            searchfilter = false;
        }

        return typefilter && searchfilter;
    });
}

const Tasklist = () => {
    const [tasks, setTasks] = useState([]);
    const [cookies] = useCookies([]);
    useEffect(() => {
        getTasks(cookies['userID'], setTasks).then(() => console.log("Tasks loaded"));
    }, [cookies]);
    const [filter, setFilter] = useState(0);
    const [inputValue, setInputValue] = useState("");
    let filteredTask = filterTasks(tasks, filter, inputValue);
    const {t: translation} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"tasks-list-left-content-open-menu"} onClick={() => {
                OpenCloseTasksMenu(isOpenMenu);
                if (isOpenMenu === 1) isOpenMenu = 0; else isOpenMenu = 1
            }}>
                <img className={"tasks-list-left-content-open-menu-img"} src={openmenu} alt="open-menu-icon"/>
            </div>
            <div className={"tasks-list-left-content-menu"}>
                <div className="tasks-list-left-content-item tasks-list-p tasks-list-p-active" id={"all1"}
                     onClick={() => {
                         setFilter(0);
                         document.getElementById("all1").classList.add("tasks-list-p-active");
                         document.getElementById("fav1").classList.remove("tasks-list-p-active");
                         document.getElementById("act1").classList.remove("tasks-list-p-active");
                         document.getElementById("comp1").classList.remove("tasks-list-p-active");
                     }
                     }>
                    {translation.TasksList.all}
                </div>
                <div className="tasks-list-left-content-item tasks-list-p" id={"fav1"} onClick={() => {
                    setFilter(1);
                    document.getElementById("all1").classList.remove("tasks-list-p-active");
                    document.getElementById("fav1").classList.add("tasks-list-p-active");
                    document.getElementById("act1").classList.remove("tasks-list-p-active");
                    document.getElementById("comp1").classList.remove("tasks-list-p-active");
                }
                }>
                    {translation.TasksList.important}
                </div>
                <div className="tasks-list-left-content-item tasks-list-p" id={"act1"} onClick={() => {
                    setFilter(2);
                    document.getElementById("all1").classList.remove("tasks-list-p-active");
                    document.getElementById("fav1").classList.remove("tasks-list-p-active");
                    document.getElementById("act1").classList.add("tasks-list-p-active");
                    document.getElementById("comp1").classList.remove("tasks-list-p-active");
                }
                }>
                    {translation.TasksList.active}
                </div>
                <div className="tasks-list-left-content-item tasks-list-p" id={"comp1"} onClick={() => {
                    setFilter(3);
                    document.getElementById("all1").classList.remove("tasks-list-p-active");
                    document.getElementById("fav1").classList.remove("tasks-list-p-active");
                    document.getElementById("act1").classList.remove("tasks-list-p-active");
                    document.getElementById("comp1").classList.add("tasks-list-p-active");
                }
                }>
                    {translation.TasksList.done}
                </div>
            </div>
            <div className={"tasks-list-main-content"}>
                <div className={"tasks-list-top-bar"}>
                    <div className={"tasks-list-find"}>
                        <img className={"tasks-list-find-img"} src={findicon} alt="finc-icon" id={"input"}
                             title={"Wyszukaj"}/>
                        <input type={"text"} name={"find"} className={"top-bar-p"}
                               placeholder={translation.TasksList.find}
                               onChange={event => {
                                   filteredTask = filterTasks(tasks, filter, event.target.value);
                                   setInputValue(event.target.value);
                               }
                               }/>
                    </div>
                </div>
                <div className={"tasks-list-left-content"}>
                    <div className={"tasks-list-left-content-item tasks-list-p tasks-list-p-active"} id={"all"}
                         onClick={() => {
                             setFilter(0);
                             document.getElementById("all").classList.add("tasks-list-p-active");
                             document.getElementById("fav").classList.remove("tasks-list-p-active");
                             document.getElementById("act").classList.remove("tasks-list-p-active");
                             document.getElementById("comp").classList.remove("tasks-list-p-active");
                         }
                         }>
                        {translation.TasksList.all}
                    </div>
                    <div className={"tasks-list-left-content-item tasks-list-p"} id={"fav"} onClick={() => {
                        setFilter(1);
                        document.getElementById("all").classList.remove("tasks-list-p-active");
                        document.getElementById("act").classList.remove("tasks-list-p-active");
                        document.getElementById("comp").classList.remove("tasks-list-p-active");
                        document.getElementById("fav").classList.add("tasks-list-p-active");
                    }
                    }>
                        {translation.TasksList.important}
                    </div>
                    <div className={"tasks-list-left-content-item tasks-list-p"} id={"act"} onClick={() => {
                        setFilter(2);
                        document.getElementById("all").classList.remove("tasks-list-p-active");
                        document.getElementById("fav").classList.remove("tasks-list-p-active");
                        document.getElementById("comp").classList.remove("tasks-list-p-active");
                        document.getElementById("act").classList.add("tasks-list-p-active");
                    }}>
                        {translation.TasksList.active}
                    </div>
                    <div className={"tasks-list-left-content-item tasks-list-p"} id={"comp"} onClick={() => {
                        setFilter(3);
                        document.getElementById("all").classList.remove("tasks-list-p-active");
                        document.getElementById("fav").classList.remove("tasks-list-p-active");
                        document.getElementById("act").classList.remove("tasks-list-p-active");
                        document.getElementById("comp").classList.add("tasks-list-p-active");
                    }}>
                        {translation.TasksList.done}
                    </div>
                </div>
                <div className="tasks-list-line"></div>
                <div className={"tasks-list-right-content"}>
                    <div className={"tasks-list-right-content-add"}>
                        <div className={"tasks-list-right-content-add-img"}>
                            <img src={addicon} alt="add-icon"/>
                        </div>
                        <div className={"tasks-list-right-content-add-text home-p"} onClick={() => {
                            document.getElementById("add").style.display = "block";
                        }}>
                            {translation.TasksList.addItem}
                        </div>
                    </div>
                    {filteredTask}
                </div>
            </div>
            <div className={"task-window"} id={"display"} style={{display: "none"}}>
                <div className={"task-window-top-bar"}>
                    <div className={"task-window-top-bar-title"}>
                        Title
                    </div>
                    <div className={"task-window-top-bar-modify"}>
                        <img src={"./src/assets/modify.png"}
                             alt="modify-icon"
                             title={"Modyfikuj"}
                             onClick={()=>{
                                    document.getElementById("modify").style.display = "block";
                                    document.getElementById("modify-task-window-text").value = document.getElementsByClassName("task-window-text")[0].children[0].innerText;
                                    document.getElementById("modify-task-window-title").value = document.getElementsByClassName("task-window-top-bar-title")[0].innerText;
                             }}
                        />
                    </div>
                </div>
                <div className={"task-window-text"}>
                    <p>
                        a
                    </p>
                </div>
                <div className={"task-window-bottom-bar"}>
                    <div className={"task-window-bottom-bar-close"}
                         onClick={() => {
                             document.getElementById("display").style.display = "none";
                         }
                         }
                    >
                        Zamknij
                    </div>
                </div>
            </div>
            <div className={"add-task-window"} id={"add"} style={{display: "none"}}>
                <div className={"add-task-window-top-bar"}>
                    Dodaj notatke
                </div>
                <div className={"add-task-window-middle-content"}>
                    <input type="text" placeholder={"Wpisz tytuł notatki"}/>
                    <div className={"add-task-window-select-date"}>
                        <select name="add-task-window-select-day" id="add-task-window-select-day">
                            <option value="default">-</option>
                            <option value="1">1</option>
                        </select>
                        <select name="add-task-window-select-month" id="add-task-window-select-month">
                            <option value="default">-</option>
                            <option value="january">1</option>
                        </select>
                        <select name="add-task-window-select-year" id="add-task-window-select-year">
                            <option value="default">-</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                    <textarea id={"add-task-window-text"} name={"task-content"} placeholder={"Wpisz treść notatki"}>
                        </textarea>
                </div>
                <div className={"add-task-window-bottom-bar"}>
                    <div className={"add-task-window-bottom-bar-item add-task-window-bottom-bar-item-cancel"}
                         onClick={() => {
                             document.getElementById("cancel").style.display = "block";
                         }}>
                        Anuluj
                    </div>
                    <div className={"add-task-window-bottom-bar-item add-task-window-bottom-bar-item-add"}>
                        Dodaj
                    </div>
                </div>
            </div>
            <div className={"cancel-window-task"} id={"cancel"} style={{display: "none"}}>
                <div className={"cancel-window-task-text"}>
                    Niezapisane zmiany <span
                    className={"cancel-window-task-text-decoration"}>nie zostaną zachowane</span>,
                    czy chcesz anulować?
                </div>
                <div className={"cancel-window-bottom-bar"}>
                    <div className={"cancel-window-task-bottom-bar-item cancel-window-task-bottom-bar-yes"}
                         onClick={() => {
                             document.getElementById("cancel").style.display = "none";
                             if (document.getElementById("add").style.display === "block") {
                                 document.getElementById("add").style.display = "none";
                             }
                             if (document.getElementById("modify").style.display === "block") {
                                 document.getElementById("modify").style.display = "none";
                             }
                         }}>
                        Tak
                    </div>
                    <div className={"cancel-window-task-bottom-bar-item cancel-window-task-bottom-bar-no"}
                         onClick={() => {
                             document.getElementById("cancel").style.display = "none";
                         }}>
                        Nie
                    </div>
                </div>
            </div>
            <div className={"delete-window-task"} id={"delete"} style={{display: "none"}}>
                <div className={"delete-window-task-text"}>
                    Czy napewno chcesz <span className={"delete-window-task-text-decoration"}>usunąć</span> notatke?
                </div>
                <div className={"delete-window-task-task-bottom-bar"}>
                    <div className={"delete-window-task-bottom-bar-item delete-window-task-bottom-bar-delete"}
                        onClick={()=>{
                            //TODO removeTask();
                            document.getElementById("delete").style.display = "none";
                            if(document.getElementById("modify").style.display !== "none") document.getElementById("modify").style.display = "none";
                        }}
                    >
                        Usuń
                    </div>
                    <div className={"delete-window-task-bottom-bar-item delete-window-task-bottom-bar-keep"} onClick={()=>{
                        document.getElementById("delete").style.display = "none";
                    }}>
                        Zachowaj
                    </div>
                </div>
            </div>
            <div className={"modify-task-window"} id={"modify"} style={{display: "none"}}>
                <div className={"modify-task-window-top-bar"}>
                    <div className={"modify-task-window-top-bar-text"}>
                        Modyfikuj notatke
                    </div>
                    <div className={"modify-task-window-top-bar-delete"} onClick={()=>
                    {
                        document.getElementById("delete").style.display = "block";

                    }}>
                        <img src={"./src/assets/bin.png"} alt="delete-icon" title={"Usuń"}/>
                    </div>
                </div>
                <div className={"modify-task-window-middle-content"}>
                    <input type="text" placeholder={"Wpisz tytuł notatki"} id={"modify-task-window-title"}/>
                    <div className={"modify-task-window-select-date"}>
                        <select name="modify-task-window-select-day" id="modify-task-window-select-day">
                            <option value="default">-</option>
                            <option value="1">1</option>
                        </select>
                        <select name="modify-task-window-select-month" id="modify-task-window-select-month">
                            <option value="default">-</option>
                            <option value="january">1</option>
                        </select>
                        <select name="modify-task-window-select-year" id="modify-task-window-select-year">
                            <option value="default">-</option>
                            <option value="2024">2024</option>
                        </select>
                    </div>
                    <textarea id={"modify-task-window-text"} name={"task-content"}
                              placeholder={"Wpisz treść notatki"}>
                    </textarea>
                </div>
                <div className={"modify-task-window-bottom-bar"}>
                    <div className={"modify-task-window-bottom-bar-item modify-task-window-bottom-bar-item-cancel"}
                        onClick={() => {
                                document.getElementById("cancel").style.display = "block";
                            }}
                    >
                        Anuluj
                    </div>
                    <div className={"modify-task-window-bottom-bar-item modify-task-window-bottom-bar-item-save"}>
                        Zapisz
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasklist;