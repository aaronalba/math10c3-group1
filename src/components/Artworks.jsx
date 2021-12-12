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

const art1_title = "Math in space exploration"
const art2_title = "Mathematics in nature"
const art3_title = "Euclid"
const art4_title = "Math in technology and computers"
const art5_title = "Permutations and Combinations"
const art6_title = "Algorithm"

const art1_content = `Inspired by Euler’s method and the math behind the US Apollo space program to the moon, the yellow face artwork shows how even scribbles of seemingly nonsensical mathematical computations can open doors to great discoveries. Mathematician Katherine Johnson contributed to this space exploration breakthrough by using Euler’s method to find the exact solution for a differential equation needed in connection with satellite reentry. Despite Euler’s method labeled “crude” and “old” math, Johnson’s work proves that even math at its most basic level can lead us to greater heights.`
const art2_content = `Who would’ve known that even in nature, there is a plant that would be connected to mathematics? Sunflower has been connected to many mathematical aspects, one being the golden angle or golden ratio. Who would’ve known that the sequence of the seeds would follow a golden angle which would make the pattern of a Fibonacci sequence? According to the study of Prusinkiewicz and Lindenmayer (1990), the golden angle is approximately 137.5° and the seeds seems to be following this. Since the angle is considered as irrational means that no seed has a neighboring one at the exact angle from the center. The result of this arrangement would be a spiral pattern of sunflower seeds. Other than that, sunflower has been used in a Lemma. Lemma, also means a “mini theorem” is something that is proven true but isn’t major enough to become a theorem. If you make sets of numbers with all having a common number, when you plot it, it would look like each sets are like petals and in the middle is the shared or common number between the sets.`
const art3_content = `Sometimes it is better to know what the future may hold and prepare for different scenarios than not knowing anything at all. The concept of permutations able us to know different combinations and sequences of variables and have a finite numbers of scenarios and to know the oddity of getting the desired result. In mathematics, permutation relates to the arrangement of all members of a set into various sequences or orders. Combination on the other hand is a way of selecting items from a collection wherein order of selection would not matter. Like in Rubik’s cube there is exactly 43 quintillion, 252 quadrillion, 3 trillion, 274 billion, 489 million, 856 thousand which is a lot but by following specific steps, there will be a much more shorter and less moves way to finish a cube. These items, cards, marbles, dices and license plates relates the same with how many possible results could there be. `
const art4_content = `The white face shows that behind computer programs and technology is mathematical language. Binary numbers (on and off) are the primary language of computers, a simplified alternative to the typical decimal number system. With binary, we can communicate with computers that they then interpret to lead us to the technology that aids us in life. It is also notable to mention that fundamental math like algebra, calculus, statistics, and discrete math is the foundation of the principles of computer science–the maths that led us to a technology-driven world.\n\nMini fact!\n\nThe binary text in the artwork translates to an actual paragraph: The history of computer science is heavily anchored on mathematical concepts. Math is no doubt a part of the breakthroughs in computer technology, from smartphones to the internet algebra, discrete math, linear algebra, and network theory are some of the base concepts used in computer science. Without them, we would not be able to convert or analyze behavior into computer systems, and we would not have the technology we have today.`
const art5_content = ``
const art6_content = ``

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

            {/* Artwork Yellow */}
            <ArtworkItem
                content={art1_content}
                title={art1_title}
                author={Members.aguilar}
                img={ArtworkYellow} />

            {/* Artwork Green */}
            <ArtworkItem 
                left
                content={art2_content}
                title={art2_title}
                author={Members.datinguinoo}
                img={ArtworkOrange} />

            {/* Artwork Red */}
            <ArtworkItem
                title={art3_title}
                author={Members.matias}
                img={ArtworkRed} />

            {/* Artwork White */}
            <ArtworkItem
                left
                content={art4_content}
                author={Members.aguilar}
                title={art4_title}
                img={ArtworkWhite} />

            {/* Artwork Green */}
            <ArtworkItem
                content={art5_content}
                author={Members.datinguinoo}
                title={art5_title}
                img={ArtworkGreen} />

            {/* Artwork Blue */}
            <ArtworkItem
                author={Members.matias}
                title={art6_title}
                img={ArtworkBlue}
                left/>
        </Box>
    )
}