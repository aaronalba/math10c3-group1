import { Box } from '@mui/system';
import React, { useState } from 'react';
import Header from '../components/Header';
import { Colors } from '../utils/Colors';
import pdf from '../docs/MATH10C3G1_Write-up.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Container } from '@mui/material';

const pdfDownloadLink = 'https://drive.google.com/file/d/1Z_jMcZCRW0vmlrQUFf3oH8iTwG9dHVyY/view?usp=sharing';

export default function WriteUp() {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages)
    }

    return (
        <Box
            width={"100vw"}
            height={"100%"}
            
            sx={{backgroundColor: Colors.background1}}>
            {/* Navigation Header */}
            <Header pdfDownloadLink={pdfDownloadLink} />
            {/* Header padding */}
            <Box display="block" sx={{height: 44}} />

            <Document                                     
                onLoadSuccess={onDocumentLoadSuccess}
                file={pdf}>
                {Array.from(
                    new Array(numPages),
                    (el, index) => (
                        <Page
                            width={window.innerWidth}                        
                            key={`page_$index + 1`}
                            pageNumber={index+1}
                        />
                    ),
                )}
            </Document>
        </Box>
    )
}