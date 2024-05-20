import './Homepage.css'
import './NavigationAndMenu.css'
import Homepage from './Homepage.jsx'
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Homepage />
        </Router>
    );
}

export default App;
