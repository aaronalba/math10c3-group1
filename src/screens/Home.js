import * as React from 'react';
// import { useEffect, useState } from 'react';
import Header from '../components/Header';
import RubiksCube from '../components/RubiksCube';

function Home() {
    return (
        <div>
            {/* Navigation Header */}
            <Header/>
            
            {/* Rubiks cube section */}
            <div style={{background: '#ffffff', height: 550, width: "100%"}}>
                <RubiksCube/>
            </div>


        </div>
    )
}

export default Home