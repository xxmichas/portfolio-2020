import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './CV.module.css'

const CV = (props) => {

    const [Focused, setFocused] = useState(false)
    const THeadingConfig = {in: Focused, classNames: {
        enterActive: styles.THeadingEnterActive,
        enterDone: styles.THeadingEnterDone,
        exitActive: styles.THeadingExitActive,
        exitDone: styles.THeadingExitDone}, timeout: {enter: 800, exit: 500}
    }
    
    useEffect(() => {
        if (props.currentSection === 2) {
            if (!Focused) {
                setFocused(true)
            }
        }
        else {
            setFocused(false)
        }
    }, [Focused, props.currentSection])
    return (
        <div className={styles.PanelsContainer}>
            <div className={styles.PanelGroup}>
                <div className={`${styles.Panel} ${styles.PanelThin}`}>
                    <table className={styles.Table}>
                        <thead>
                            <tr>
                                <CSSTransition {...THeadingConfig}>
                                    <th>Personal Info</th>
                                </CSSTransition>
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
                                <CSSTransition {...THeadingConfig}>
                                    <th>Languages</th>
                                </CSSTransition>
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
                                <CSSTransition {...THeadingConfig}>
                                    <th>Programming Languages</th>
                                </CSSTransition>
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
                <table className={styles.Table}>
                    <thead>
                        <tr>
                            <CSSTransition {...THeadingConfig}>
                                <th>Education</th>
                            </CSSTransition>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2016 – 2019</td>
                            <td>III Liceum Ogólnokształcące im. Cypriana Kamila Norwida in Kielce (high school)</td>
                        </tr>
                        <tr>
                            <td>2019 – 2020</td>
                            <td>Jan Kochanowski University in Kielce - Computer Science</td>
                        </tr>
                    </tbody>
                </table>
                <table className={styles.Table}>
                    <thead>
                        <tr>
                            <CSSTransition {...THeadingConfig}>
                                <th>Experience</th>
                            </CSSTransition>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>06/2018 - 08/2018</td>
                            <td>Warehouse operative at DPD</td>
                        </tr>
                        <tr>
                            <td>06/2019 - 09/2019</td>
                            <td>Waiting staff in a cafe at the Alnwick Garden</td>
                        </tr>
                        <tr>
                            <td>06/2019 - 09/2019</td>
                            <td>Waiter in The Treehouse Restaurant at the Alnwick Garden</td>
                        </tr>
                        <tr>
                            <td>09/2020 - current</td>
                            <td>Busser in Quod Restaurant</td>
                        </tr>
                    </tbody>
                </table>
                <table className={styles.Table}>
                    <thead>
                        <tr>
                            <CSSTransition {...THeadingConfig}>
                                <th>Additional qualifications</th>
                            </CSSTransition>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className={styles.TBodyQuals}>
                        <tr>
                            <td>Great Knowledge of React library and completion of multiple react & redux courses</td>
                        </tr>
                        <tr>
                            <td>Created Windows programs using Electron Framework for JavaScript</td>
                        </tr>
                        <tr>
                            <td>Created 2D/3D games for Windows using Unity Engine</td>
                        </tr>
                        <tr>
                            <td>Advanced Knowledge of Client-Side JavaScript, Node.js and Node Package Manager</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CV
