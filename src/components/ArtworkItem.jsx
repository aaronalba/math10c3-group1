import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Font } from '../utils/Font';
import Sample from '../img/sample.png';

export default function ArtworkItem({color, left}) {
    const getGridItems = (left) => {
        if (left) {
            return (
                <>
                    <Grid item sx={12} md={6} flexGrow={1}>
                        <img src={Sample} alt="artwork"/>
                    </Grid>

                    <Grid item sx={12} md={6}>
                        <Container>
                            <Typography variant="h5" fontFamily={Font.headings} fontWeight={700}>
                                Title
                            </Typography>
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
                            <Typography variant="h5" fontFamily={Font.headings} fontWeight={700}>
                                Title
                            </Typography>
                            <Typography variant="p" fontFamily={Font.paragraphs}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum.
                            </Typography>
                            </Container>
                    </Grid>

                    <Grid item sx={12} md={6} flexGrow={1}>
                        <img src={Sample} alt="artwork"/>
                    </Grid>
                </>
            )
        }        
    }

    return (
        <Grid
            spacing={10}
            backgroundColor={color}
            padding={10}
            container 
            align="center" >

            {getGridItems(left)}
        </Grid>
    )
}