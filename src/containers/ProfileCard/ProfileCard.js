import React, { Fragment, useState } from 'react'
import styles from './ProfileCard.module.css'
import profilePicture from '../../assets/snoo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faSteam, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group'

const ProfileCard = () => {
    const [Hovered, setHovered] = useState(false)
    return (
        <Fragment>
            <div className={styles.Card} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className={styles.BackgroundContainer}>
                    <div className={styles.Background} />
                </div>
                <img className={styles.Picture} src={profilePicture} alt="Profile" />
                <span className={`${styles.TextShadow} ${styles.Title}`}>Michael Orkisz</span>
                <span className={styles.TextShadow} style={{fontSize: "1.25em", marginBlockEnd: "1em"}}>- Aspiring Web Developer -</span>
                <p>Hi, My name is Michael. I am an Aspiring Web Developer, mainly working in JavaScript, HTML, CSS & Node.js</p>
                <p>I like C# and making games in unity (but as a side hobby)</p>
                <CSSTransition in={Hovered} classNames={{
                    enterActive: styles.OverlayEnterActive,
                    enterDone: styles.OverlayEnterDone,
                    exitActive: styles.OverlayExitActive,
                    exitDone: styles.OverlayExitDone
                }} timeout={300}>
                    {state => {
                        console.log(state)
                        return (
                            <div className={styles.Overlay}>
                                <CSSTransition in={state === "entered"} classNames={{
                                    enterActive: styles.IconsEnterActive,
                                    enterDone: styles.IconsEnterDone,
                                    exitActive: styles.IconsExitActive,
                                    exitDone: styles.IconsExitDone
                                }} timeout={500} unmountOnExit>
                                <div className={styles.Icons}>
                                    <FontAwesomeIcon icon={faGithub} className={styles.Icon} size="2x" />
                                    <FontAwesomeIcon icon={faDiscord} className={styles.Icon} style={{padding: "5px 169px 5px 11px"}} size="2x" />
                                    <FontAwesomeIcon icon={faEnvelope} className={styles.Icon} size="2x" />
                                    <FontAwesomeIcon icon={faSteam} className={styles.Icon} size="2x" />
                                    <FontAwesomeIcon icon={faTwitter} className={styles.Icon} size="2x" />
                                </div>
                                </CSSTransition>
                            </div>
                        )
                    }}
                </CSSTransition>
            </div>
        </Fragment>
    )
}

export default ProfileCard
