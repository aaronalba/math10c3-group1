import * as React from 'react';
// import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import RubiksCube from '../components/RubiksCube';
import { Box } from '@mui/system';
import Artworks from '../components/Artworks';

function Home() {
    return (
        <Box display="block">
            {/* Navigation Header */}
            <Header/>
            {/* Header padding */}
            <Box display="block" sx={{height: 44}} /> 
            

            {/* Rubiks cube section */}
            <Box
                sx={{minWidth: '100%'}}            
                height={550}>
                <RubiksCube />
            </Box>
            

            {/* Introduction section */}
            <Introduction />
            
            {/* Artworks section */}
            <Artworks />
        </Box>
    )
}

export default Home