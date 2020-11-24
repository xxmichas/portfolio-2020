import React, { Fragment } from 'react'
import ProjectCard from '../ProjectCard/ProjectCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Section3.module.css'

import NTDF from '../../assets/projects/NTDF.png'
import VR from '../../assets/projects/VR.png'
import Portfolio from '../../assets/projects/portfolio.png'

import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Section3 = (props) => {

    const config = {
        plugins: ['centered', 'infinite', 'arrows',
            {
                resolve: slidesToShowPlugin,
                options: {
                    numberOfSlides: 2,
                }
            },
        ]
    }

    return (
        <Fragment>
            {/* <div className={styles.Projects}> */}
            <Carousel {...config}>
                <ProjectCard background={NTDF} title="Nature TD: Forest" description="3D Unity Game" modal={null} />
                <ProjectCard background={VR} title="Vertical Runner" description="2D Unity Game" modal={null} />
                <ProjectCard background={null} title="Steam Achievement Unlocker" description="JavaScript Desktop App" modal={null} />
                <ProjectCard background={null} title="Discord bot in Node.js" description="Discord Bot Using Discord.js Library" modal={null} />
                <ProjectCard background={null} title="Web Server in Node.js" description="HTTP Server With Authentication And Tokens" modal={null} />
                <ProjectCard background={Portfolio} title="Portfolio Website in React" description="My Portfolio Website Built With React" modal={null} />
            </Carousel>
            {/* </div> */}
            <SectionTitle show={props.currentSection === 3 ? true : false} textLeft="My&nbsp;" textRight="Projects" />
        </Fragment>
    )
}

export default Section3