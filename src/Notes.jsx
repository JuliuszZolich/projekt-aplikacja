import './Notes.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import addicon from "./assets/add.png"
import deleteicon from "./assets/bin.png"
import modifyicon from "./assets/modify.png"
import {useEffect, useState} from "react";

//todo Zmienna globalna XD
let currentNoteId = 0;


async function remove_note(noteID) {
    console.log(noteID)
    let headers = new Headers();
    headers.append("UserID", "0");
    headers.append("Action-Type", "DELETE");
    headers.append("Note-ID", noteID);
    //todo Potencjalna zmiana linku?
    await fetch("http://localhost:8001/notes", {
        method: "GET",
        headers: headers,
    });
    window.location.reload();
}

async function get_notes(user_id, setNotes) {
    let headers = new Headers();
    headers.append("UserID", user_id);
    headers.append("Action-Type", "GET");
    headers.append("Note-ID", "all");
    const response = await fetch("http://localhost:8001/notes", {
        method: "GET",
        headers: headers,
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    setNotes(data["notes"].map(note => {
            return (
                <div className={'note'} key={note["id"]} onClick={() => {
                    currentNoteId = note["id"];
                    document.getElementsByClassName("note-window")[0].style.display = "block";
                    document.getElementsByClassName("note-window-top-bar-title")[0].textContent = note["title"];
                    document.getElementsByClassName("note-window-text")[0].textContent = note["content"];
                }}>
                    <div className={'note-title'}>
                        {note["title"]}
                    </div>
                    <div className={'note-content'}>
                        {note["content"]}
                    </div>
                    <div className={'note-delete'} onClick={() => {
                        if(document.getElementsByClassName("delete-window")[0].style.display === "none") {
                            document.getElementsByClassName("delete-window")[0].style.display = "block";
                            document.getElementsByClassName("delete-window-bottom-bar-delete")[0].onclick = () => {
                                remove_note(note["id"]);
                            }
                            document.getElementsByClassName("delete-window-bottom-bar-keep")[0].onclick = () => {
                                document.getElementsByClassName("delete-window")[0].style.display = "none";
                            }
                        } else {
                            document.getElementsByClassName("delete-window")[0].style.display = "none";
                        }

                    }}>
                        <img src={'./src/assets/bin.png'} alt='note-delete-icon'/>
                    </div>
                </div>
            );
        }
    ));
}

async function modify_note(user_id, note_id, title, content) {
    let headers = new Headers();
    headers.append("UserID", user_id);
    headers.append("Action-Type", "UPDATE");
    headers.append("Note-ID", note_id);
    await fetch("http://localhost:8001/notes", {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
            "title": title,
            "content": content
        })
    });
    window.location.reload();
}

