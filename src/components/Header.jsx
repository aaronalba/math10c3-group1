import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Drawer, 
  IconButton, 
  Toolbar, 
  Typography, 
  Box, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SubjectIcon from '@mui/icons-material/Subject';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate, useLocation } from 'react-router-dom';
import { Colors } from '../utils/Colors';

const drawerWidth = 200

export default function Header() {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const drawerItems = [
    {text: "Home", icon: <SubjectIcon/>, path: "/"},
    {text: "About", icon: <InfoIcon />, path: "/about"},
  ]

  /**
   * Shows and hides the drawer
   */
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen)

  return (
    <div>
      <AppBar>
        <Toolbar>
          {/* Menu */}
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            color="inherit"
            aria-label="menu">
            <MenuIcon/>
          </IconButton>

          {/* Title */}
          <Typography
            sx={{
              fontFamily: "Quicksand",
              fontWeight: "700",
              flexGrow: 1,
              textAlign: "center"
            }}
            variant="h6">
            Math 10 Project
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        variant="temporary"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        anchor="left">
          {/* List of Drawer Buttons */}
          <Box
            width={drawerWidth}>
            <List>
              {drawerItems.map(item => (
                // Individual Button
                <ListItem
                  sx={{
                    backgroundColor: (location.pathname == item.path) ? Colors.lightGray : null
                  }}
                  onClick={() => navigate(item.path)}
                  button
                  key={item.text}>

                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  
                  <ListItemText primary={item.text}/>
                </ListItem>
              ))}
            </List>
          </Box>
      </Drawer>
    </div>
  );
}
