import React, { Fragment } from 'react'
import styles from './ProfileCard.module.css'
import profilePicture from '../../assets/snoo.png'

const ProfileCard = () => {
    return (
        <Fragment>
            <div className={styles.Card}>
                <div className={styles.BackgroundContainer}>
                    <div className={styles.Background} />
                </div>
                <img className={styles.Picture} src={profilePicture} alt="Profile" />
                <span className={`${styles.TextShadow} ${styles.Title}`}>Michael Orkisz</span>
                <span className={styles.TextShadow} style={{fontSize: "1.25em", marginBlockEnd: "1em"}}>- Aspiring Web Developer -</span>
                <p>Hi, My name is Michael. I am an Aspiring Web Developer, mainly working in JavaScript, HTML, CSS & Node.js</p>
                <p>I like C# and making games in unity (but as a side hobby)</p>
            </div>
        </Fragment>
    )
}

export default ProfileCard
