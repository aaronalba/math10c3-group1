import { Container, Grid, Typography, Divider } from '@mui/material';
import * as React from 'react';
import { Colors } from '../utils/Colors';
import { Font } from '../utils/Font';

const imgSize = 350;

export default function ArtworkItem({title, author, content, color, left, img, last}) {
    const getGridItems = (left) => {
        if (left) {
            return (
                <>
                    <Grid item xs={12} sm ={12} md={6} xl={12} flexGrow={1}>
                        {getImg()}
                    </Grid>

                    <Grid item xs={12} sm ={12} md={6} xl={12}>
                        {getContent()}
                    </Grid>
                </>
            ) 
        } else {
            return (
                <>
                    <Grid item xs={12} sm ={12} md={6} xl={12}>
                        {getContent()}
                    </Grid>

                    <Grid item xs={12} sm ={12} md={6} xl={12} flexGrow={1}>
                        {getImg()}
                    </Grid>
                </>
            )
        }        
    }

    const getImg = () => {
        return (
            <img
                style={{border: `1px solid #ddd`}}            
                width={imgSize}
                height={imgSize}
                src={img}
                alt={title} />
        )
    }

    const getContent = () => {
        return (
            <Container>
                <Typography 
                    color={Colors.secondary}
                    variant="h4"
                    fontFamily={Font.headings}
                    fontWeight={700}>
                    {title}
                </Typography>
                <Typography 
                    fontWeight={400}
                    color={Colors.primary} 
                    variant="p" 
                    fontFamily={Font.headings}>
                    by {author}
                </Typography>
                <br/>                      
                <br/>
            
                {
                    content.map(e => (                        
                        <>
                            <Typography color={Colors.secondary} variant="p" fontFamily={Font.paragraphs}>
                                {e}
                            </Typography>
                            {(content.length > 1) ? <><br/><br/></> :  null}
                        </>
                        
                    ))
                }
            </Container>
        )
    }

    const lorem = () => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam sequi maiores molestias corrupti et consequatur distinctio culpa omnis repellendus quod eum aliquam doloremque at debitis hic, obcaecati optio. Inventore, ipsum."

    return (
        <>
            <Grid
                spacing={10}
                backgroundColor={color}
                padding={10}
                container 
                align="center" >

                {getGridItems(left)}
            </Grid>

            {last ? null : (
                <Container>
                    <Divider color={Colors.primaryLight} />
                </Container>
            )}            
        </>
    )
}