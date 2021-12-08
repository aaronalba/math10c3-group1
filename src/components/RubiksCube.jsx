import * as React from 'react';
import Cube from 'react-3d-cube';

const cubeSize = 350

export default function RubiksCube() {
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
                index="tilted"/>
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