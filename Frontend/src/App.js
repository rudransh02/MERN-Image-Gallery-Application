import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import ImagePage from './Pages/ImagePage';


async function API() {
    const base = `http://localhost:8181/`;
    const response = await fetch(base);
    const data = await response.json();
    return data;
}


function App() {
    const [imageData, setImageData] = useState(null);
    API().then((data) => {
        setImageData(data);
    }).catch((error) => {
        console.log(error);
    });
    
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path = "/" element = {<Home imageData = {imageData}/>} />
                    <Route exact path = "/view-images/:id" element = {<ImagePage imageData = {imageData}/>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
