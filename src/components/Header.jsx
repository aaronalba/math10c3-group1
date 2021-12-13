import * as React from 'react';
import { useState } from 'react';
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
  ListItemText, 
  Link} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import DownloadIcon from '@mui/icons-material/Download';
import { useNavigate, useLocation } from 'react-router-dom';
import { Colors } from '../utils/Colors';
import { Font } from '../utils/Font';

const drawerWidth = 250

export default function Header({pdfDownloadLink}) {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const drawerItems = [
    {text: "Home", icon: <HomeIcon/>, path: "/"},
    {text: "Write-up", icon: <DriveFileRenameOutlineIcon />, path: "/writeup"},
    {text: "About", icon: <InfoIcon />, path: "/about"},
    {text: "References", icon: <LibraryBooksIcon />, path: "/references"},
  ]

  /**
   * Shows and hides the drawer
   */
  const toggleDrawer = () => setDrawerOpen(!isDrawerOpen)

  /**
   * Downloads the pdf file
   */
  const downloadPDF = () => {

  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="absolute" sx={{backgroundColor: Colors.secondary}}>
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
              fontFamily: Font.headings,
              fontWeight: "700",
              flexGrow: 1,
              textAlign: "center"
            }}
            variant="h6">
            Math 10 Project
          </Typography>


          {/* Download link */}
          {pdfDownloadLink ? (
            <Link
              href={pdfDownloadLink}
              color="#ffffff">
              <IconButton
                onClick={downloadPDF}
                edge="start"
                color="inherit"
                aria-label="menu">
                <DownloadIcon/>
              </IconButton>
            </Link>
          ) : null}

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
                    backgroundColor: (location.pathname === item.path) ? Colors.lightGray : null
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
    </Box>
  );
}
