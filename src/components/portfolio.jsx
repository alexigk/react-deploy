import React from 'react';
import './portfolio.css';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import { useState } from "react";



const port = {
    name: 'Alexandros Gekas',
    work: 'Front End Developer',
    navBar:[{key:"About", name:".about"},{key:"Projects", name:".projects"},{key:"Skills", name:".skills"}]
}

const renderSection = (section) => {
    switch (section) {
		case "About":
			return <About/>
		case "Projects":
			return <Projects/>
		case "Skills":
			return <Skills/>
		default:
        return <About/>
	}
  };

function Portfolio() {
    const [section, setActiveSection] = useState("About");
    return (
        <React.Fragment>
            <div className='creds'>
                <h1>{port.name}</h1>
                <h5>{port.work}</h5>
                <div className='line'></div>
                <div className='list'>
                    <ul>
                        {port.navBar.map((item) =>
                        <li key={item.key} onClick= {()=>setActiveSection(item.key)}>{item.name}</li>
                        )}
                    </ul>
                </div>
            </div>
            <div className='creds' id='myComp'>{renderSection(section)}</div>
        </React.Fragment>
    );
}

export default Portfolio;