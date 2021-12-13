import * as React from 'react';
import Cube from 'react-3d-cube';
import ArtworkYellow from "../img/yellow_min.png";
import ArtworkOrange from "../img/orange_min.png";
import ArtworkRed from "../img/red_min.png";
import ArtworkWhite from "../img/white_min.png";
import ArtworkGreen from "../img/green_min.png";
import ArtworkBlue from "../img/blue_min.png";
const cubeSize = 350

export default function RubiksCube({artworks}) {
    return (
        <div style={{
            width: cubeSize,
            height: cubeSize,
            position: 'absolute',
            top: 160,
            right: 0,
            left: 0,
            margin: 'auto'
        }}>
            <Cubev2
                size={cubeSize}
                index="tilted">

                <img src={ArtworkRed} alt="artwork_redFace" />
                <img src={ArtworkGreen} alt="artwork_greenFace" />
                <img src={ArtworkOrange} alt="artwork_orangeFace" />
                <img src={ArtworkBlue} alt="artwork_blueFace" />
                <img src={ArtworkYellow} alt="artwork_yellowFace" />
                <img src={ArtworkWhite} alt="artwork_whiteFace" />                
            </Cubev2>
        </div>
    )
}

/**
 * Extend the Cube from react-3d-cube and add
 * a custom starting face when the cube is loaded.
 */
 class Cubev2 extends Cube {
    constructor(props) {
        super(props)

        this.state = {
            ...this.state,
            faces: {
                ...this.state.faces,
                tilted: {
                    translate: {
                        x: 0,
                        y: 0,
                        z: this.faceSize
                    },
                    rotate: {
                        x: 0,
                        y: 1,
                        z: 0,
                        deg: this.randomizeFace()
                    }
                }
            }
        }
    }
    

    /**
     * Generates a random starting degree.
     */
    randomizeFace() {
        const degrees = [45,135,225]
        const deg = degrees[this.randomNum(degrees.length)]
        return (this.randomNum(2) === 0) ? deg : deg*-1
    }

    /**
     * Generates a random number from 0 to max-1.
     */
    randomNum(max) {
        return Math.floor(Math.random()*100)%max
    }
}