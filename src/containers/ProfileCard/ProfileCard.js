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
    const [OverlayActive, setOverlayActive] = useState(false)
    const [SocialsActive, setSocialsActive] = useState(false)
    const [SocialsExpanding, setSocialsExpanding] = useState(false)
    const [SocialsColapsing, setSocialsColapsing] = useState(false)

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

    const SocialsStateHandler = (state) => {
        if (SocialsExpanding) {
            return true
        }
        else {
            if (SocialsColapsing) {
                return false
            }
            else {
                if (Hovered) {
                    if (state === "entered") {
                        return true
                    }
                    else {
                        return false
                    }
                }
                else {
                    return false
                }
            }
        }
    }

    const SocialsConfig = {
        classNames: {
            enterActive: styles.SocialsEnterActive,
            enterDone: styles.SocialsEnterActive,
            exitActive: styles.SocialsExitActive,
            exitDone: styles.SocialsExitActive
        }
    }

    return (
        <Fragment>
            <div className={styles.Card} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <CSSTransition in={Hovered || OverlayActive} classNames={{
                    enter: styles.BackgroundContainerEnter,
                    enterDone: styles.BackgroundContainerEnterDone,
                    exit: styles.BackgroundContainerExit,
                    exitDone: styles.BackgroundContainerExitDone
                }} timeout={300}>
                    <div className={styles.BackgroundContainer}>
                        <div className={styles.Background} />
                    </div>
                </CSSTransition>
                <CSSTransition in={OverlayActive} classNames={{
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
                <span className={styles.TextShadow} style={{fontSize: "1.25em", marginBlockEnd: "1em", userSelect: "none"}}>- Aspiring Web Developer -</span>
                <p className={styles.Description}>Hi, My name is Michael. I am an Aspiring Web Developer, mainly working in JavaScript, HTML, CSS & Node.js</p>
                <p className={styles.Description}>I like C# and making games in unity (but as a side hobby)</p>
                <CSSTransition in={Hovered || OverlayActive} classNames={{
                    enter: styles.OverlayEnter,
                    enterDone: styles.OverlayEnterDone,
                    exit: styles.OverlayExit,
                    exitDone: styles.OverlayExitDone
                }} timeout={300}>
                    {state => {
                        return (
                            <div className={styles.Overlay}>
                                <CSSTransition in={Hovered ? (state === "entered" ? true : false) : SocialsActive} classNames={{
                                    enterActive: styles.IconsEnterActive,
                                    enterDone: styles.IconsEnterDone,
                                    exitActive: styles.IconsExitActive,
                                    exitDone: styles.IconsExitDone
                                }} timeout={250}
                                onEnter={() => setOverlayActive(true)} onExited={() => {setOverlayActive(false)}}>
                                    {state2 => {
                                        return (
                                            <div className={styles.Icons}>
                                                <CSSTransition in={SocialsStateHandler(state2)} {...SocialsConfig} timeout={{enter: 400, exit: 500}} 
                                                    onEnter={() => {setSocialsActive(true); setSocialsExpanding(true);}} 
                                                    onExited={() => {setSocialsActive(false); setSocialsColapsing(false)}} onExit={() => setSocialsColapsing(true)}>
                                                    <div className={styles.Socials} onClick={() => CopyToClipboard("xxmichas@gmail.com")}><img src={Gmail} alt="Email" /><p>xxmichas@gmail.com</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={SocialsStateHandler(state2)} {...SocialsConfig} timeout={{enter: 500, exit: 500}}>
                                                    <div className={styles.Socials} onClick={() => window.open("https://github.com/xxmichas")}><img src={Github} alt="Github" /><p>/xxmichas</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={SocialsStateHandler(state2)} {...SocialsConfig} timeout={{enter: 600, exit: 500}}>
                                                    <div className={styles.Socials} onClick={() => CopyToClipboard("xxmichas#0499")}><img src={Discord} alt="Discord" /><p>xxmichas#0499</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={SocialsStateHandler(state2)} {...SocialsConfig} timeout={{enter: 700, exit: 500}}>
                                                    <div className={styles.Socials} onClick={() => window.open("https://steamcommunity.com/id/xxmichas")}><img src={Steam} alt="Steam" /><p>xxmichas</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={SocialsStateHandler(state2)} {...SocialsConfig} timeout={{enter: 800, exit: 500}} onEntered={() => {setSocialsExpanding(false);}}>
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
