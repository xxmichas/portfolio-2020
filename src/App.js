import React, { Component, Fragment } from 'react'
import Container from './containers/Container/Container'
import ProfileCard from './containers/ProfileCard/ProfileCard'
import Section1 from './containers/Section1/Section1'
import Section2 from './containers/Section2/Section2'

class App extends Component {
    state = {
        currentSection: 1,
        sectionCount: 4,
        changeCooldown: false,
        transitionTime: 500,
        scrollNotification: false,
        firstScroll: true
    }

    ChangeSection = (nextSection) => {
        if (!this.state.changeCooldown) {
            if (this.state.firstScroll) {
                this.setState({scrollNotification: false, firstScroll: false})
            }

            let direction = null
            if (nextSection > this.state.currentSection) {
                direction = "["
            }
            else if (nextSection < this.state.currentSection) {
                direction = "]"
            }

            if (nextSection > this.state.sectionCount) {
                if (this.state.currentSection !== this.state.sectionCount) {
                    this.setState({changeCooldown: true, currentSection: this.state.sectionCount}, () => this.ChangeHandler(direction))
                    console.log("Max reached")
                }
            }
            else if (nextSection < 1) {
                if (this.state.currentSection !== 1) {
                    this.setState({changeCooldown: true, currentSection: 1}, () => this.ChangeHandler(direction))
                    console.log("Min reached")
                }
            }
            else {
                this.setState({changeCooldown: true, currentSection: nextSection}, () => this.ChangeHandler(direction))
                console.log("Changing Section...")
            }
        }
    }
    //zmienic zeby bylo tylko na pierwsza karte
    ChangeHandler = (direction) => {
        if (direction != null) {
            setTimeout(() => {
                window.dispatchEvent(
                    new KeyboardEvent("keydown", {
                        key: direction,
                        shiftKey: true
                    })
                )
            }, (this.state.transitionTime - 175));
        }
        setTimeout(() => {
            this.setState({changeCooldown: false})
        }, this.state.transitionTime);
    }

    componentDidMount = () => {
        window.addEventListener("wheel", (e) => {
            //console.log(e)
            if (e.deltaY > 0) {
                this.ChangeSection(this.state.currentSection + 1)
            }
            else if (e.deltaY < 0) {
                this.ChangeSection(this.state.currentSection - 1)
            }
        })

        setTimeout(() => {
            if (this.state.firstScroll) {
                this.setState({scrollNotification: true})
            }
        }, 2000);
    }

    render() {
        return (
            <Fragment>
                <div style={{pointerEvents: "none", position: "relative", top: `${(this.state.currentSection - 1) * (-100)}vh`, transition: `top ${this.state.transitionTime}ms cubic-bezier(0.19, 1, 0.22, 1)`}}>
                    <Container><Section1 scrollNotification={this.state.scrollNotification} firstScroll={this.state.firstScroll} /></Container>
                    <Container><Section2 currentSection={this.state.currentSection} /></Container>
                    <Container><ProfileCard /></Container>
                    <Container><ProfileCard /></Container>
                </div>
            </Fragment>
        )
    }
}

export default App;
