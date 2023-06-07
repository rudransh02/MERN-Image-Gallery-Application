import { useParams } from "react-router-dom";
import NavbarWithDeleteButton from "../Components/NavbarWithDeleteButton";


const ImagePage = ({imageData}) => {
    const { id } = useParams();
    return (
        <div className="image-page">
            <NavbarWithDeleteButton id = {id}/>
            <h1>{id}</h1>
        </div>
    );
}
 
export default ImagePage;