import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

export default function MemberCard() {
    return (
        <Card
            elevation={1}
            sx={{
                margin: 5,
                minWidth: 250,
            }}
            variant="outlined">

            <CardContent
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{
                    width: 100,
                    height: 100,
                    border: `1px solid #ccc`,
                    marginBottom: 10,
                    borderRadius: 50,
                }}>

                </div>

                <Typography
                    variant="h5"
                    align="center">
                    Aaron Alba
                </Typography>
                <Typography
                    align="center">
                    BS Computer Science
                </Typography>
                <Typography
                    align="center">
                    Email?
                </Typography>
                <Typography
                    align="center">
                    Other Information?
                </Typography>
            </CardContent>
        </Card>        
    )
}