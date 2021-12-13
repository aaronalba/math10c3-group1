import { Box } from '@mui/system';
import * as React from 'react';
import Header from '../components/Header';
import { Colors } from '../utils/Colors';

export default function WriteUp() {
    return (
        <Box
            height={"100vh"}
            sx={{backgroundColor: Colors.background1}}>
            {/* Navigation Header */}
            <Header/>
            {/* Header padding */}
            <Box display="block" sx={{height: 44}} />

            
            <p>write up</p>
        </Box>
    )
}