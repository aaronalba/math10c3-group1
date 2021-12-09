import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Font } from '../utils/Font';
import Sample from '../img/sample.png';

export default function Poems() {
    return (
        <Box             
            display="block"
            width="100vw"
            marginTop={15}>
            <Typography
                fontFamily={Font.headings}
                textAlign="center"
                variant="h2">
                Poems
            </Typography>

            <Grid container
                spacing={10}
                align="center"
                padding={10}>
                {/* Poem 1 */}
                <Grid item xs={12} md={6}>
                    <img src={Sample} alt="poem" />
                </Grid>

                {/* Poem 2 */}
                <Grid item xs={12} md={6}>
                    <img src={Sample} alt="poem" />
                </Grid>
            </Grid>
        </Box>
    )
}