import React from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import arrow from "../img/arrow-down.svg";

const arrowVariants =
{
    animateArrow:
    {
        x: [0, 0],
        y: [10, 0],
        transition:
        {
            x:
            {
                yoyo: Infinity,
                duration: 0.25
            },
            y:
            {
                yoyo: Infinity,
                duration: 0.5,
                ease: "easeOut"
            },
        }
    }
};

const Arrow = styled(motion.img)`
    height: 40px;
    width: 40px;
    display: block;
    margin-left: 2rem;
`;

const LoaderArrow = () => 
{
    return (
        <>
            <Arrow src={arrow} variants={arrowVariants} animate="animateArrow" />
        </>
    )
}

export default LoaderArrow
