import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




import Home from "../components/Home";

const Routings = () => {

    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home/>} />
              
                
            </Routes>
            
        </Router>
    );
}

export default Routings;