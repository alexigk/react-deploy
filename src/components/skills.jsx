import React, { Component } from 'react';
import './skills.css';

const skills={
    programming:{
        name: "Programming Languages:",
        langs: "Javascript, Typescript, Java, C, Python"
    },
    scripting:{
        name: "Scripting Languages:",
        langs: "HTML, CSS, PHP"
    },
    tools:{
        name: "Tools and Frameworks:",
        langs: "Angular, Figma, Git, Latex, Docker"
    },
    operating:{
        name: "Operating Systems:",
        langs: "Linux, Windows"
    }
}

function Skills(props) {
    return (
        <div>
            <div id='skilz'>
                <p>{skills.programming.name} &nbsp;{skills.programming.langs}</p>
                <p id='scripts'>{skills.scripting.name} &nbsp;&nbsp;&nbsp;{skills.scripting.langs}</p>
                <p id='tools'>{skills.tools.name} &nbsp;&nbsp;{skills.tools.langs}</p>
                <p id="ops">{skills.operating.name} &nbsp;&nbsp;&nbsp;{skills.operating.langs}</p>
            </div>
        </div>
    );
}
 
export default Skills;