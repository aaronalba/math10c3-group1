import * as React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Introduction';
import RubiksCube from '../components/RubiksCube';
import { Box } from '@mui/system';
import Artworks from '../components/Artworks';
import Poems from '../components/Poems';
import { Colors } from '../utils/Colors';
import Reference from '../components/References';

function Home() {
    return (
        <Box display="block" 
        sx={{backgroundColor: Colors.background1}}>
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

            {/* Poems section */}
            <Poems />
            
        </Box>
    )
}

export default Home