import ImageCard from "./ImageCard";

const Images = () => {
    return (
        <div className="images" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
            gap: '10px',
            marginTop: '10px'
        }}>
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
            <ImageCard />
        </div>
    );
}
 
export default Images;