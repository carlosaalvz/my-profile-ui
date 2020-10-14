import React, { useState, useEffect } from 'react';
import "./About.scss";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Storage } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';

const About: React.FC = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {

        /*
        Storage.get('public/Carlos Alvarez - SWE.pdf',{ download: false})
        .then(result => {
            console.log("got a response")
            // data.Body is a Blob
           console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
        */

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
                            <div className="description">                                
                                <a href={'https://profilebucket205124-prod.s3.us-east-2.amazonaws.com/public/Carlos+Alvarez+-+SWE.pdf'}>Click to view Resume</a>
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
