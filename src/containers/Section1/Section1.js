import React, { Fragment } from 'react'
import styles from './Section1.module.css'
import ProfileCard from '../ProfileCard/ProfileCard'
import SectionTitle from '../SectionTitle/SectionTitle'

const Section1 = (props) => {
    let ScrollNotificationStyles = [styles.ScrollNotification]
    if (props.scrollNotification) {
        ScrollNotificationStyles.push(styles.ScrollNotificationActive)
    }

    return (
        <Fragment>
            <ProfileCard />
            {props.firstScroll ? <div className={ScrollNotificationStyles.join(" ")}>use mouse wheel to go to the next section</div> : null}
            <SectionTitle show={props.showTitle} textMiddle="xxmichas.com" />
        </Fragment>
    )
}

export default Section1