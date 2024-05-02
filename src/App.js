import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
//import HomeLogOut from "./pages/home/HomeLogOut";
import Header from "./components/header/Header";
import FooterNav from "./components/footer/FooterNav";
import Profile from "./pages/profile/Profile";

function App() {

    return (
        <div className="App">
            <Header/>
            <div className="frameWrapper">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Profile/>}/>
                </Routes>
            </div>
            <FooterNav/>
        </div>
    );
}

export default App;
