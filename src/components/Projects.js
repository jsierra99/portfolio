import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";


const Section = styled.section`
    background: #fff;
    padding: 8rem 0 2rem 0;
`;

const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;

    h1
    {
        margin-bottom: 4rem;
        text-align: center;
        font-size: 3rem;
    }
`;

const GridProjects = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
`;

const ProjectsContent = styled.div` 
    h3
    {
        text-align: center;
        margin: 2rem 0 .25rem 0;
        font-size: 1.2rem;
        color: #264067;
        border: 2px solid #264067;
        padding: .25rem 0;
        border-radius: 10px;
    }

    a
    {
        text-decoration: none;

        button
        {
            outline: none;
            border: none;
            cursor: pointer;
            padding: 1rem 2rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 10px;
            color: #fff;
            background: #24292E;
            display: block;
            margin: 0 auto;
            width: 100%;
            font-size: 1rem;
            transition: 1s ease-in-out;

            &:hover
            {
                opacity: .7;
            }
        }
    }
`;

const ProjectsImage = styled(motion.img)`
    width: 100%;
    height: 400px;
    cursor: pointer;
    border-radius: 10px;
`;

const Projects = ({ slides }) => 
{
    return (
        <Section>
            <Container>
                <h1>My Projects</h1>
                <GridProjects>
                    {slides.map((a, b) =>
                        <ProjectsContent key={b}>
                            <h3>{a.title}</h3>
                            <a  href={a.url} target="_blank">
                                <ProjectsImage whileHover={{scale: 0.9}} transition={{duration:1}} src={a.image} alt={a.alt} />
                            </a> 
                            <a href={a.gitHub}><motion.button whileHover={{scale: 0.9}} className="btn">github</motion.button></a>
                        </ProjectsContent>   
                    )}
              </GridProjects>
            </Container>
        </Section>
    )
}

export default Projects
