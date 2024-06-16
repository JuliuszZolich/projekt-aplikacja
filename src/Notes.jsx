import './css/Notes.css'
import TopBarAndSideMenu from "./TopBarAndSideMenu.jsx";
import {useLanguage} from './ChangeLanguage.jsx';
import findicon from "./assets/find.png"
import addicon from "./assets/add.png"
import deleteicon from "./assets/bin.png"
import modifyicon from "./assets/modify.png"
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

const titleDisplayedSize = 13;
let currentNoteId = 0;


async function removeNote(noteID, cookies, setNotes) {
    let headers = new Headers();
    headers.append("UserID", cookies['userID']);
    headers.append("Action-Type", "DELETE");
    headers.append("Note-ID", noteID);
    const response = await fetch("http://localhost:8001/notes", {
        method: "GET",
        headers: headers,
    });

    if (response.ok) {
        setNotes(prevNotes => prevNotes.filter(note => note.key !== noteID));
    } else {
        console.error(`Failed to delete note with ID: ${noteID}`);
    }
}

async function getNotes(user_id, setNotes, cookies) {
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

    function showNoteWindow(note) {
        if (document.getElementsByClassName("delete-window")[0].style.display !== "none") return;
        currentNoteId = note["id"];
        document.getElementsByClassName("note-window")[0].style.display = "block";
        document.getElementsByClassName("note-window-top-bar-title")[0].textContent = note["title"];
        document.getElementsByClassName("note-window-text")[0].innerHTML = note["content"].replace(new RegExp("\\n", "g"), "<br />");
    }

    setNotes(data["notes"].map(note => {
            return (
                <div className={'note'} key={note["id"]} tabIndex="0" onClick={() => {
                    showNoteWindow(note);
                }}>
                    <div className={'note-title'}>
                        {(() => {
                            if (note["title"].length < titleDisplayedSize) return note["title"];
                            else return note["title"].substring(0, titleDisplayedSize).trim() + "...";
                        })()
                        }
                        <div id={"fulltitle"} style={{"display": "none"}}>{note["title"]}</div>
                    </div>
                    <div className={'note-content'}
                         dangerouslySetInnerHTML={{__html: note["content"].replace(new RegExp("\\n", "g"), "<br />")}
                         }>
                    </div>
                    <div className={'note-delete'} tabIndex="0" onClick={() => {
                        if (document.getElementsByClassName("delete-window")[0].style.display === "none") {
                            document.getElementsByClassName("delete-window")[0].style.display = "block";
                            document.getElementsByClassName("delete-window-bottom-bar-delete")[0].onclick = () => {
                                removeNote(note["id"], cookies, setNotes);
                                document.getElementsByClassName("delete-window")[0].style.display = "none";
                            }
                            document.getElementsByClassName("delete-window-bottom-bar-keep")[0].onclick = () => {
                                document.getElementsByClassName("delete-window")[0].style.display = "none";
                            }
                        } else {
                            document.getElementsByClassName("delete-window")[0].style.display = "none";
                        }

                    }}>
                        <img src={deleteicon} alt='note-delete-icon'/>
                    </div>
                </div>
            );
        }
    ));
}

async function modifyNote(user_id, note_id, title, content, setNotes) {
    let headers = new Headers();
    headers.append("UserID", user_id);
    headers.append("Action-Type", "UPDATE");
    headers.append("Note-ID", note_id);
    const response = await fetch("http://localhost:8001/notes", {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({
            "title": title,
            "content": content
        })
    });

    if (response.ok) {
        setNotes(prevNotes => prevNotes.map(note => note.key === note_id ? {...note, title, content} : note));
    } else {
        console.error(`Failed to modify note with ID: ${note_id}`);
    }
}

