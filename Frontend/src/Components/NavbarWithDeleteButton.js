import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import { useNavigate } from 'react-router-dom';


const NavbarWithDeleteButton = ({id}) => {
    const navigate = useNavigate();
    
    const handleClick = async () => {
        fetch(`http://localhost:8181/delete-image/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/');
        })
        .catch((error) => {
            console.error(error);
        });
    };
    
    return (
        <div className="navbar-with-delete-button">
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography fontFamily={'Times New Roman'} variant="h4" component="div" sx={{ flexGrow: 1 }}>
                    ImageVerse
                </Typography>
                <Button onClick={handleClick} color="inherit">
                    <DeleteOutlineTwoToneIcon fontSize='large' />
                </Button>
                </Toolbar>
            </AppBar>
            </Box>
        </div>
    );
}
 
export default NavbarWithDeleteButton;