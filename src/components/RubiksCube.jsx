import * as React from 'react';
import Cube from 'react-3d-cube';
import Artwork1 from "../img/artwork1_min.png";
import Artwork2 from "../img/artwork2_min.png";
import Artwork3 from "../img/artwork3_min.png";
import Artwork4 from "../img/artwork4_min.png";
import Artwork5 from "../img/artwork5_min.png";
import Artwork6 from "../img/artwork6_min.png";
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

                <img src={Artwork1} alt="artwork1" />
                <img src={Artwork2} alt="artwork2" />
                <img src={Artwork3} alt="artwork3" />
                <img src={Artwork4} alt="artwork4" />
                <img src={Artwork5} alt="artwork5" />
                <img src={Artwork6} alt="artwork6" />
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