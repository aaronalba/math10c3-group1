import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Font } from '../utils/Font';
import Sample from '../img/sample.png';

export default function ArtworkItem({color, left}) {
    const getGridItems = (left) => {
        if (left) {
            return (
                <>
                    <Grid item sx={12} md={6}>
                        <img src={Sample} alt="artwork"/>
                    </Grid>

                    <Grid item sx={12} md={6}>
                        <Container>
                            <Typography variant="p" fontFamily={Font.paragraphs}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum.
                                </Typography>
                            </Container>
                    </Grid>
                </>
            ) 
        } else {
            return (
                <>
                    <Grid item sx={12} md={6}>
                        <Container>
                            <Typography variant="p" fontFamily={Font.paragraphs}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum.
                                </Typography>
                            </Container>
                    </Grid>

                    <Grid item sx={12} md={6}>
                        <img src={Sample} alt="artwork"/>
                    </Grid>
                </>
            )
        }        
    }

    return (
        <Grid
            backgroundColor={color}
            padding={10}
            container 
            align="center" 
            alignItems="center">

            {getGridItems(left)}
        </Grid>
    )
}