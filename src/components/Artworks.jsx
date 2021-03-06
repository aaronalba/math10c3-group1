import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Font } from '../utils/Font';
import ArtworkItem from './ArtworkItem';
import ArtworkYellow from "../img/yellow_plain_min.png";
import ArtworkOrange from "../img/orange_plain_min.png";
import ArtworkRed from "../img/red_plain_min.png";
import ArtworkWhite from "../img/white_plain_min.png";
import ArtworkGreen from "../img/green_plain_min.png";
import ArtworkBlue from "../img/blue_plain_min.png";
import { Members } from '../utils/Members';
import { Colors } from '../utils/Colors';

const yellow_title = "Math in space exploration"
const orange_title = "Mathematics in nature"
const red_title = "Geometry"
const white_title = "Math in technology and computers"
const green_title = "Permutations and Combinations"
const blue_title = "Algorithm"

const blue_content = [
    `“You'll never know what tomorrow may hold,” they say. “The future will always be unpredictable and sometimes it’s better to just let things be.” However, although left with many possibilities of what is to come, one could argue that the next sequence of events can be predicted. This then leads us to the utility of studying patterns, thus resulting in the concept of algorithms. From the everyday routines of each person to larger scopes like predicting the following possible data during this pandemic, we can observe the workings of algorithms.`,
    `The very idea of an Algorithm is to input a set of rules/instructions that step-by-step define how a work is to be executed to get the expected results  (Introduction to Algorithms, 2019). A simple and good example would be solving the Rubik's cube as it follows a specific set of rules to complete the puzzle. This concept has become the foundation of modern society, utilizing algorithms in technologies like programming, finger-print scanning, and other advanced devices we consider essential today.`
]
const red_content = [
    `Since early 3100 BCE, it has already been discovered that ancient Egypt and Mesopotamia have already been using some form of mathematical rules and techniques helpful in surveying land areas, constructing buildings, and measuring storage containers (“Geometry | mathematics,” 2019). Until now, we can still observe the importance of geometry as we can see its application in arts, architecture, agriculture, medicine, and even the natural environment around us. Geometry is the visual study of shapes, sizes, patterns, and how they fit together in space. Geometry is responsible for giving video games a realistic look to the landscape and the characters that inhabit the game’s virtual world. Besides helping computer designers build virtual realities, geometry’s applications in the real world include architecture, computer-aided manufacturing, medicine, biology, physical sciences, and much more.`
]
const orange_content = [
    `Who would have known that even a plant in nature could be connected to mathematics? The sunflower has been linked to many mathematical concepts, one being the golden angle or golden ratio. The sequence of the seeds follows a golden angle which makes up the pattern of a Fibonacci sequence. According to a study by Prusinkiewicz and Lindenmayer (1990), the golden angle is approximately 137.5°, and the seeds seem to follow this. Since the angle is considered irrational, it means no seed has a neighboring one at the exact angle from the center. The result of this arrangement would be a spiral pattern of sunflower seeds. Other than that, the sunflower has been used in a Lemma. A Lemma is a “mini theorem” or something that has been proven true but isn’t major enough to become a theorem. If you make sets of numbers with each having a shared number and plot it, each set would look like petals, where the middle has the shared or common number between the sets.`
]
const green_content = [
    `Sometimes it is better to know what the future may hold and prepare for different scenarios than know nothing at all. The concept of permutations enables us to learn different combinations and sequences of variables, have a finite number of scenarios, and find the oddity of getting the desired result. In mathematics, permutation refers to the arrangement of all members of a set into various sequences or orders. Combination, on the other hand, is a way of selecting items from a collection where the order of selection does not matter. Like in a Rubik’s cube, there are 43 quintillions, 252 quadrillions, 3 trillion, 274 billion, 489 million, 856 thousand. The number of combinations is a lot, but by following specific steps, there will be a much shorter and fewer moves way to finish a cube. Items like cards, marbles, dice, and license plates have been one of the many examples being used in order to show us how many combinations work and how it affects the oddity of pulling desired combinations.`
]
const white_content = [
    `The white face shows that behind computer programs and technology is mathematical language. Binary numbers (on and off) are the primary language of computers (Binary Numbers and Binary Math, 2018), a simplified alternative to the typical decimal number system. With binary, we can communicate with computers that they then interpret to lead us to the technology that aids us in life (Mikke, 2019). It is also notable to mention that fundamental math like algebra, calculus, statistics, and discrete math is the foundation of the principles of computer science––the maths that led us to a technology-driven world.`,
    `The binary text in the artwork translates to an actual paragraph: The history of computer science is heavily anchored on mathematical concepts. Math is no doubt a part of the breakthroughs in computer technology, from smartphones to the internet algebra, discrete math, linear algebra, and network theory are some of the base concepts used in computer science. Without them, we would not be able to convert or analyze behavior into computer systems, and we would not have the technology we have today.`
]
const yellow_content = [
    `Inspired by Euler’s method and the math behind the US Apollo space program to the moon, the yellow face artwork shows how even scribbles of seemingly nonsensical mathematical computations can open doors to great discoveries. Mathematician Katherine Johnson contributed to this space exploration breakthrough by using Euler’s method to find the exact solution for a differential equation needed in connection with satellite reentry (Luwisha, 2018; Bryant et. al., 2017). Despite Euler’s method labeled “crude” and “old” math, Johnson’s work proves that even math at its most basic level can lead us to greater heights.`
]

export default function Artworks() {
    return (
        <Box 
            // sx={{backgroundColor: Colors.secondaryLight}}
            display="block"
            width="100vw"
            marginTop={15}>
            <Typography
                color={Colors.primary}
                fontWeight={500}
                fontFamily={Font.headings}
                textAlign="center"
                variant="h2">
                Artworks
            </Typography>

            {/* Artwork Blue */}
            <ArtworkItem
                content={blue_content}
                author={Members.matias}
                title={blue_title}
                img={ArtworkBlue}
                left/>

            {/* Artwork Red */}
            <ArtworkItem
                content={red_content}
                title={red_title}
                author={Members.matias}
                img={ArtworkRed} />

            {/* Artwork Orange */}
            <ArtworkItem 
                left
                content={orange_content}
                title={orange_title}
                author={Members.datinguinoo}
                img={ArtworkOrange} />

            {/* Artwork Green */}
            <ArtworkItem
                content={green_content}
                author={Members.datinguinoo}
                title={green_title}
                img={ArtworkGreen} />

            {/* Artwork Yellow */}
            <ArtworkItem
                left
                content={yellow_content}
                title={yellow_title}
                author={Members.aguilar}
                img={ArtworkYellow} />

            {/* Artwork White */}
            <ArtworkItem
                last
                content={white_content}
                author={Members.aguilar}
                title={white_title}
                img={ArtworkWhite} />
        </Box>
    )
}