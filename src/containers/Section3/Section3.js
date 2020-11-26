import React, { Fragment, useState } from 'react'
import styles from './Section3.module.css'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ProjectCard from '../ProjectCard/ProjectCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import NTDF from '../../assets/projects/NTDF.png'
import VR from '../../assets/projects/VR.png'
import Portfolio from '../../assets/projects/portfolio.png'
import SAU from '../../assets/projects/SAU.png'
import Bot from '../../assets/projects/bot.png'
import Server from '../../assets/projects/server.png'

const Section3 = (props) => {
    SwiperCore.use([Navigation]);

    const [page, setPage] = useState(0)
    let Cards = [
        <ProjectCard key={0} active={page === 0} background={SAU} centered={false} title="Steam Achievement Unlocker" description="JavaScript Desktop App" info="Steam Achievement Unlocker is a JavaScript desktop app built with electron framework. it allows idling in steam games and unlocking any achievements in them." buttons={[{name: "Github", func: null, url: "https://github.com/xxmichas/Steam-Achievement-Unlocker"}]} />,
        <ProjectCard key={1} active={page === 1} background={NTDF} centered={true} title="Nature TD: Forest" description="3D Unity Game" info="Nature TD: Forest is a 3D, First Person, Tower Defense Game Made In Unity. The Game Has many modular Scripts that make adding new features and levels very easy. There are currently 2 playable levels (Tutorial & Level 1) and 9 different towers. This is my first 3D Unity game. I feel like i can write any unity game now, with the experience i got from writing this one." buttons={[{name: "Github", url: "https://github.com/xxmichas/Tower-Defense-3D", func: null}]} />,
        <ProjectCard key={2} active={page === 2} background={VR} centered={true} title="Vertical Runner" description="2D Unity Game" info="Vertical Runner is a simple 2D infinite runner game. The pace speeds up over time to make it difficult and reflex-based. this game was one of my first C#/Unity projects. It helped me improve my programming skills and prepared me for bigger Unity projects" buttons={[{name: "Github", func: null, url: "https://github.com/xxmichas/Vertical-Runner"}]} />,
        <ProjectCard key={3} active={page === 3} background={Server} centered={false} title="Web Server in Node.js" description="HTTP Server With Authentication And Tokens" info="Express.js server with register and login functionalities using bcrypt for password hashing and JSON web token to keep users signed in between sessions" buttons={[{name: "Github", func: null, url: "https://github.com/xxmichas/http-login-with-tokens"}]} />,
        <ProjectCard key={4} active={page === 4} background={Portfolio} centered={true} title="Portfolio Website in React" description="My Portfolio Website Built With React" info="react Website that uses many animation libraries and PavelDoGreat's WebGL-Fluid-Simulation in order to provide the best experience for end user" buttons={[{name: "Github", func: null, url: "https://github.com/xxmichas/portfolio"}]} />,
        <ProjectCard key={5} active={page === 5} background={Bot} centered={true} title="Discord bot in Node.js" description="Discord Bot Using Discord.js Library" info="Utility Discord bot running on discord.js library. one of my first node.js projects" buttons={[{name: "Github", func: null, url: "https://github.com/xxmichas/boy-bot"}]} />
    ]

    return (
        <Fragment>
            <div className={styles.Projects}>
                {props.showTitle ? null : <div className={styles.MobileTitle}>My Projects</div>}
                <div className={styles.Pagination}>{(page + 1).toString()}/6</div>
                <div className={styles.Swiper}>
                    <Swiper style={{width: "100vw", pointerEvents: "all"}}
                        slidesPerView={2} breakpoints={{"@0.25": {slidesPerView: 1}, "@1.0": {slidesPerView: 2}}}
                        preventInteractionOnTransition
                        navigation loop centeredSlides
                        onSlideChange={(swiper) => {setPage(swiper.realIndex)}}>
                        {Cards.map((el, i) => (<SwiperSlide key={i}>{el}</SwiperSlide>))}
                    </Swiper>
                </div>
            </div>
            <SectionTitle show={props.showTitle} textLeft="My&nbsp;" textRight="Projects" />
        </Fragment>
    )
}

export default Section3