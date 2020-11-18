import React, { Component } from 'react'
import styles from './Fluid.module.css'

class Fluid extends Component {
    componentDidMount = () => {
        const script = document.createElement("script");
        script.src = process.env.PUBLIC_URL + '/script.js'
        script.async = true;
        document.body.appendChild(script);
    }
    render() {
        return (
            <canvas className={styles.Canvas} />
        )
    }
}

export default Fluid
