import React from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import styles from './Section1.module.css'

const Section3 = (props) => {

    return (
        <div className={styles.Projects}>
            <ProjectCard background={null} title={null} description={null} modal={null} />
            <ProjectCard background={null} title={null} description={null} modal={null} />
            <ProjectCard background={null} title={null} description={null} modal={null} />
        </div>
    )
}

export default Section3