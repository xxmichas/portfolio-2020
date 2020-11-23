import React, { Fragment } from 'react'
import SectionTitle from '../SectionTitle/SectionTitle'
import CV from '../CV/CV'

const Section2 = (props) => {

    return (
        <Fragment>
            <CV currentSection={props.currentSection} />
            <SectionTitle show={props.currentSection === 2 ? true : false} textLeft="My&nbsp;" textRight="CV" />
       </Fragment>
    )
}

export default Section2