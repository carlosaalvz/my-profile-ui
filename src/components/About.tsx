import React from 'react';
import "./About.scss";

export const About: React.FC = () => (
    <section id="about" className="about-container">
        <h1>Hey, my name is</h1>
        <h2>Carlos Alvarez.</h2>
        <h3>I build software systems and ocassionaly random stuff like this.</h3>
        <div className="description">
            I'm a software engineer based out of Dallas-Fort Worth TX specializing in building scaleable applications.
        </div>
    </section >
);
