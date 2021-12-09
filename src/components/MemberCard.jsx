import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";

export default function MemberCard({name, course, email}) {
    return (
        <Card
            elevation={1}
            sx={{
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
                    {name || "empty name"}
                </Typography>
                <Typography
                    align="center">
                    {course || "empty course"}
                </Typography>
                <Typography
                    align="center">
                    {email || "empty email"}
                </Typography>
                <Typography
                    align="center">
                    Other Information?
                </Typography>
            </CardContent>
        </Card>        
    )
}