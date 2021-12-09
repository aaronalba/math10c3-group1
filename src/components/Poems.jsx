import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Font } from '../utils/Font';
import Sample from '../img/sample.png';
import PuzzlingWorld from '../img/puzzling_world.png';
import OneTwist1 from '../img/one_twist_1.png';
import OneTwist2 from '../img/one_twist_2.png';

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
                <Grid item xs={12} md={12}>
                    <img
                        width={480}
                        height={679}
                        src={PuzzlingWorld} 
                        alt="poem" />
                </Grid>

                {/* Poem 2 Part 1*/}
                <Grid item xs={12} md={6}>
                    <img
                        width={480}
                        height={853} 
                        src={OneTwist1}
                        alt="poem" />
                </Grid>
                {/* Poem 2 Part 2*/}
                <Grid item xs={12} md={6}>
                    <img
                        width={480}
                        height={853} 
                        src={OneTwist2}
                        alt="poem" />
                </Grid>
            </Grid>
        </Box>
    )
}