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
    const [showSocial, setShowSocial] = useState({email: false, github: false, discord: false, steam: false, twitter: false})

    const ShowSocialHandler = (abort) => {
        let Timeouts = []
        let Interval = 100
        if (abort === true) {
            Timeouts.forEach(el => {
                clearTimeout(el)
            });
            Timeouts.length = 0
            setShowSocial({email: false, github: false, discord: false, steam: false, twitter: false})
        }
        else{
            let e = setTimeout(() => {
                setShowSocial(prevState => ({...prevState, email: true}))
                Timeouts.splice(Timeouts.indexOf(e), 1)
            }, Interval * 1)
            Timeouts.push(e)
            let g = setTimeout(() => {
                setShowSocial(prevState => ({...prevState, github: true}))
                Timeouts.splice(Timeouts.indexOf(g), 1)
            }, Interval * 2)
            Timeouts.push(g)
            let d = setTimeout(() => {
                setShowSocial(prevState => ({...prevState, discord: true}))
                Timeouts.splice(Timeouts.indexOf(d), 1)
            }, Interval * 3)
            Timeouts.push(d)
            let s = setTimeout(() => {
                setShowSocial(prevState => ({...prevState, steam: true}))
                Timeouts.splice(Timeouts.indexOf(s), 1)
            }, Interval * 4)
            Timeouts.push(s)
            let t = setTimeout(() => {
                setShowSocial(prevState => ({...prevState, twitter: true}))
                Timeouts.splice(Timeouts.indexOf(t), 1)
            }, Interval * 5)
            Timeouts.push(t)
            console.log(Timeouts)
            setTimeout(() => {
                console.log(Timeouts)
            }, 330);
        }
    }

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
                        //console.log(state)
                        return (
                            <div className={styles.Overlay}>
                                <CSSTransition in={state === "entered"} classNames={{
                                    enterActive: styles.IconsEnterActive,
                                    enterDone: styles.IconsEnterDone,
                                    exitActive: styles.IconsExitActive,
                                    exitDone: styles.IconsExitDone
                                }} timeout={250} onEntered={() => {
                                    ShowSocialHandler(false)
                                }} onExit={() => {
                                    ShowSocialHandler(true)
                                }}>
                                    {state2 => {
                                        console.log(`state 2: ${state2}`)
                                        return (
                                            <div className={styles.Icons}>
                                                <CSSTransition in={showSocial.email} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterDone,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitDone
                                                }} timeout={300}>
                                                    <div className={styles.Socials}><img src={Gmail} alt="Email" /><p>xxmichas@gmail.com</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={showSocial.github} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterDone,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitDone
                                                }} timeout={300}>
                                                    <div className={styles.Socials}><img src={Github} alt="Github" /><p>/xxmichas</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={showSocial.discord} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterDone,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitDone
                                                }} timeout={300}>
                                                    <div className={styles.Socials}><img src={Discord} alt="Discord" /><p>xxmichas#0499</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={showSocial.steam} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterDone,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitDone
                                                }} timeout={300}>
                                                    <div className={styles.Socials}><img src={Steam} alt="Steam" /><p>xxmichas</p></div>
                                                </CSSTransition>
                                                <CSSTransition in={showSocial.twitter} classNames={{
                                                    enterActive: styles.SocialsEnterActive,
                                                    enterDone: styles.SocialsEnterDone,
                                                    exitActive: styles.SocialsExitActive,
                                                    exitDone: styles.SocialsExitDone
                                                }} timeout={300}>
                                                    <div className={styles.Socials}><img src={Twitter} alt="Twitter" /><p>@xxmichas</p></div>
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
