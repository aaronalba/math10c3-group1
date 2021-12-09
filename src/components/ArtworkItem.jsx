import { Container, Grid, Typography } from '@mui/material';
import * as React from 'react';
import { Font } from '../utils/Font';

const imgSize = 350;

export default function ArtworkItem({title, author, content, color, left, img}) {
    const getGridItems = (left) => {
        if (left) {
            return (
                <>
                    <Grid item xs={12} md={6} flexGrow={1}>
                        {getImg()}
                    </Grid>

                    <Grid item xs={12} md={6}>
                        {getContent()}
                    </Grid>
                </>
            ) 
        } else {
            return (
                <>
                    <Grid item xs={12} md={6}>
                        {getContent()}
                    </Grid>

                    <Grid item xs={12} md={6} flexGrow={1}>
                        {getImg()}
                    </Grid>
                </>
            )
        }        
    }

    const getImg = () => {
        return (
            <img
                width={imgSize}
                height={imgSize}
                src={img}
                alt={title} />
        )
    }

    const getContent = () => {
        return (
            <Container>
                <Typography variant="h5" fontFamily={Font.headings} fontWeight={700}>
                    {title}
                </Typography>
                <Typography variant="p" fontFamily={Font.headings}>
                    by {author}
                </Typography>
                <br/>                      
                <br/>
                <Typography variant="p" fontFamily={Font.paragraphs}>
                    {content || lorem()}
                </Typography>
            </Container>
        )
    }

    const lorem = () => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum."

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