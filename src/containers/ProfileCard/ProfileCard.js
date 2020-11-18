import React, { Fragment } from 'react'
import styles from './ProfileCard.module.css'
import profilePicture from '../../assets/snoo.png'

const ProfileCard = () => {
    return (
        <Fragment>
            <div className={styles.Card}>
                <div className={styles.BackgroundContainer}>
                    <div className={styles.Background} />
                </div>
                <img className={styles.Picture} src={profilePicture} alt="Profile" />
                <h2 className={styles.TextShadow}>Michal Orkisz</h2>
            </div>
        </Fragment>
    )
}

export default ProfileCard
