import React, { Fragment, useRef } from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import SectionTitle from '../SectionTitle/SectionTitle'
import styles from './Section1.module.css'

const Section1 = (props) => {
    let ScrollNotificationStyles = [styles.ScrollNotification]
    if (props.scrollNotification) {
        ScrollNotificationStyles.push(styles.ScrollNotificationActive)
    }
    
    const Title = useRef(<SectionTitle textLeft="Welcome to" textRight="my portfolio" textMiddle="&nbsp;xD&nbsp;" />)

    return (
        <Fragment>
            <ProfileCard />
            {props.firstScroll ? <div className={ScrollNotificationStyles.join(" ")}>use mouse wheel to go to the next section</div> : null}
            {Title.current}
        </Fragment>
    )
}

export default Section1