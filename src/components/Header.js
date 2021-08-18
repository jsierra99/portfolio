import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navMenu } from '../data/navMenuInfo';
import close from "../img/icon-close.svg";
import ham from "../img/icon-hamburger.svg";

const HEADER = styled(motion.header)`
    height: 100px;
    background: transparent;
    position: fixed;
    width: 100%;
    padding: 0 10%;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.div`
    h3
    {
        color: #264067;
        font-size: 1.4rem;
        cursor: pointer;
    }
`;

const Nav = styled.div`
    @media only screen and (max-width: 680px)
    {
        display: none;
    }
`;

const MenuLinks = styled(Link)`
    padding-left: 2rem;
    display: inline-block;
    text-decoration: none;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    color: #264067;
    position: relative;
    bottom: --50px;
    animation: show 1s ease-in-out forwards;
    transition: .5s ease-in-out;

    &:hover
    {
        opacity: .5;
    }
`;

const Ham = styled.img`
    display: none;
    cursor: pointer;

    @media only screen and (max-width: 680px)
    {
        display: block;
    }
`;

const Close = styled.img`
    display: none;
`;

const Header = ({ toggle }) => 
{
    return (
        <HEADER
            initial={{opacity: 0, y:-120}}
            animate={{opacity: 1, y: 0, x: 0.1}}
            transition={{duration: 1.5}}
        >
            <Logo>
                <h3>SUBLIME Tech</h3>
            </Logo>
            <Nav>
                {navMenu.map((x, y) => (
                    <MenuLinks to={x.links} key={y}>
                        {x.title}
                    </MenuLinks>
                ))}
            </Nav>
            <Ham src={ham} onClick={toggle}/>
        </HEADER>
    )
}

export default Header
