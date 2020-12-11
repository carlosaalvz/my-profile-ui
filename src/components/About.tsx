import React, { useState, useEffect } from 'react';
import "./About.scss";
import {Page} from './Page';
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
                <div>
                    <CSSTransition in={show} classNames="fade" timeout={3000}>
                        <section id="about" className="about-container"> 
                            <div className="greeting">Hello, my name is</div>
                            <div className="name">Carlos Alvarez.</div>
                            <div className="description">Welcome to my profile, I use this as an outlet to build and expirement with new technology.</div>
                            <div className="location">
                                I'm a software engineer based out of Dallas - Fort Worth, TX.
                            </div>
                        </section>
                    </CSSTransition>
                </div >
            ) : (
                <div/>
            )}
            
        </TransitionGroup>
    );
};

export default About;
