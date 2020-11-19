import React, { Fragment, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './ProfileCard.module.css'
import profilePicture from '../../assets/snoo.png'

import Steam from '../../assets/social/steam.png'
import Discord from '../../assets/social/discord.png'
import Gmail from '../../assets/social/gmail.png'
import Github from '../../assets/social/github.png'
import Twitter from '../../assets/social/twitter.png'

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
                                }} timeout={250} unmountOnExit>
                                <div className={styles.Icons}>
                                    <div className={styles.Socials}><img src={Gmail} alt="Email" /><p>xxmichas@gmail.com</p></div>
                                    <div className={styles.Socials}><img src={Github} alt="Github" /><p>/xxmichas</p></div>
                                    <div className={styles.Socials}><img src={Discord} alt="Discord" /><p>xxmichas#0499</p></div>
                                    <div className={styles.Socials}><img src={Steam} alt="Steam" /><p>xxmichas</p></div>
                                    <div className={styles.Socials}><img src={Twitter} alt="Twitter" /><p>@xxmichas</p></div>
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
