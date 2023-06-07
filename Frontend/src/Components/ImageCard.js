import * as React from 'react';
import Card from '@mui/material/Card';
import { Typography, CardContent, ButtonBase } from '@mui/material';
import { Link } from 'react-router-dom';



const ImageCard = ({Image}) => {
    let {_id, name } = Image;
    name = name.split('.')[0];
    let date = new Date(Image.createdAt.slice(0, 10)).toLocaleDateString('en-GB')
    // const buffer = image.data.data;
    // const blob = new Blob([buffer], { type: 'image/jpeg' });
    // const url = URL.createObjectURL(blob);
    // console.log(url);
    const link = `http://localhost:3000/view-images/${_id}`
    return (
        <div className="image-card">
            <Link to = {link}>
                <Card>
                    <ButtonBase style={{ height: '25vh',  width: '100%', padding: '0', margin: '0' }}>
                        <CardContent>
                            <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                                {name}
                            </Typography>
                            {/* <img src={url} alt="wqw" /> */}
                            <Typography sx={{ fontSize: 18 }} variant="body2">
                                <br />
                                {date}
                            </Typography>
                        </CardContent>
                    </ButtonBase>
                </Card>
            </Link>
        </div>
    );
}
 
export default ImageCard;