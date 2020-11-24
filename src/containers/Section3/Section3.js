import React, { Fragment } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Section3.module.css'

import NTDF from '../../assets/projects/NTDF.png'
import VR from '../../assets/projects/VR.png'
import Portfolio from '../../assets/projects/portfolio.png'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Section3 = (props) => {

    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

    return (
        <Fragment>
            <div className={styles.Projects}>
                <Swiper style={{width: "86vw", pointerEvents: "all"}}
                    slidesPerView={2}
                    navigation loop centeredSlides
                    onSlideChange={() => console.log('slide change')}>
                    <SwiperSlide><ProjectCard background={NTDF} title="Nature TD: Forest" description="3D Unity Game" modal={null} /></SwiperSlide>
                    <SwiperSlide><ProjectCard background={VR} title="Vertical Runner" description="2D Unity Game" modal={null} /></SwiperSlide>
                    <SwiperSlide><ProjectCard background={null} title="Steam Achievement Unlocker" description="JavaScript Desktop App" modal={null} /></SwiperSlide>
                    <SwiperSlide><ProjectCard background={null} title="Discord bot in Node.js" description="Discord Bot Using Discord.js Library" modal={null} /></SwiperSlide>
                    <SwiperSlide><ProjectCard background={null} title="Web Server in Node.js" description="HTTP Server With Authentication And Tokens" modal={null} /></SwiperSlide>
                    <SwiperSlide><ProjectCard background={Portfolio} title="Portfolio Website in React" description="My Portfolio Website Built With React" modal={null} /></SwiperSlide>
                </Swiper>
            </div>
            <SectionTitle show={props.currentSection === 3 ? true : false} textLeft="My&nbsp;" textRight="Projects" />
        </Fragment>
    )
}

export default Section3