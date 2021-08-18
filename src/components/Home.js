import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, AnimateSharedLayout } from "framer-motion";
import images from "../img/home.webp";
import Arrow from "./LoaderArrow";

const Section = styled.section`
    background: #fff;
    height: 100%;
    padding-top: 220px;

    @media only screen and (max-width: 595px)
    {
        h2, h3
        {
            text-align: left;
            font-size: 1.5rem !important;
        }

        h1
        {
            font-size: 2.5rem !important;
        }
    }
`;

const Container = styled.div`
    max-width: 85%;
    margin: 0 auto;
`;

const GridHome = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 3rem;
    text-transform: uppercase;

    h2
    {
        font-size: 3rem;
        font-weight: 500;
    }

    h3
    {
        font-size: 2rem;
        margin-top: 1rem;
    }
`;

const HomeRight = styled.div`
    @media only screen and (max-width: 595px)
    {
        margin-top: 4rem;
    }
`;

const HomeImage = styled.img`
    width: 90%;
`;

const Home = () => 
{
    return (
        <Section>
            <Container>
                <GridHome>
                    <AnimateSharedLayout>
                        <motion.HomeLeft layout
                            animate=
                            {{
                                y: 100,
                                x: 50,
                            }}
                            transition={{duration: 3}}
                        >
                            <h2>Hello</h2>
                            <motion.h1 animate={{fontSize: "4rem", color: "#7C8FB8"}}transition={{duration:3}}>My name is Jesus Sierra</motion.h1>
                            <h3>Web Developer</h3>
                            <Arrow />
                        </motion.HomeLeft>
                    </AnimateSharedLayout>
                    <HomeRight>
                        <HomeImage src={images} />
                    </HomeRight>
                </GridHome>
            </Container>
        </Section>
    )
}

export default Home
