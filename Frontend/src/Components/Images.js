import ImageCard from "./ImageCard";

const Images = ({imageData}) => {
    return (
        <div className="images" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
            gap: '10px',
            marginTop: '10px'
        }}>
            {imageData && imageData.map(Image => <ImageCard Image = {Image} key = {Image._id} />)}
        </div>
    );
}
 
export default Images;