import React from 'react'
import './home.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,

    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../../primitives/Button';
import { Container } from '../../primitives/Container';
import { Heading } from '../../primitives/Heading';
import Skills from '../skills/skills';
import Work from '../work/work';
import Contact from '../contact/contact';
import listOfSkills from '../../assets/data/skils.json';
import listOfWork from '../../assets/data/recent-work.json';
import profile from '../../assets/data/profile.json';
import resume from '../../assets/resume/resume.pdf'

export default function home() {

    return (
        <Container>
            <Container className="home">
                <Container className="intro">
                    <h2>{profile.firstName}{' '}{profile.lastName}</h2>
                    <h2>{profile.aboutLine1}</h2>
                    <p>I am a Software Developer, certified Product Owner, and Scrum Master, skilled in delivering comprehensive expertise in the design, development, testing, and maintenance of robust software systems. My proficiency extends across a diverse and promising skill-set, and I am well-versed in utilizing the latest cutting-edge development tools and methodologies. Whether independently managing projects or collaborating within a dynamic team, I bring effective self-management and a collaborative spirit to ensure the success of each endeavor.
</p></Container>
                <Container className="profile-picture">
                </Container>
                <Container centerContent marginTop={'0.5rem'} className="social-icons-parent">
                    <Container spaceEvenly width={'8rem'} className="social-icons">
                        <a href={profile.linkedinLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href={profile.githubLink} target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>

                    </Container>
                </Container>
                <Container centerContent className="contact-me">
                    <a href="#contact"><Button>Contact me</Button></a>
                    <a href={resume} target="_blank" rel="noreferrer" data-title="Resume"><Button>My Resume</Button></a>
                </Container>
            </Container>
  
            <Container id="skills" className="skill-section">
                <Container centerContent innerShadow padding={'1.2rem'}>
                    <Heading>Technologies Used</Heading>
                </Container>
                {listOfSkills.map((skill, index) => <Skills skill={skill} key={skill.name + index}></Skills>)}
            </Container>
            <Container id="work" className="work-section">
                <Container centerContent innerShadow padding={'1.2rem'}>
                    <Heading>Latest Work Experience</Heading>
                </Container>
                {listOfWork.map((work, index) => <Work key={'work' + index} workDetails={work}></Work>)}
            </Container>
            <Container id="contact" className="contact-section">
                <Contact contactDetails={profile}></Contact>
            </Container>
            <a href="#home" className="goto-top">
                <FontAwesomeIcon icon={faAngleDoubleUp}></FontAwesomeIcon>
            </a>
        </Container>
    )
}
