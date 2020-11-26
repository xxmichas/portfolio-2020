import React, { Fragment } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import CV from '../CV/CV'

const Section2 = (props) => {
    return (
        <Fragment>
            <CV show={props.showTitle} />
            <SectionTitle show={props.showTitle} textLeft="My&nbsp;" textRight="CV" />
       </Fragment>
    )
}

export default Section2