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
    {t: `Trial And Error definition | Psychology Glossary | alleydog.com. (n.d.). AlleyDog.com. (2021). Trial And Error. Retrieved December 12, 2021 from AlleyDog.com. (2021). Trial And Error. Retrieved December 12, 2021 from`, l: `https://www.alleydog.com/glossary/definition.php?term=Trial+And+Error#:~:text=Trial%20and%20error%20is%20a,t%20trying%20a%20new%20method.`},
    {t: `Combination - Definition, Formula, and Practical Example. (n.d.). Corporate Finance Institute.`, l: `https://corporatefinanceinstitute.com/resources/knowledge/other/combination/`},
    {t: `5 Types of Math Used in Computer Science. (n.d.). Computer Science Degree Hub.`, l: `‌https://www.computersciencedegreehub.com/lists/5-types-of-math-used-in-computer-science/`},
    {t: `Binary Numbers and Binary Math. (2018, July 12). Engineering and Technology History Wiki.`, l: `https://ethw.org/Binary_Numbers_and_Binary_Math`},
    {t: `Mikke. (2019, July 15). Binary Code Explained Step-by-Step: How Does Binary Work? Mikke Goes Coding.`, l: `https://mikkegoes.com/computer-science-binary-code-explained`},
    {t: `Bryant, J., Jain, P., & Trott, M. (2017, February 24). Hidden Figures: Modern Approaches to Orbit and Reentry Calculations—Wolfram Blog. Wolfram Blog.`, l: `https://blog.wolfram.com/2017/02/24/hidden-figures-modern-approaches-to-orbit-and-reentry-calculations/`},
    {t: `Luwisha, N. (2018, November 20). Euler in maths and engineering. The Aperiodical. `, l: `https://aperiodical.com/2018/11/eulers-method-in-structural-engineering/`},
    {t: `Khan, S., Williams, C., Khim, J., & Ross, E. (n.d.). Euler's Method. Brilliant.`, l: `https://brilliant.org/wiki/eulers-method/`},

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