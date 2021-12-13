import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Header from '../components/Header';
import MemberCard from '../components/MemberCard';
import { Colors } from '../utils/Colors';
import { Font } from '../utils/Font';
import { Members } from '../utils/Members';

const members = [
    {name: Members.aguilar, course: `BA Communication Arts`},
    {name: Members.alba, course: `BS Computer Science`, email: `aaalba1@up.edu.ph`},
    {name: Members.alejandro, course: `BS Forestry`},
    {name: Members.datinguinoo, course: `BS Agriculture`},
    {name: Members.matias, course: `BS Agricultural Biotechnology`},
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
                marginTop={2}
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
                spacing={3}
                direction="row"
                padding={2}
                paddingLeft={20}
                paddingRight={20}
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
                                    email={e.email} />
                        </Grid>
                    ))
                }

            </Grid>
        </Box>
    )
}