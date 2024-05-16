import plLogo from './assets/logo.png'
import './App.css'

function App() {
    return (
        <>
            <div className={"top-bar"}>
                <p>XDDDD</p>
            </div>
            <div className="main-content">
                <div className="box">
                    <div className="menu-item">1</div>
                    <div className="menu-item">2</div>
                    <div className="menu-item">3</div>
                    <div className="menu-item">4</div>
                    <div className="menu-item">5</div>
                    <div className="menu-item">6</div>
                    <div className="menu-item">7</div>
                    <div className="menu-item">8</div>
                    <div className="menu-item">9</div>
                </div>
            </div>
            <div className="logo">
                <img src={plLogo} alt="logo"/>
            </div>
        </>
    )
}

export default App
