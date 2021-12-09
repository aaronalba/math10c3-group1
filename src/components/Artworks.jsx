import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Font } from '../utils/Font';
import ArtworkItem from './ArtworkItem';
import Artwork1 from "../img/artwork1.png";
import Artwork2 from "../img/artwork2.png";
import Artwork4 from "../img/artwork4.png";
import Artwork5 from "../img/artwork5.png";
import Artwork1_plain from "../img/artwork1_plain.png";
import Artwork4_plain from "../img/artwork4_plain.png";
import { Members } from '../utils/Members';

export default function Artworks() {
    const art1_title = "Euler's method and space exploration"
    const art2_title = "The mathematics in nature"
    const art4_title = "Binary and math in technology"
    const art5_title = "Permutation and Combination"

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

            {/* Artwork 1 */}
            <ArtworkItem
                title={art1_title}
                author={Members.aguilar}
                img={Artwork1_plain} />

            {/* Artwork 2 */}
            <ArtworkItem 
                left
                title={art2_title}
                author={Members.datinguinoo}
                img={Artwork2} />

            {/* Artwork 3 */}
            <ArtworkItem />

            {/* Artwork 4 */}
            <ArtworkItem
                left
                author={Members.aguilar}
                title={art4_title}
                img={Artwork4_plain} />

            {/* Artwork 5 */}
            <ArtworkItem
                author={Members.datinguinoo}
                title={art5_title}
                img={Artwork5} />

            {/* Artwork 6 */}
            <ArtworkItem left/>
        </Box>
    )
}