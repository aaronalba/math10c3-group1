import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Colors } from '../utils/Colors';
import { Font } from '../utils/Font';
import Sample from '../img/sample.png';

export default function ArtworkItem({color}) {
    return (
        <Box 
            sx={{backgroundColor: color}}
            display="flex"
            width="100vw">
            <Box 
                sx={{
                    border: `1px solid black`,
                    flexGrow: 1,
                    justifyContent: 'center'
                }}>
                <img src={Sample} />
            </Box>
            <Box 
                sx={{
                    border: `1px solid black`,
                    flexGrow: 1,                    
                    minHeight: 400
                }}>
                <p>test</p>
            </Box>
        </Box>
    )
}