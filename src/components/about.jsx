import React, { Component } from 'react';
import "./about.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { HiDocument } from "react-icons/hi";
import Pdf from "../documents/AlexandrosGkekas_cv.pdf";

const icons={
    linkedin: {
        url:'https://www.linkedin.com/in/alexandros-gekas-25b4a823a/'
    },
    github: {
        url:'https://github.com/alexigk'
    },
    mail: {
        url: 'mailto:gekasalexandros@gmail.com'
    },
    cv: {
        url: Pdf
    }
}

function About(props) {
    return (
        <div>
            <div id='info'>
                I am an aspiring Front End Engineer, bachelor of 
                Computer Science at the University of Crete, working on projects 
                using the Angular framework and React.js.
            </div>
            <h3 id='contactme'>.contact me</h3>
            <div id='icons'>
                <a href={icons.linkedin.url}>
                    <BsLinkedin className="myIcons"/>
                </a>
                <a href={icons.github.url}>
                    <BsGithub className="myIcons"/>
                </a>
                <a href={icons.mail.url}>
                    <GoMail className="myIcons"/>
                </a>
                <a href={icons.cv.url} target="_blank">
                    <HiDocument className="myIcons"/>
                </a>
            </div>
        </div>
    );
}
 
export default About;