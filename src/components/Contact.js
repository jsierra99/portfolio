import React, { useState } from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Section = styled.section`
    background: #fff;
    padding: 6rem 0 8rem 0;
`;

const Container = styled.div`
    max-width: 80%;
    margin: 0 auto;

    h1
    {
        font-size: 3.5rem;
        text-align: center;
        color: #264067;
        margin-bottom: 4rem;
    }

    form
    {
        input, textarea
        {
            display: block;
            margin: 0 auto;
            width: 50%;
        }

        input, textarea
        {
            padding: .75rem;
            outline: none;
            border-top: 2px solid #264067;
            border-bottom: none;
            border-right: none;
            border-left: none;
        }

        textarea
        {
            border-bottom: none;
        }

        input:last-child
        {
            background: #264067;
            border: none;
            color: #fff;
            font-weight: 700;
            font-size: 1rem;
            border-radius: 10px;
            cursor: pointer;
            transition: .5s ease-in-out;

            &:hover
            {
                opacity: .75;
            }
        }

        input::placeholder, textarea::placeholder
        {
            color: #264067;
            font-weight: 700;
            letter-spacing: 1px;
        }
    }
    

    h3, button
    {
        display: none;
        color: #264067;
    }

    h3
    {
        font-size: 1.75rem;
        font-weight: 500;
        margin-bottom: 1rem !important;
    }

    button
    {
        color: #fff;
        background: #264067;
        border: none;
        outline: none;
        padding: .75rem 1.5rem;
        border-radius: 5px;
        font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
    }

    h3.appear, button.appear
    {
        display: block;
        margin: 0 auto;
        text-align: center;
    }

    
    @media only screen and (max-width: 675px)
    {
        h1
        {
            font-size: 2rem;
        }
    }
`;

const formVariants = 
{
    open: { opacity: 1, x: 0 },
    closed: { opacity:0, x:"-100%" }
};

const Contact = () => 
{
    const sendEmail = (e) =>
    {
        e.preventDefault();

        emailjs.sendForm('service_tr48r2h', 'template_4sliw7v', e.target, "user_LPVLqgd25xphjOn0bpNvz")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
    };

    const [show, setShow] = useState(true);

    return (
        <Section>
            <Container>
                <h1>Contact Me:</h1>
                <motion.h3 animate={!show ? "open" : "closed"} variants={formVariants} className={!show ? "appear" : ""}>Message Sent!</motion.h3>
                <motion.button 
                    animate={!show ? "open" : "closed"} 
                    variants={formVariants} 
                    onClick={() => setShow(!show)} 
                    className={!show ? "appear" : ""}
                    whileHover={{scale:0.9}}
                    transition={{duration: 0.5}}
                >
                    New Message
                </motion.button>
                <motion.form animate={show ? "open" : "closed"} variants={formVariants} className={show ? "show" : ""} onSubmit={sendEmail}>
                    <input type="text" placeholder="Name" name="name"/>
                    <input type="email" placeholder="Email Address" name="email" />
                    <input type="text" placeholder="Subject" name="subject" />
                    <textarea id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    <input onClick={() => setShow(!show)} type="submit" value="Send Message"></input>
                </motion.form>
            </Container>
        </Section>
    )
}

export default Contact
