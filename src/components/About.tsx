import React, { useState, useEffect } from 'react';
import "./About.scss";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const About: React.FC = () => {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        const timeout = setTimeout(() => setShow(true), 500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <TransitionGroup component={null}>
           {show ? (
                <section id="about" className="about-container">
                    <CSSTransition in={show} classNames="fade" timeout={3000}>
                        <div > 
                            <h1>Hello, my name is</h1>
                            <h2>Carlos Alvarez.</h2>
                            <h3>Welcome to my profile, I use this as an outlet to build and play with new technology.</h3>
                            <div className="description">
                                I'm a software engineer based out of Dallas-Fort Worth, TX.
                            </div>
                        </div>
                    </CSSTransition>
                </section >
            ) : (
                <div/>
            )}
            
        </TransitionGroup>
    );
};

export default About;
