import { Typography, Container } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Colors } from '../utils/Colors';
import { Font } from '../utils/Font';

const containerMarginTop = 5
const introContent = [
    `Welcome to the Math 10-C3 Group 1 mini art gallery!`,
    `This online gallery is an exhibition of the beauty of math and art's unison as displayed through the artworks and literary pieces of the Group 1 members. The Rubik's cube is the central theme, with pivotal breakthroughs and innovations of/through mathematics as the primary vision represented in the gallery works.`,
    `The visual and geometrical aspects of the Rubik's cube allowed the group to play with its form through art. The cube worked as a myriad of artistic creativity so that the group members could shine in their respective fields: the colored faces became the visual artists' canvas, while the concept of the cube became a prompt for the writers.`,
    `Why the Rubik's cube? The Rubik's cube is a unique invention borne from mathematical concepts like permutations, geometry, and algorithms. Creator Ernő Rubik initially formulated the puzzle to demonstrate three-dimensional movement as a learning exercise, but its global popularity has changed the world's approach to puzzle-solving. Competitions that showcase skills of speed solving, creation of different versions of the cube (hexagon cubes or 2x2 cubes) that push more complicated deciphering, and representations in film and media prove that the Rubik's cube has influenced the math world and the general public.`,
    `Aside from the puzzle's distinct relations to mathematics, the group also saw its connections to our life experiences. Like the Rubik's cube, there will always be problems and puzzles for us to solve. Despite being a mechanical instrument, we can still draw inspiration from it by observing how it works and relating it to our situations.`,
    `We hope you enjoy the artworks and pieces and get to appreciate the Rubik's cube beyond its mathematical facet through the creative works of the Group 1 members!`,
]

export default function Introduction() {
    return (
        <Box 
            // sx={{backgroundColor: Colors.secondaryLight}}
            display="block"
            width="100vw"
            marginTop={15}>
            <Typography
                color={Colors.primary}
                fontFamily={Font.headings}
                fontWeight={500}
                textAlign="center"
                variant="h2">
                Introduction
            </Typography>

            <br/>
            
            
            {
                introContent.map(e => (
                    <Container
                        sx={{
                            marginTop: containerMarginTop,                            
                        }}>
                        <Typography
                            sx={{
                                paddingRight: 24, 
                                paddingLeft: 24,
                                fontSize: 18
                            }}
                            color={Colors.secondary}
                            textAlign="center"
                            fontFamily={Font.paragraphs}
                            variant="body1">
                                {e}
                        </Typography>
                    </Container>        
                ))
            }
        </Box>
    )
}