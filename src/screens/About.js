import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Header from '../components/Header';
import MemberCard from '../components/MemberCard';
import { Font } from '../utils/Font';

export default function About() {
    return (
        <>
            {/* Navigation Header */}
            <Header/>
            {/* Header padding */}
            <Box display="block" sx={{height: 44}} />

            
            <Box
                marginTop={2}
                width="100vw">
                <Typography 
                    fontFamily={Font.headings}
                    align="center"
                    variant="h2">
                    Members
                </Typography>
            </Box>
            

            <Grid
                spacing={3}
                direction="row"
                padding={3}
                paddingLeft={20}
                paddingRight={20}
                align="center"
                container>
                <Grid 
                    item
                    paddingTop={2}                                        
                    sx={12} 
                    md={4}>
                    <MemberCard
                        name="Maria Carmela Aguilar" />                    
                </Grid>
                <Grid 
                    item 
                    paddingTop={2}
                    sx={12} 
                    md={4}>
                    <MemberCard
                        name="Neil Johann Matias" />
                </Grid>   
                <Grid 
                    item 
                    paddingTop={2}
                    sx={12} 
                    md={4}>
                    <MemberCard
                        name="Jude Datinguinoo"/>
                </Grid>   
                <Grid 
                    item 
                    paddingTop={2}
                    sx={12} 
                    md={4}>
                    <MemberCard
                        name="Aaron Alba"/>
                </Grid>   
                <Grid 
                    item 
                    paddingTop={2}                
                    sx={12} 
                    md={4}>
                    <MemberCard
                        name="Charyl Jan Alejandro" />
                </Grid>   
            </Grid>
        </>
    )
}