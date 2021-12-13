import { Box } from '@mui/system';
import React, { useState } from 'react';
import Header from '../components/Header';
import Reference from '../components/References';
import { Colors } from '../utils/Colors';

export default function ReferencePage() {
    return (
        <Box
            width={"100vw"}
            height={"100%"}
            
            sx={{backgroundColor: Colors.background1}}>
            {/* Navigation Header */}
            <Header/>
            {/* Header padding */}
            <Box display="block" sx={{height: 44}} />

            {/* Reference component */}
            <Reference />

        </Box>
    )
}