import * as React from 'react';
import Card from '@mui/material/Card';
import { Typography, CardContent, ButtonBase } from '@mui/material';



const ImageCard = () => {
    return (
        <div className="image-card"  >
            <Card>
                <ButtonBase style={{ width: '100%', padding: '0', margin: '0' }}>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                            {"fullName"}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {"homeTown"}
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} variant="body2">
                            {"phoneNumber"}
                        </Typography>
                        <Typography sx={{ fontSize: 18 }} variant="body2">
                            <br />
                            {"emailAddress"}
                        </Typography>
                    </CardContent>
                </ButtonBase>
            </Card>
        </div>
    );
}
 
export default ImageCard;