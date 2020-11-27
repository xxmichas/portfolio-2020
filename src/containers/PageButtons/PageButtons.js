import React from 'react'
import styles from './PageButtons.module.css'

const PageButtons = (props) => {
    const Buttons = []
    for (let index = 1; index < (props.sectionCount + 1); index++) {
        Buttons.push(<div onClick={() => props.changeSection(index)} className={`${styles.Button} ${props.currentSection === index ? styles.ButtonActive : null}`} key={index}>{index}</div>)
    }

    return (
        <div className={styles.PageButtons}>
            {Buttons}
        </div>
    )
}

export default PageButtons
