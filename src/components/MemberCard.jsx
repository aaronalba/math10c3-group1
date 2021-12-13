import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import { Colors } from "../utils/Colors";
import { Font } from '../utils/Font';

export default function MemberCard({name, course, email, image}) {
    return (
        <Card
            sx={{
                minWidth: 275,
                maxWidth: 275,
                minHeight: 225,
                border: `3px solid ${Colors.primary}`
            }}
            variant="outlined">

            <CardContent
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            
                <img
                    src={image} 
                    style={{
                        width: 75,
                        height: 75,
                        border: `1px solid #ccc`,
                        marginBottom: 3,
                        borderRadius: 50,
                        }}/>

                <Typography
                    fontFamily={Font.headings}
                    fontWeight={700}
                    color={Colors.secondary}
                    variant="h5"
                    align="center">
                    {name || "empty name"}
                </Typography>

                <Typography           
                    fontFamily={Font.headings}         
                    fontWeight={500}
                    color={Colors.primary}
                    fontStyle="italic"
                    align="center">
                    {course || "empty course"}
                </Typography>

                {email ? <Typography
                    fontFamily={Font.paragraphs}
                    color={Colors.secondary}
                    align="center">
                    {email || "empty email"}
                </Typography> : null}
            </CardContent>
        </Card>        
    )
}