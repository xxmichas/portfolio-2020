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
                <table className={styles.Table}>
                    <thead>
                        <tr>
                            <th>Education</th>
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
                            <th>Experience</th>
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
                            <th>Additional qualifications</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className={styles.TBodyQuals}>
                        <tr>
                            <td>Warehouse operative at DPD</td>
                        </tr>
                        <tr>
                            <td>Waiting staff in a cafe at the Alnwick Garden</td>
                        </tr>
                        <tr>
                            <td>Waiter in The Treehouse Restaurant at the Alnwick Garden</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CV
