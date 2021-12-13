import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Header from '../components/Header';
import MemberCard from '../components/MemberCard';
import { Colors } from '../utils/Colors';
import { Font } from '../utils/Font';
import { Members } from '../utils/Members';
import aguilar from '../img/members/aguilar.jpg';
import alba from '../img/members/alba.jpg';
import alejandro from '../img/members/alejandro.jpg';
import datinguinoo from '../img/members/datinguinoo.jpg';
import matias from '../img/members/matias.jpg';

const members = [
    {
        name: Members.aguilar,
        course: `BA Communication Arts`,
        email: `muaguilar@up.edu.ph`,
        image: aguilar,
    },
    {
        name: Members.alba, 
        course: `BS Computer Science`, 
        email: `aaalba1@up.edu.ph`,
        image: alba,
    },
    {
        name: Members.alejandro, 
        course: `BS Forestry`, 
        email: `csalejandro1@up.edu.ph`,
        image: alejandro,
    },
    {
        name: Members.datinguinoo, 
        course: `BS Agriculture`,
        email: `jddatinguinoo@up.edu.ph`,
        image: datinguinoo,

    },
    {
        name: Members.matias, 
        course: `BS Agricultural Biotechnology`, 
        email: `nfmatias@up.edu.ph`,
        image: matias
    },
]

export default function About() {
    return (
        <Box
            height={"100vh"}
            sx={{backgroundColor: Colors.background1}}>
            {/* Navigation Header */}
            <Header/>
            {/* Header padding */}
            <Box display="block" sx={{height: 44}} />

            <Box
                marginTop={1}
                width="100vw">
                <Typography
                    color={Colors.secondary}
                    fontWeight={500}
                    fontFamily={Font.headings}
                    align="center"
                    variant="h2">
                    Members
                </Typography>
            </Box>           

            <Grid
                spacing={1}
                direction="row"
                padding={1}
                // paddingLeft={20}
                // paddingRight={20}
                align="center"
                justifyContent="center"
                container>

                {
                    members.map(e => (
                        <Grid
                            xl={2}
                            md={4}
                            sx={12}
                            paddingTop={2}
                            item>
                                <MemberCard 
                                    name={e.name}
                                    course={e.course}
                                    email={e.email}
                                    image={e.image} />
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    )
}