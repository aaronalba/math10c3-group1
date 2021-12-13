import { Typography, Container, Link } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { Colors } from '../utils/Colors';
import { Font } from '../utils/Font';

const containerMarginTop = 5

const references = [
    {t: `Geometry | mathematics. (2019). In Encyclopædia Britannica. Retrieved from`, l: `https://www.britannica.com/science/geometry`},
    {t: `‌How Is Geometry Used in Real Life? (2018). Retrieved from Sciencing website: `, l: `https://sciencing.com/geometry-used-real-life-8698204.html`},
    {t: `Introduction to Algorithms. (2019, March 28). Retrieved from GeeksforGeeks website:`, l:`https://www.geeksforgeeks.org/introduction-to-algorithms/`},
    {t: `Introduction to Geometry | SkillsYouNeed. (n.d.). Retrieved from www.skillsyouneed.com website: `, l: `https://www.skillsyouneed.com/num/geometry.html`},
    {t: `Mathematics of the Rubik's cube. (n.d.). Rubik's Cube and Twisty Puzzle Wiki - Ruwix. Retrieved December 8, 2021, from`, l: `https://ruwix.com/the-rubiks-cube/mathematics-of-the-rubiks-cube-permutation-group/`},
    {t: `Permutation and combination (Definition, formulas & examples). (2021, March 16). BYJUS. Retrieved December 8, 2021, from`, l: `https://byjus.com/maths/permutation-and-combination/`},
    {t: `The age-old sunflower conjecture may soon be solved. (2019, October 27). Popular Mechanics. Retrieved December 7, 2021, from`, l: `https://www.popularmechanics.com/science/math/a29579746/sunflower-math-problem/`},
    {t: `The golden ratio in sunflowers | The lasting journey to life long learning. (2015, November 20). Retrieved December 7, 2021, from`, l: `https://blogs.glowscotland.org.uk/glowblogs/njoldfieldeportfolio1/2015/11/20/the-golden-ratio-in-nature-and-art/`},
    {t: `Van, D. (2019, May 28). Using Rubik’s Cubes to Teach Math. Retrieved from Edutopia website:`, l: `https://www.edutopia.org/article/using-rubiks-cubes-teach-math`},
    {t: `AlleyDog.com. (2021). Trial And Error. Retrieved December 12, 2021 from AlleyDog.com. (2021). Trial And Error. Retrieved December 12, 2021 from`, l: `https://www.alleydog.com/glossary/definition.php?term=Trial+And+Error#:~:text=Trial%20and%20error%20is%20a,t%20trying%20a%20new%20method.`},
    {t: `CFI Education Inc. (2021). What is a Combination? Retrieved December 12, 2021 from`, l: `https://corporatefinanceinstitute.com/resources/knowledge/other/combination/.`},
    {l: `‌https://www.computersciencedegreehub.com/lists/5-types-of-math-used-in-computer-science/`},
    {l: `https://ethw.org/Binary_Numbers_and_Binary_Math`},
    {l: `https://mikkegoes.com/computer-science-binary-code-explained`},
    {l: `https://blog.wolfram.com/2017/02/24/hidden-figures-modern-approaches-to-orbit-and-reentry-calculations/`},
    {l: `https://aperiodical.com/2018/11/eulers-method-in-structural-engineering/ 
    https://brilliant.org/wiki/eulers-method/`},

]

export default function Reference() {
    return (
        <Box 
            // sx={{backgroundColor: Colors.secondaryLight}}
            display="block"
            width="100vw"
            marginTop={2}>
            <Typography
                color={Colors.secondary}
                fontFamily={Font.headings}
                fontWeight={500}
                textAlign="center"
                variant="h2">
                References
            </Typography>

            {references.map(e => (
                <Container
                    sx={{allignItems: "center",marginTop: containerMarginTop}}>
                    <Typography variant="body1">
                        {e.t}
                        <Link
                            fontFamily={Font.paragraphs}
                            color={Colors.secondary}
                            href={e.l} 
                            sx={{
                                display: "inline",
                                
                            }}>                        
                            {" "+e.l}
                        </Link>
                    </Typography>
                    
                </Container>
            ))}
        </Box>
    )
}