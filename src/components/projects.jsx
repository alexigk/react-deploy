import React, { Component } from 'react';
import "./projects.css";

const projects = {
    musical:{
        name: "Musical Interface/",
        url: "https://github.com/alexigk/Musical-Interface",
        description: "A cross platform musical interface in Angular."
    },
    login:{
        name: "Login Form/",
        url: 'https://github.com/alexigk/Login-Form',
        description: "A login form for Covid-19 vaccination randevouz."
    },
    buffer:{
        name: "Buffer Overflow Attack/",
        url: "https://github.com/alexigk/Buffer-overflow-attack",
        description: "A buffer overflow attack excersice in C."
    },
    compiler:{
        name: "Alpha Compiler/",
        url: "https://github.com/alexigk/Alpha-Compiler",
        description: "A compiler for the language Alpha in C."
    }
};

function Projects(props) {
    return (
        <div>
            <div id='myProjects'>
                <div className='prj1' id='music'>
                    <a href={projects.musical.url} className='prj'>
                        {projects.musical.name}
                    </a>
                    <span className='description'>
                        {projects.musical.description}
                    </span>
                </div>

                <div className='prj1' id='login'>
                    <a href={projects.login.url} className='prj'>
                        {projects.login.name}
                    </a>
                    <span className='description'>
                        {projects.login.description}
                    </span>
                </div>

                <div className='prj1' id='buffer'>
                    <a href={projects.buffer.url} className='prj'>
                        {projects.buffer.name}
                    </a>
                    <span className='description'>
                        {projects.buffer.description}
                    </span>
                </div>

                <div className='prj1' id='compiler'>
                    <a href={projects.compiler.url} className='prj'>
                        {projects.compiler.name}
                    </a>
                    <span className='description'>
                        {projects.compiler.description}
                    </span>
                </div>
            </div>
        </div>
    );
}
 
export default Projects;