async function add_note(user_id, title, content) {
let headers = new Headers();
    headers.append("UserID", user_id);
    headers.append("Action-Type", "POST");
    await fetch("http://localhost:8001/notes", {
        method: "POST",
        headers: headers,
        body: JSON.stringify({
            "title": title,
            "content": content
        })
    });
    window.location.reload();
}

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        //todo Ustawić user_id na podstawie ciasteczek
        get_notes("0", setNotes).then(() => console.log("Notes loaded"));
    }, []);
    const {t: translation} = useLanguage();
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"notes-main-content"}>
                <div className={"notes-search-input"}>
                    <img src={findicon} alt="finc-icon" title={"Znajdz"}/>
                    <input type={"text"} name={"find"} className={"home-p"} placeholder={translation.Notes.find}/>
                </div>
                <div className={"note"} title={"Dodaj notatke"}  onClick={() => {
                    if(document.getElementsByClassName("add-note-window")[0].style.display === "none") {
                        document.getElementsByClassName("add-note-window")[0].style.display = "block";
                    } else {
                        document.getElementsByClassName("add-note-window")[0].style.display = "none";
                    }
                }
                }>
                    <div className={"add-note"}>
                        <img src={addicon} alt="add-note-icon"/>
                    </div>
                </div>
                {notes}
                <div className={"note-window"}>
                    <div className={"note-window-top-bar"}>
                        <div className={"note-window-top-bar-title"}>
                            Title
                        </div>
                        <div className={"note-window-top-bar-modify"} onClick={()=>{
                            if(document.getElementsByClassName("modify-note-window")[0].style.display === "none") {
                                document.getElementsByClassName("modify-note-window")[0].style.display = "block";
                                document.getElementById("modify-note-window-title").value = document.getElementsByClassName("note-window-top-bar-title")[0].textContent;
                                document.getElementById("modify-note-window-text").value = document.getElementsByClassName("note-window-text")[0].textContent;
                            } else {
                                document.getElementsByClassName("modify-note-window")[0].style.display = "none";
                            }

                        }}>
                            <img src={modifyicon} alt="modify-icon" title={"Modyfikuj"}/>
                        </div>
                    </div>
                    <div className={"note-window-text"}>
                        <p>PLACEHOLDER</p>
                    </div>
                    <div className={"note-window-bottom-bar"}>
                        <div className={"note-window-bottom-bar-close"} onClick={() => {
                            document.getElementsByClassName("note-window")[0].style.display = "none";
                        }}>
                            Zamknij
                        </div>
                    </div>
                </div>
                <div className={"add-note-window"}>
                    <div className={"add-note-window-top-bar"}>
                        Dodaj notatke
                    </div>
                    <div className={"add-note-window-middle-content"}>
                        <input type="text" id={"add-note-window-title"} placeholder={"Wpisz tytuł notatki"}/>
                        <textarea id={"add-note-window-text"} name={"note-content"} placeholder={"Wpisz treść notatki"}>
                        </textarea>
                    </div>
                    <div className={"add-note-window-bottom-bar"}>
                        <div className={"add-note-window-bottom-bar-item add-note-window-bottom-bar-item-cancel"} onClick={() =>{
                            document.getElementsByClassName("cancel-window")[0].style.display = "block";
                        }}>
                            Anuluj
                        </div>
                        <div className={"add-note-window-bottom-bar-item add-note-window-bottom-bar-item-add"} onClick={()=>{
                            if(document.getElementById("add-note-window-title").value === "" || document.getElementById("add-note-window-text").value === "") {
                                alert("Wypełnij wszystkie pola!");
                                return;
                            }
                            add_note("0", document.getElementById("add-note-window-title").value, document.getElementById("add-note-window-text").value);
                            document.getElementsByClassName("add-note-window")[0].style.display = "none";
                            document.getElementById("add-note-window-title").value = "";
                            document.getElementById("add-note-window-text").value = "";
                        }}>
                            Dodaj
                        </div>
                    </div>
                </div>
                <div className={"cancel-window"}>
                    <div className={"cancel-window-text"}>
                        Niezapisane zmiany
                        <span className={"cancel-window-text-decoration"}>nie zostaną zachowane</span>,
                        czy chcesz anulować?
                    </div>
                    <div className={"cancel-window-bottom-bar"}>
                        <div className={"cancel-window-bottom-bar-item cancel-window-bottom-bar-yes"} onClick={()=>{
                            document.getElementsByClassName("add-note-window")[0].style.display = "none";
                            document.getElementById("add-note-window-title").value = "";
                            document.getElementById("add-note-window-text").value = "";
                            document.getElementsByClassName("modify-note-window")[0].style.display = "none";
                            document.getElementById("modify-note-window-title").value = "";
                            document.getElementById("modify-note-window-text").value = "";
                            document.getElementsByClassName("cancel-window")[0].style.display = "none";

                        }}>
                            Tak
                        </div>
                        <div className={"cancel-window-bottom-bar-item cancel-window-bottom-bar-no"} onClick={()=>{
                            document.getElementsByClassName("cancel-window")[0].style.display = "none";
                        }}>
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
                        <div className={"modify-note-window-top-bar-delete"} onClick={()=>{
                            document.getElementsByClassName("modify-note-window")[0].style.display = "none";

                        }}>
                            <img src={deleteicon} alt="delete-icon" title={"Usuń"}/>
                        </div>
                    </div>
                    <div className={"modify-note-window-middle-content"}>
                        <input type="text" id={"modify-note-window-title"} placeholder={"Wpisz tytuł notatki"}/>
                        <textarea id={"modify-note-window-text"} name={"note-content"}
                                  placeholder={"Wpisz treść notatki"}>
                        </textarea>
                    </div>
                    <div className={"modify-note-window-bottom-bar"}>
                        <div className={"modify-note-window-bottom-bar-item modify-note-window-bottom-bar-item-cancel"} onClick={()=>{
                            document.getElementsByClassName("cancel-window")[0].style.display = "block";
                        }}>
                            Anuluj
                        </div>
                        <div className={"modify-note-window-bottom-bar-item modify-note-window-bottom-bar-item-save"} onClick={() =>{
                            if(document.getElementById("modify-note-window-title").value === "" || document.getElementById("modify-note-window-text").value === "") {
                                alert("Wypełnij wszystkie pola!");
                                return;
                            }
                            modify_note("0", currentNoteId, document.getElementById("modify-note-window-title").value, document.getElementById("modify-note-window-text").value);
                            document.getElementsByClassName("modify-note-window")[0].style.display = "none";
                            document.getElementsByClassName("note-window")[0].style.display = "none";
                            document.getElementById("modify-note-window-title").value = "";
                            document.getElementById("modify-note-window-text").value = "";

                        }}>
                            Zapisz
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default Notes;