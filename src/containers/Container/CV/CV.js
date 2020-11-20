import React from 'react'
import styles from './CV.module.css'

const CV = () => {
    return (
        <div className={styles.PanelsContainer}>
            <div className={styles.PanelGroup}>
                <div className={`${styles.Panel} ${styles.PanelThin}`}>
                    <table className={styles.Table}>
                        <thead>
                            <tr>
                                <th>Personal Info</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td>Michal Orkisz</td>
                            </tr>
                            <tr>
                                <td>Address:</td>
                                <td>Wheatley, Oxford OX33 1XJ</td>
                            </tr>
                            <tr>
                                <td>Phone:</td>
                                <td>07925525743</td>
                            </tr>
                            <tr>
                                <td>E-mail:</td>
                                <td>xxmichas@gmail.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={`${styles.Panel} ${styles.PanelThin}`}>
                    <table className={styles.Table}>
                        <thead>
                            <tr>
                                <th>Languages</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>English:</td>
                                <td>Fluent</td>
                            </tr>
                            <tr>
                                <td>Polish:</td>
                                <td>Native</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className={styles.Table}>
                        <thead>
                            <tr>
                                <th>Programming Languages</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>JavaScript</td>
                                <td>Client-Side + Node.js</td>
                            </tr>
                            <tr>
                                <td>HTML + CSS</td>
                                <td>HTML 5 + CSS 3</td>
                            </tr>
                            <tr>
                                <td>C#</td>
                                <td>mainly in Unity</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`${styles.Panel} ${styles.PanelWide}`}>

            </div>
        </div>
    )
}

export default CV
