import { Box } from '@mui/system';
import React, { useState } from 'react';
import Header from '../components/Header';
import { Colors } from '../utils/Colors';
// import pdf from '../docs/test.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Container } from '@mui/material';

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
            <Header/>
            {/* Header padding */}
            <Box display="block" sx={{height: 44}} />

            
            {/* <Document                                     
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
            </Document> */}
        </Box>
    )
}