import React, { Fragment } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Section3.module.css'

import NTDF from '../../assets/projects/NTDF.png'
import VR from '../../assets/projects/VR.png'

const Section3 = (props) => {

    return (
        <Fragment>
            <div className={styles.Projects}>
                <ProjectCard background={NTDF} title="Nature TD: Forest" description="3D Unity Game" modal={null} />
                <ProjectCard background={VR} title="Vertical Runner" description="2D Unity Game" modal={null} />
                <ProjectCard background={null} title={null} description={null} modal={null} />
                <ProjectCard background={null} title={null} description={null} modal={null} />
                <ProjectCard background={null} title={null} description={null} modal={null} />
                <ProjectCard background={null} title={null} description={null} modal={null} />
                <ProjectCard background={null} title={null} description={null} modal={null} />
            </div>
            <SectionTitle show={props.currentSection === 3 ? true : false} textLeft="My&nbsp;" textRight="Projects" />
        </Fragment>
    )
}

export default Section3