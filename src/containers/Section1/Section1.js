import React, { Fragment } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Section1.module.css'

const Section1 = (props) => {
    let ScrollNotificationStyles = [styles.ScrollNotification]
    if (props.scrollNotification) {
        ScrollNotificationStyles.push(styles.ScrollNotificationActive)
    }

    return (
        <Fragment>
            <ProfileCard />
            {props.firstScroll ? <div className={ScrollNotificationStyles.join(" ")}>use mouse wheel to go to the next section</div> : null}
            <SectionTitle show={props.currentSection === 1 ? true : false} textMiddle="xxmichas.com" />
        </Fragment>
    )
}

export default Section1