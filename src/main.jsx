import ReactDOM from 'react-dom/client'

import './index.css'

import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LanguageProvider} from "./ChangeLanguage.jsx";
import Homepage from "./Homepage.jsx";
import Login from "./Login.jsx";
import Register from './Register.jsx'
import Timetable from './Timetable.jsx'
import Announcements from './Announcements.jsx'
import Taskslist from './Taskslist.jsx'
import Notes from './Notes.jsx'
import Map from './Map.jsx'
import Subjects from './Subjects.jsx'
import Settings from './Settings.jsx'
import MapResult from "./MapResult.jsx";
import SubjectPage from "./SubjectPage.jsx";
import AnnouncementsPostPage from "./AnnouncementsPostPage.jsx";
import MyProfile from "./MyProfile.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <LanguageProvider>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Homepage/>}/>
                <Route path={"projekt-aplikacja/login"} element={<Login/>}/>
                <Route path={"projekt-aplikacja/register"} element={<Register/>}/>
                <Route path={"projekt-aplikacja/timetable"} element={<Timetable/>}/>
                <Route path={"projekt-aplikacja/announcements"} element={<Announcements/>}/>
                <Route path={"projekt-aplikacja/announcementspostpage"} element={<AnnouncementsPostPage/>}/>
                <Route path={"projekt-aplikacja/taskslist"} element={<Taskslist/>}/>
                <Route path={"projekt-aplikacja/notes"} element={<Notes/>}/>
                <Route path={"projekt-aplikacja/map"} element={<Map/>}/>
                <Route path={"projekt-aplikacja/subjects"} element={<Subjects/>}/>
                <Route path={"projekt-aplikacja/subjectpage"} element={<SubjectPage/>}/>
                <Route path={"projekt-aplikacja/settings"} element={<Settings/>}/>
                <Route path={"projekt-aplikacja/mapresult"} element={<MapResult/>}/>
                <Route path={"projekt-aplikacja/myprofile"} element={<MyProfile/>}/>
            </Routes>
        </BrowserRouter>
    </LanguageProvider>
)