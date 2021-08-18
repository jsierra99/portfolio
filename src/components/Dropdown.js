import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import close from "../img/icon-close.svg";
import { Link } from "react-router-dom";
import { navMenu } from '../data/navMenuInfo';

const Container = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #264067;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? "1" : "0")};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%")};
`;

const Close = styled.img`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const Nav = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px)
    {
        grid-template-rows: repeat(4,60px);
    }
`;

const MenuLinks = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    list-style: none;
    transition: .2s ease-in-out;

    &:hover
    {
        opacity: .5;
    }
`;

const Dropdown = ({ isOpen, toggle }) => 
{
    return (
        <Container isOpen={isOpen} onClick={toggle}>
            <Close src={close} onClick={toggle} />
            <Nav>
                {navMenu.map((x, y) => (
                    <MenuLinks to={x.links} key={y}>
                        {x.title}
                    </MenuLinks>
                ))}
            </Nav>
        </Container>
    )
}

export default Dropdown
