import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar
        sx={{borderBottom: 1, borderColor: 'divider'}}>
            <Typography
                variant='h6'
                component='h6'>
                Math 10 Project
            </Typography>

            <Button
              style={{
                  marginLeft: 50,
                  textTransform: 'none'}}>
                Home
            </Button>

            <Button
              style={{
                  marginLeft: 50,
                  textTransform: 'none'}}>
                Write-up
            </Button>

            <Button
              style={{
                  marginLeft: 50,
                  textTransform: 'none'}}>
                About
            </Button>
        </Toolbar>
    </Box>
  );
}