import React from 'react'
import styles from './ProjectCard.module.css'

const ProjectCard = (props) => {
    let centered = null
    if (props.centered) {
        centered = {
            backgroundPositionX: "50%"
        }
    }
    console.log(props.info)
    return (
        <div className={`${styles.Card} ${props.active ? styles.CurrentCard : null}`} style={{backgroundImage: `url(${props.background})`, ...centered}}>
            <div className={styles.Footer}>
                <div className={styles.Title}>
                    {props.title}
                </div>
                <div className={styles.Description}>
                    {props.description}
                </div>
            </div>
            <div className={styles.Overlay}>
                <div className={styles.Box}>
                    {props.info}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