async function addNote(user_id, title, content, setNotes, cookies) {
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
    }).then(() => {
        getNotes(user_id, setNotes, cookies);
    });
}

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [cookies] = useCookies([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        getNotes(cookies['userID'], setNotes, cookies).then(() => console.log("Notes loaded"));
    }, [cookies]);
    const {t: translation} = useLanguage();
    const filteredNotes = notes.filter(note =>
        note.props.children[0].props.children[1].props.children.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.props.children[1].props.dangerouslySetInnerHTML.__html.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            {TopBarAndSideMenu()}
            <div className={"notes-main-content"}>
                <div className={"notes-search-input"}>
                    <img src={findicon} alt="finc-icon" title={"Znajdz"}/>
                    <input type={"text"}
                           name={"find"}
                           className={"home-p"}
                           placeholder={translation.Notes.find}
                           onChange={event => setSearchTerm(event.target.value)}
                    />
                </div>
                <div className={"note"} title={"Dodaj notatke"} tabIndex="0" onClick={() => {
                    if (document.getElementsByClassName("add-note-window")[0].style.display === "none") {
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
                {filteredNotes}
                <div className={"bottom-bar"}></div>
                <div className={"note-window"}>
                    <div className={"note-window-top-bar"}>
                        <div className={"note-window-top-bar-title"}>
                            Title
                        </div>
                        <div className={"note-window-top-bar-modify"} tabIndex="0" onClick={() => {
                            if (document.getElementsByClassName("modify-note-window")[0].style.display === "none") {
                                document.getElementsByClassName("modify-note-window")[0].style.display = "block";
                                document.getElementById("modify-note-window-title").value = document.getElementsByClassName("note-window-top-bar-title")[0].innerHTML;
                                document.getElementById("modify-note-window-text").value = document.getElementsByClassName("note-window-text")[0].innerHTML.replace(new RegExp("<br>", "g"), "\n");
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
                        <div className={"note-window-bottom-bar-close"} tabIndex="0" onClick={() => {
                            document.getElementsByClassName("note-window")[0].style.display = "none";
                        }}>
                            {translation.Notes.close}
                        </div>
                    </div>
                </div>
                <div className={"add-note-window"} style={{"display": "none"}}>
                    <div className={"add-note-window-top-bar"}>
                        {translation.Notes.addNote}
                    </div>
                    <div className={"add-note-window-middle-content"}>
                        <input type="text" id={"add-note-window-title"} placeholder={translation.Notes.title}/>
                        <textarea id={"add-note-window-text"} name={"note-content"} placeholder={translation.Notes.content}>
                        </textarea>
                    </div>
                    <div className={"add-note-window-bottom-bar"}>
                        <div className={"add-note-window-bottom-bar-item add-note-window-bottom-bar-item-cancel"} tabIndex="0"
                             onClick={() => {
                                 document.getElementsByClassName("cancel-window")[0].style.display = "block";
                             }}>
                            {translation.Notes.cancel}
                        </div>
                        <div className={"add-note-window-bottom-bar-item add-note-window-bottom-bar-item-add"} tabIndex="0"
                             onClick={() => {
                                 document.getElementsByClassName("add-note-window-bottom-bar-item-add")[0].onclick = () => {
                                     if (document.getElementById("add-note-window-title").value === "" || document.getElementById("add-note-window-text").value === "") {
                                         alert(translation.Notes.allFields);
                                         return;
                                     }
                                     addNote(cookies['userID'], document.getElementById("add-note-window-title").value, document.getElementById("add-note-window-text").value, setNotes, cookies);
                                     document.getElementsByClassName("add-note-window")[0].style.display = "none";
                                     document.getElementById("add-note-window-title").value = "";
                                     document.getElementById("add-note-window-text").value = "";
                                 };
                             }}>
                            {translation.Notes.add}
                        </div>
                    </div>
                </div>
                <div className={"cancel-window"}>
                    <div className={"cancel-window-text"}>
                        <span>{translation.Notes.noSave1} </span>
                        <span className={"cancel-window-text-decoration"}>{translation.Notes.noSave2} </span>,
                        {translation.Notes.wantCancel}
                    </div>
                    <div className={"cancel-window-bottom-bar"}>
                        <div className={"cancel-window-bottom-bar-item cancel-window-bottom-bar-yes"} tabIndex="0" onClick={() => {
                            document.getElementsByClassName("add-note-window")[0].style.display = "none";
                            document.getElementById("add-note-window-title").value = "";
                            document.getElementById("add-note-window-text").value = "";
                            document.getElementsByClassName("modify-note-window")[0].style.display = "none";
                            document.getElementById("modify-note-window-title").value = "";
                            document.getElementById("modify-note-window-text").value = "";
                            document.getElementsByClassName("cancel-window")[0].style.display = "none";

                        }}>
                            {translation.Notes.yes}
                        </div>
                        <div className={"cancel-window-bottom-bar-item cancel-window-bottom-bar-no"} tabIndex="0" onClick={() => {
                            document.getElementsByClassName("cancel-window")[0].style.display = "none";
                        }}>
                            {translation.Notes.no}
                        </div>
                    </div>
                </div>
                <div className={"delete-window"} style={{"display": "none"}}>
                    <div className={"delete-window-text"}>
                        {translation.Notes.wantForSure} <span className={"delete-window-text-decoration"}>{translation.Notes.delete}</span> {translation.Notes.note}
                    </div>
                    <div className={"delete-window-bottom-bar"}>
                        <div className={"delete-window-bottom-bar-item delete-window-bottom-bar-delete"}>
                            {translation.Notes.delete1}
                        </div>
                        <div className={"delete-window-bottom-bar-item delete-window-bottom-bar-keep"}>
                            {translation.Notes.keep}
                        </div>
                    </div>
                </div>
                <div className={"modify-note-window"} style={{"display": "none"}}>
                    <div className={"modify-note-window-top-bar"}>
                        <div className={"modify-note-window-top-bar-text"}>
                            {translation.Notes.modify}
                        </div>
                        <div className={"modify-note-window-top-bar-delete"} tabIndex="0" onClick={() => {
                            document.getElementsByClassName("modify-note-window")[0].style.display = "none";
                            document.getElementsByClassName("note-window")[0].style.display = "none";
                            removeNote(currentNoteId, cookies, setNotes);
                        }}>
                            <img src={deleteicon} alt="delete-icon" title={"Usuń"}/>
                        </div>
                    </div>
                    <div className={"modify-note-window-middle-content"}>
                        <input type="text" id={"modify-note-window-title"} placeholder={translation.Notes.title}/>
                        <textarea id={"modify-note-window-text"} name={"note-content"}
                                  placeholder={translation.Notes.cotent}>
                        </textarea>
                    </div>
                    <div className={"modify-note-window-bottom-bar"}>
                        <div className={"modify-note-window-bottom-bar-item modify-note-window-bottom-bar-item-cancel"} tabIndex="0"
                             onClick={() => {
                                 document.getElementsByClassName("cancel-window")[0].style.display = "block";
                             }}>
                            {translation.Notes.cancel}
                        </div>
                        <div className={"modify-note-window-bottom-bar-item modify-note-window-bottom-bar-item-save"} tabIndex="0"
                             onClick={() => {
                                 if (document.getElementById("modify-note-window-title").value === "" || document.getElementById("modify-note-window-text").value === "") {
                                     alert(translation.Notes.allFields);
                                     return;
                                 }
                                 modifyNote(cookies['userID'], currentNoteId, document.getElementById("modify-note-window-title").value, document.getElementById("modify-note-window-text").value, setNotes).then(() => {
                                     getNotes(cookies['userID'], setNotes, cookies);
                                 });
                                 document.getElementsByClassName("modify-note-window")[0].style.display = "none";
                                 document.getElementsByClassName("note-window")[0].style.display = "none";
                                 document.getElementById("modify-note-window-title").value = "";
                                 document.getElementById("modify-note-window-text").value = "";

                             }}>
                            {translation.Notes.save}
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default Notes;