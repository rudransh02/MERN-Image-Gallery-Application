import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import UploadFileRoundedIcon from '@mui/icons-material/UploadFileRounded';



const Navbar = () => {
    return (
        <div className="navbar">
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography fontFamily={'Times New Roman'} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    ImageVerse
                </Typography>
                <Button color="inherit">
                    <UploadFileRoundedIcon fontSize='large' />
                </Button>
                </Toolbar>
            </AppBar>
            </Box>
        </div>
    );
}
 
export default Navbar;