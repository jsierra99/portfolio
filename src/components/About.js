import React from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import aboutImg from "../img/about.webp";
import html from "../img/html5.svg";
import css from "../img/css3-alt.svg";
import sass from "../img/sass.svg";
import js from "../img/js-square.svg";
import react from "../img/react.svg";

const Section = styled.section`
    background: #fff;
    padding-top: 8rem;
    height: 100%;
`;

const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;
`;

const GridABout = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
`;

const LeftGrid = styled.div`
     @media only screen and (max-width: 675px)
    {
        order: 2;
        margin-top: 4rem;
    }
`;

const AboutImage = styled.img`
    width: 100%;
`;

const RightContent = styled.div`
    position: relative;
    top: 100px;

    h2
    {
        font-size: 2.5rem;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        text-align: right;
    }

    p
    {
        color: #8D7777;
        font-weight: 500;
        margin-bottom: 5.5rem;
        font-size: 1.1rem;
        text-align: right;
    }

    @media only screen and (max-width: 675px)
    {
        margin-bottom: 4rem;
        order: 1;
        
        h2, p
        {   
            text-align: center;
        }
    }
`;

const Brands = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    justify-items: center;
    
    img
    {
        width: 120px;
        height: 120px;
        cursor: pointer;
    }
`;

const HTML = styled(motion.img)``;
const CSS = styled(motion.img)``;
const SASS = styled(motion.img)``;
const JS = styled(motion.img)``;
const REACT = styled(motion.img)``;

const About = () => 
{
    return (
        <Section>
            <Container>
                <GridABout>
                    <LeftGrid>
                        <AboutImage src={aboutImg} />
                    </LeftGrid>
                    <RightContent>
                        <h2>About Myself</h2>
                        <p>My name is Jesus Sierra. I am a web developer with knowledge in:</p>
                        <Brands>
                            <HTML whileHover={{scale:1.2}} transition={{duration:1}} src={html} />
                            <CSS whileHover={{scale:1.2}} transition={{duration:1}} src={css} />
                            <SASS whileHover={{scale:1.2}} transition={{duration:1}} src={sass} />
                            <JS whileHover={{scale:1.2}} transition={{duration:1}} src={js} />
                            <REACT whileHover={{scale:1.2}} transition={{duration:1}} src={react} />
                        </Brands>
                    </RightContent>
                </GridABout>
            </Container>
        </Section>
    )
}

export default About
