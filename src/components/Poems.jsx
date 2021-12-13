import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Font } from '../utils/Font';
import Sample from '../img/sample.png';
import PuzzlingWorld from '../img/puzzling_world.png';
import OneTwist1 from '../img/one_twist_1_min.png';
import OneTwist2 from '../img/one_twist_2_min.png';
import { Members } from '../utils/Members';
import { Colors } from '../utils/Colors';

const alba_content = `My inspirations in writing this poem are innovation and human advancement. Technology made possible by mathematics has helped us accomplish tasks beyond our physical capabilities. It is an invaluable tool that shaped our modern world and will continue molding our future. One of my main takeaways from the course is that math started to be developed because of its utility. It helped us describe quantities that are greater than the number of our fingers could have expressed. Math became our mental extension and is very useful for solving challenging problems. Until now, it is a driver of innovation and is used for unraveling the universes’ nature and mysteries. It is our means of understanding and living in this very puzzling world.`
const alejandro_content = `This poem is intended for those who are in the middle of chaos, for those who are struggling to find their self-worth and purpose in life, for those who are pressured to please the society where they belong, for those who are still in the process of self-discovery, for those who are overwhelmed and for those who are still searching for the right and perfect position that will make themselves fulfilled. Despite these challenges that you are facing right now, it is okay to discover and work with yourself at your own phase and time. It is okay to take a thousand clueless ups and downs, trials and errors, working through night and day. As long as you try to find new ways to deal with uncertainties, everything is totally fine. At the end of the day, everything will be resolved. Everything will achieve great success. Always remember that nothing worth having comes easy. Everything is worth a try.`

const alba_title = `Puzzling World`
const alejandro_title = `One Twist At A Time`

export default function Poems() {
    return (
        <Box             
            display="block"
            width="100vw"
            marginTop={15}>
            <Typography
                color={Colors.primary}
                fontWeight={500}
                fontFamily={Font.headings}
                textAlign="center"
                variant="h2">
                Poems
            </Typography>

            <Grid container
                spacing={3}
                align="center"
                padding={10} >
                
                {/* Poem 1 Part 1*/}
                <Grid item xs={12} md={6}>
                    <img
                        width={480}
                        height={853} 
                        src={OneTwist1}
                        alt="poem" />
                </Grid>
                {/* Poem 1 Part 2*/}
                <Grid item xs={12} md={6}>
                    <img
                        width={480}
                        height={853} 
                        src={OneTwist2}
                        alt="poem" />
                </Grid>
                
                <Grid item xs={12} md={12}>
                    <>
                        <Typography
                            color={Colors.secondary}
                            fontWeight={700}
                            variant="h4" 
                            fontFamily={Font.headings}>
                            {alejandro_title}
                        </Typography>
                        <Typography
                            color={Colors.primary}
                            fontWeight={400}
                            variant="p" 
                            fontFamily={Font.headings}>
                            {`by ${Members.alejandro}`}
                        </Typography>
                    </>
                </Grid>

                <Grid item xs={12}>
                    <Typography 
                        color={Colors.secondary}
                        variant="p" 
                        fontFamily={Font.paragraphs}>
                        {alejandro_content}
                    </Typography>
                </Grid>
            </Grid>

            <Grid container
                spacing={3}
                align="center"
                padding={10} >

                {/* Poem 2 */}
                <Grid item xs={12} md={6}>
                    <img
                        width={480}
                        height={679}
                        src={PuzzlingWorld} 
                        alt="poem" />
                </Grid>


                <Grid item xs={12} md={6}>
                    <>
                        <Typography 
                            color={Colors.secondary}
                            fontWeight={700}
                            variant="h4" 
                            fontFamily={Font.headings}>
                            {alba_title}
                        </Typography>
                        <Typography 
                            color={Colors.primary}
                            fontWeight={400}
                            variant="p" 
                            fontFamily={Font.headings}>
                            {`by ${Members.alba}`}
                        </Typography>
                        <br/>
                        <br/>
                        <Typography 
                            color={Colors.secondary}
                            variant="p" 
                            fontFamily={Font.paragraphs}>
                            {alba_content}
                        </Typography>
                    </>
                </Grid>

                <Grid item xs={12}>
                    
                </Grid>
            </Grid>
        </Box>
    )
}