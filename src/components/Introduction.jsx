import { Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Font } from '../utils/Font';

const containerMarginTop = 5

export default function Introduction() {
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
                Introduction
            </Typography>

            <Container
                sx={{marginTop: containerMarginTop}}>
                <Typography
                    variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                </Typography>
            </Container>

            <br/>
            
            <Container
                sx={{marginTop: containerMarginTop}}>
                <Typography
                    fontFamily={Font.paragraphs}
                    variant="body1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab iure repellendus corrupti nobis soluta sit quam, recusandae ut ea quos, dolor, laboriosam facere alias totam expedita architecto enim odio incidunt.
                </Typography>
            </Container>
        </Box>
    )
}