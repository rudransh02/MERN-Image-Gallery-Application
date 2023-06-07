import Navbar from "../Components/Navbar";
import Images from "../Components/Images";



const Home = ({imageData}) => {
    return (
        <div className="home">
            <Navbar />
            <Images imageData = {imageData} />
        </div>
    );
}
 
export default Home;