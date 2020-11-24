import React from 'react'
import styles from './ProjectCard.module.css'

const ProjectCard = (props) => {
    return (
        <div className={styles.Card} style={{backgroundImage: `url(${props.background})`}}>
            <div className={styles.Footer}>
                <div className={styles.Title}>
                    {props.title}
                </div>
                <div className={styles.Description}>
                    {props.description}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
