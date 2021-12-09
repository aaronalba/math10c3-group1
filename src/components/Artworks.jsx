import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Font } from '../utils/Font';
import ArtworkItem from './ArtworkItem';

export default function Artworks() {
    return (
        <Box 
            // sx={{backgroundColor: Colors.secondaryLight}}
            display="block"
            width="100vw"
            marginTop={15}>
            <Typography
                fontFamily={Font.headings}
                textAlign="center"
                variant="h2">
                Artworks
            </Typography>

            <ArtworkItem />
            <ArtworkItem left/>
            <ArtworkItem />
            <ArtworkItem left/>
            <ArtworkItem />
            <ArtworkItem left/>
        </Box>
    )
}