import React, { useState, useEffect } from 'react';
import "./About.scss";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Storage } from 'aws-amplify';

const About: React.FC = () => {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        Storage.list('Carlos Alvarez - SWE.pdf')
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });

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
                            <h3>I build software systems and ocassionaly random stuff like this.</h3>
                            <div className="description">
                                I'm a software engineer based out of Dallas-Fort Worth, TX specializing in building scaleable applications.
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
