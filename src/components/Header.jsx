import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { Colors } from '../utils/Colors';

export default function Header() {
  const [homeHover, setHomeHover] = useState(false)
  const [aboutHover, setAboutHover] = useState(false)
  const [writeUpHover, setWriteUpHover] = useState(false)

  return (
    <Box sx={{ flexGrow: 1, position: "absolute", }}>
      <Toolbar
        sx={{borderBottom: 1, borderColor: "divider"}}>
            <Typography
                variant="h6"
                component="h6">
                Math 10 Project
            </Typography>

            <div style={{
              position: 'absolute',
              right: 0,
              marginRight: 50
            }}>
              <Link to="/"              
                onMouseOver={()=>setHomeHover(true)}
                onMouseOut={()=>setHomeHover(false)}
                style={homeHover ? hoveredLinkStyle : linkStyle}>
                Home
              </Link>

              <Link to="/" 
                onMouseOver={()=>setWriteUpHover(true)}
                onMouseOut={()=>setWriteUpHover(false)}
                style={writeUpHover ? hoveredLinkStyle : linkStyle}>
                Write-up
              </Link>

              <Link to="/about"
                onMouseOver={()=>setAboutHover(true)}
                onMouseOut={()=>setAboutHover(false)}
                style={aboutHover ? hoveredLinkStyle : linkStyle}>
                About
              </Link>
            </div>
        </Toolbar>
    </Box>
  );
}

const linkStyle = {
  textDecoration: "none",
  marginLeft: 50,
  color: Colors.primary,
  padding:5,
  // borderRadius: 10,
  fontSize: 18,
}

const hoveredLinkStyle = {
  ...linkStyle,
  borderBottom: `1px solid ${Colors.primary}`
}