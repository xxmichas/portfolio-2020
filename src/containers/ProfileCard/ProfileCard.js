import React, { Fragment, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import styles from './ProfileCard.module.css'
import profilePicture from '../../assets/snoo.png'

import Steam from '../../assets/social/steam.png'
import Discord from '../../assets/social/discord.png'
import Gmail from '../../assets/social/gmail.png'
import Github from '../../assets/social/github.png'
import Twitter from '../../assets/social/twitter.png'

const ProfileCard = () => {
    const [Hovered, setHovered] = useState(false)
    const [Name, setName] = useState("Michael Orkisz")

    const setNameHandler = (newName) => {
        if (Name === "Michael Orkisz") {
            setName(newName)
            setTimeout(() => {
                setName("Michael Orkisz")
            }, 2000);
        }
    }

    const CopyToClipboard = async (string) => {
        try {
            await navigator.clipboard.writeText(string);
            setNameHandler("Copied!")
        }
        catch (err) {
            console.error('Failed to copy: ', err);
        }
    }

    return (
        <Fragment>
            <div className={styles.Card} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className={styles.BackgroundContainer}>
                    <div className={styles.Background} />
                </div>
                <CSSTransition in={Hovered} classNames={{
                    enter: styles.NameContainerEnter,
                    enterDone: styles.NameContainerEnterDone,
                    exit: styles.NameContainerExit,
                    exitDone: styles.NameContainerExitDone
                }} addEndListener={(node, done) => {node.addEventListener('transitionend', done, false);}}>
                    <div className={styles.NameContainer}>
                        <SwitchTransition mode="out-in">
                            <CSSTransition addEndListener={(node, done) => {node.addEventListener("transitionend", done, false);}} 
                                classNames={{
                                    enter: styles.NameEnter,
                                    enterActive: styles.NameEnterActive,
                                    exit: styles.NameExit,
                                    exitActive: styles.NameExitActive,
                                }} key={Name}>
                                <div className={`${styles.Name} ${Name === "Copied!" ? styles.Copied : ""}`}>
                                    {Name}
                                </div>
                            </CSSTransition>
                        </SwitchTransition>
                    </div>
                </CSSTransition>
                <img className={styles.Picture} src={profilePicture} alt="Profile" />
                <span className={`${styles.TextShadow} ${styles.Title}`}>Michael Orkisz</span>
                <span className={styles.TextShadow} style={{fontSize: "1.25em", marginBlockEnd: "1em"}}>- Aspiring Web Developer -</span>
                <p className={styles.Description}>Hi, My name is Michael. I am an Aspiring Web Developer, mainly working in JavaScript, HTML, CSS & Node.js</p>
                <p className={styles.Description}>I like C# and making games in unity (but as a side hobby)</p>
                <CSSTransition in={Hovered} classNames={{
                    enterActive: styles.OverlayEnterActive,
                    enterDone: styles.OverlayEnterDone,
                    exitActive: styles.OverlayExitActive,
                    exitDone: styles.OverlayExitDone
                }} timeout={300}>
                    {state => {
                        return (
                            <div className={styles.Overlay}>
                                <CSSTransition in={state === "entered"} classNames={{
                                    enterActive: styles.IconsEnterActive,
                                    enterDone: styles.IconsEnterDone,
                                    exitActive: styles.IconsExitActive,
                                    exitDone: styles.IconsExitDone
                                }} timeout={300}>
                                    {state2 => {
                                        return (
                                            <div className={styles.Icons}>
                                                <CSSTransition in={state2 === "entered"} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterActive,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitActive
                                                }} timeout={300}>
                                                    <div className={styles.Socials} onClick={() => CopyToClipboard("xxmichas@gmail.com")}><img src={Gmail} alt="Email" /><p>xxmichas@gmail.com</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={state2 === "entered"} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterActive,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitActive
                                                }} timeout={300}>
                                                    <div className={styles.Socials} onClick={() => window.open("https://github.com/xxmichas")}><img src={Github} alt="Github" /><p>/xxmichas</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={state2 === "entered"} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterActive,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitActive
                                                }} timeout={300}>
                                                    <div className={styles.Socials} onClick={() => CopyToClipboard("xxmichas#0499")}><img src={Discord} alt="Discord" /><p>xxmichas#0499</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={state2 === "entered"} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterActive,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitActive
                                                }} timeout={300}>
                                                    <div className={styles.Socials} onClick={() => window.open("https://steamcommunity.com/id/xxmichas")}><img src={Steam} alt="Steam" /><p>xxmichas</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={state2 === "entered"} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterActive,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitActive
                                                }} timeout={300}>
                                                    <div className={styles.Socials} onClick={() => window.open("https://twitter.com/xxmichas")}><img src={Twitter} alt="Twitter" /><p>@xxmichas</p></div>
                                                </CSSTransition>
                                            </div>
                                        )
                                    }}
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
