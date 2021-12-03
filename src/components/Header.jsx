import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Colors } from '../utils/Colors';

const linkStyle={
  textDecoration: "none",
  marginLeft: 50,
  color: Colors.primary
}

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar
        sx={{borderBottom: 1, borderColor: "divider"}}>
            <Typography
                variant="h6"
                component="h6">
                Math 10 Project
            </Typography>

            <Link to="/" 
              style={linkStyle}>
              Home
            </Link>

            <Link to="/about" 
              style={linkStyle}>
              About
            </Link>

            <Link to="/" 
              style={linkStyle}>
              Write-up
            </Link>


        </Toolbar>
    </Box>
  );
}