import React, { useEffect, useRef } from 'react'
import styles from './SectionTitle.module.css'
import Anime from 'react-anime'

const SectionTitle = (props) => {
    const Title = useRef(null)
    useEffect(() => {
        if (props.show) {
            Title.current = (
                <h1 className={styles.title}>
                    <span className={styles.wrapper}>
                        <Anime opacity={[0.5, 1]} scaleX={[0, 1]} rotate={[0, 0.0001]} easing="easeInOutExpo" duration={700}>
                            <Anime delay={700} duration={600} easing="easeOutExpo" translateY={["0.75em", "0"]}>
                                <span className={styles.line}></span>
                            </Anime>
                        </Anime>
                        <span className={styles.letters}>
                            <Anime opacity={[0, 1]} translateX={["0.5em", "0"]} easing="easeOutExpo" duration={600} delay={1300}>{props.textLeft}</Anime>
                        </span>
                        {props.textMiddle ? (
                            <span className={styles.letters}>
                                <Anime opacity={[0, 1]} easing="easeOutExpo" duration={600} delay={1300}>{props.textMiddle}</Anime>
                            </span>) : null}
                        <span className={styles.letters}>
                            <Anime opacity={[0, 1]} translateX={["-0.5em", "0"]} easing="easeOutExpo" duration={600} delay={1300}>{props.textRight}</Anime>
                        </span>
                        <Anime opacity={[0.5, 1]} scaleX={[0, 1]} rotate={[0, 0.0001]} easing="easeInOutExpo" duration={700}>
                            <Anime delay={700} duration={600} easing="easeOutExpo" translateY={["-0.75em", "0"]}>
                                <span className={styles.line}></span>
                            </Anime>
                        </Anime>
                    </span>
                </h1>
            )
        }
        else {
            Title.current = null
        }
    }, [props.show, props.textLeft, props.textMiddle, props.textRight])

    return Title.current
}

export default SectionTitle
