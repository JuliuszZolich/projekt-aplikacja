import './css/Taskslist.css'
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
let temp = 0;

function convertDate(date, variant) {
    const date2 = date.split(" ")
    let day = date2[2];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let month = months.indexOf(date2[1]) + 1;
    let year = date2[5];
    let hours = date2[3].split(":")[0];
    let minutes = date2[3].split(":")[1];
    if (month < 10) {
        month = "0" + month;
    }
    if(variant===1) return `${day}.${month}.${year} ${hours}:${minutes}`;
    else return `${year}-${month}-${day}`;
}

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
                <div className={"tasks-list-right-content-item"} tabIndex="0"
                     key={task["id"]}
                     id={task["id"]}
                     data-fav={task.favourite}
                     data-fin={task.completed}
                     onClick={() => {
                         if (document.getElementById("delete").style.display !== "none") return;
                         if (temp) {
                             temp = 0;
                             return;
                         }
                         currentTaskId = task["id"];
                         document.getElementById("display").style.display = "block";
                         document.getElementsByClassName("task-window-text")[0].children[0].innerText = task["content"];
                         document.getElementsByClassName("task-window-top-bar-title")[0].innerText = task["title"];
                         document.getElementById("display").setAttribute("data-date", convertDate(task["date"], 2));
                     }}>
                    <div className={"tasks-list-right-content-item-left"} tabIndex="0">
                        <div className={(() => {
                            if (task["completed"] === true) return "circle circle-checked";
                            else return "circle";
                        })()
                        }
                             onClick={() => {
                                 temp = 1;
                                 const newStatus = document.getElementById(task["id"]).getAttribute("data-fin") === "true" ? "false" : "true";
                                 document.getElementById(task["id"]).setAttribute("data-fin", newStatus);
                                 statusUpdate(task["id"], user_id, "completion", newStatus);
                             }}>
                            <img src={completedicon} alt="check-icon"/>
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item-middle"}>
                        <div className={"right-content-item-middle-date"}>
                            {convertDate(task["date"], 1)}
                        </div>
                        <div className={"right-content-item-middle-title"} data-title={task.title}>
                            {task["title"]}
                        </div>
                        <div className={"right-content-item-middle-text"} data-content={task.content}>
                            {task["content"]}
                        </div>
                    </div>
                    <div className={"tasks-list-right-content-item-right"}>
                        <div className={"right-content-item-right-star"} tabIndex="0">
                            <img src={(() => {
                                if (task.favourite === true) return filledstaricon
                                else return favouriteicon
                            })()} alt="star - icon" title={"Dodaj do Ważnych"}
                                 onClick={() => {
                                     temp = 1;
                                     const newStatus = document.getElementById(task["id"]).getAttribute("data-fav") === "true" ? "false" : "true";
                                     document.getElementById(task["id"]).setAttribute("data-fav", newStatus);
                                     statusUpdate(task["id"], user_id, "favourite", newStatus);
                                 }}
                            />
                        </div>
                        <div className={"right-content-item-right-delete"} tabIndex="0">
                            <img src={deleteicon} alt="delete-icon" title={"Usuń Zadanie"} onClick={() => {
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

async function removeTask(userId) {
    let headers = new Headers();
    headers.append("UserID", userId);
    headers.append("Task-ID", currentTaskId);
    headers.append("Action-Type", "DELETE");
    const response = await fetch("http://localhost:8001/tasklist", {
        method: "DELETE",
        headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    window.location.reload();
}

async function addTask(userid, title, content, date) {
    let headers = new Headers();
    headers.append("UserID", userid);
    headers.append("Action-Type", "POST");
    headers.append("Content-Type", "application/json");
    const response = await fetch("http://localhost:8001/tasklist", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            title: title,
            content: content,
            date: date,
            favourite: false,
        }),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    window.location.reload();
}

async function statusUpdate(taskId, userID, type, completion) {
    let headers = new Headers();
    headers.append("UserID", "1")
    headers.append("Task-ID", taskId);
    headers.append("Action-Type", "UPDATE");
    headers.append("Update-Type", type);
    headers.append("Status", completion);

    await fetch("http://localhost:8001/tasklist", {
        method: "GET",
        headers: headers,
    }).then(() => window.location.reload());

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
            <div className={"tasks-list-left-content-open-menu"} tabIndex="0" onClick={() => {
                OpenCloseTasksMenu(isOpenMenu);
                if (isOpenMenu === 1) isOpenMenu = 0; else isOpenMenu = 1
            }}>
                <img className={"tasks-list-left-content-open-menu-img"} src={openmenu} alt="open-menu-icon"/>
            </div>
            <div className={"tasks-list-left-content-menu"}>
                <div className="tasks-list-left-content-item tasks-list-p tasks-list-p-active" id={"all1"} tabIndex="0"
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
                <div className="tasks-list-left-content-item tasks-list-p" id={"fav1"} tabIndex="0" onClick={() => {
                    setFilter(1);
                    document.getElementById("all1").classList.remove("tasks-list-p-active");
                    document.getElementById("fav1").classList.add("tasks-list-p-active");
                    document.getElementById("act1").classList.remove("tasks-list-p-active");
                    document.getElementById("comp1").classList.remove("tasks-list-p-active");
                }
                }>
                    {translation.TasksList.important}
                </div>
                <div className="tasks-list-left-content-item tasks-list-p" id={"act1"} tabIndex="0" onClick={() => {
                    setFilter(2);
                    document.getElementById("all1").classList.remove("tasks-list-p-active");
                    document.getElementById("fav1").classList.remove("tasks-list-p-active");
                    document.getElementById("act1").classList.add("tasks-list-p-active");
                    document.getElementById("comp1").classList.remove("tasks-list-p-active");
                }
                }>
                    {translation.TasksList.active}
                </div>
                <div className="tasks-list-left-content-item tasks-list-p" id={"comp1"} tabIndex="0" onClick={() => {
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
                    <div className={"tasks-list-left-content-item tasks-list-p tasks-list-p-active"} id={"all"} tabIndex="0"
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
                    <div className={"tasks-list-left-content-item tasks-list-p"} id={"fav"} tabIndex="0" onClick={() => {
                        setFilter(1);
                        document.getElementById("all").classList.remove("tasks-list-p-active");
                        document.getElementById("act").classList.remove("tasks-list-p-active");
                        document.getElementById("comp").classList.remove("tasks-list-p-active");
                        document.getElementById("fav").classList.add("tasks-list-p-active");
                    }
                    }>
                        {translation.TasksList.important}
                    </div>
                    <div className={"tasks-list-left-content-item tasks-list-p"} id={"act"} tabIndex="0" onClick={() => {
                        setFilter(2);
                        document.getElementById("all").classList.remove("tasks-list-p-active");
                        document.getElementById("fav").classList.remove("tasks-list-p-active");
                        document.getElementById("comp").classList.remove("tasks-list-p-active");
                        document.getElementById("act").classList.add("tasks-list-p-active");
                    }}>
                        {translation.TasksList.active}
                    </div>
                    <div className={"tasks-list-left-content-item tasks-list-p"} id={"comp"} tabIndex="0" onClick={() => {
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
                        <div className={"tasks-list-right-content-add-text home-p"} tabIndex="0" onClick={() => {
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
                    <div className={"task-window-top-bar-modify"} tabIndex="0">
                        <img src={"./src/assets/modify.png"}
                             alt="modify-icon"
                             title={"Modyfikuj"}
                             onClick={() => {
                                 document.getElementById("modify").style.display = "block";
                                 document.getElementById("modify-task-window-text").value = document.getElementsByClassName("task-window-text")[0].children[0].innerText;
                                 document.getElementById("modify-task-window-title").value = document.getElementsByClassName("task-window-top-bar-title")[0].innerText;
                                 document.getElementById("modify-task-input").value = document.getElementById("display").getAttribute("data-date");

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
                    <div className={"task-window-bottom-bar-close"} tabIndex="0"
                         onClick={() => {
                             document.getElementById("display").style.display = "none";
                         }
                         }
                    >
                        {translation.Notes.close}
                    </div>
                </div>
            </div>
            <div className={"add-task-window"} id={"add"} style={{display: "none"}}>
                <div className={"add-task-window-top-bar"}>
                    {translation.Notes.addNote}
                </div>
                <div className={"add-task-window-middle-content"}>
                    <input type="text" placeholder={translation.Notes.title}/>
                    <div className={"add-task-window-select-date"} id={"modify-task-window-data"}>
                        <input type="date"/>
                    </div>
                    <textarea id={"add-task-window-text"} name={"task-content"} placeholder={translation.Notes.content}>
                        </textarea>
                </div>
                <div className={"add-task-window-bottom-bar"}>
                    <div className={"add-task-window-bottom-bar-item add-task-window-bottom-bar-item-cancel"} tabIndex="0"
                         onClick={() => {
                             document.getElementById("cancel").style.display = "block";
                         }}>
                        {translation.Notes.cancel}
                    </div>
                    <div className={"add-task-window-bottom-bar-item add-task-window-bottom-bar-item-add"} tabIndex="0"
                         onClick={() => {
                             const title = document.querySelector(".add-task-window-middle-content input").value;
                             const content = document.querySelector(".add-task-window-middle-content textarea").value;
                             const date = document.querySelector(".add-task-window-select-date input").value;
                             addTask(cookies.userID,title, content, date);
                         }}
                    >
                        {translation.Notes.add}
                    </div>
                </div>
            </div>
            <div className={"cancel-window-task"} id={"cancel"} style={{display: "none"}}>
                <div className={"cancel-window-task-text"}>
                    {translation.Notes.noSave1} <span
                    className={"cancel-window-task-text-decoration"}>{translation.Notes.noSave2}</span>,
                    {translation.Notes.wantCancel}
                </div>
                <div className={"cancel-window-bottom-bar"}>
                    <div className={"cancel-window-task-bottom-bar-item cancel-window-task-bottom-bar-yes"} tabIndex="0"
                         onClick={() => {
                             document.getElementById("cancel").style.display = "none";
                             if (document.getElementById("add").style.display === "block") {
                                 document.getElementById("add").style.display = "none";
                             }
                             if (document.getElementById("modify").style.display === "block") {
                                 document.getElementById("modify").style.display = "none";
                             }
                         }}>
                        {translation.Notes.yes}
                    </div>
                    <div className={"cancel-window-task-bottom-bar-item cancel-window-task-bottom-bar-no"} tabIndex="0"
                         onClick={() => {
                             document.getElementById("cancel").style.display = "none";
                         }}>
                        {translation.Notes.no}
                    </div>
                </div>
            </div>
            <div className={"delete-window-task"} id={"delete"} style={{display: "none"}}>
                <div className={"delete-window-task-text"}>
                    {translation.Notes.wantForSure} <span className={"delete-window-task-text-decoration"}>{translation.Notes.delete}</span> {translation.Notes.note}
                </div>
                <div className={"delete-window-task-task-bottom-bar"}>
                    <div className={"delete-window-task-bottom-bar-item delete-window-task-bottom-bar-delete"} tabIndex="0"
                         onClick={() => {
                             removeTask(cookies.userID);
                             document.getElementById("delete").style.display = "none";
                             if (document.getElementById("modify").style.display !== "none") document.getElementById("modify").style.display = "none";
                         }}
                    >
                        {translation.Notes.delete1}
                    </div>
                    <div className={"delete-window-task-bottom-bar-item delete-window-task-bottom-bar-keep"} tabIndex="0"
                         onClick={() => {
                             document.getElementById("delete").style.display = "none";
                         }}>
                        {translation.Notes.keep}
                    </div>
                </div>
            </div>
            <div className={"modify-task-window"} id={"modify"} style={{display: "none"}}>
                <div className={"modify-task-window-top-bar"}>
                    <div className={"modify-task-window-top-bar-text"}>
                        {translation.Notes.modify}
                    </div>
                    <div className={"modify-task-window-top-bar-delete"} tabIndex="0" onClick={() => {
                        document.getElementById("delete").style.display = "block";

                    }}>
                        <img src={"./src/assets/bin.png"} alt="delete-icon" title={"Usuń"}/>
                    </div>
                </div>
                <div className={"modify-task-window-middle-content"}>
                    <input type="text" placeholder={"Wpisz tytuł notatki"} id={"modify-task-window-title"}/>
                    <div className={"modify-task-window-select-date"}>
                        <input type="date" id={"modify-task-input"}/>
                    </div>
                    <textarea id={"modify-task-window-text"} name={"task-content"}
                              placeholder={translation.Notes.cotent}>
                    </textarea>
                </div>
                <div className={"modify-task-window-bottom-bar"}>
                    <div className={"modify-task-window-bottom-bar-item modify-task-window-bottom-bar-item-cancel"} tabIndex="0"
                         onClick={() => {
                             document.getElementById("cancel").style.display = "block";
                         }}
                    >
                        {translation.Notes.cancel}
                    </div>
                    <div className={"modify-task-window-bottom-bar-item modify-task-window-bottom-bar-item-save"}>
                        {translation.Notes.save}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tasklist;