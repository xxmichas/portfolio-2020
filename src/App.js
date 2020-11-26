import React, { Component, Fragment } from 'react'
import Container from './containers/Container/Container'
import Section1 from './containers/Section1/Section1'
import Section2 from './containers/Section2/Section2'
import Section3 from './containers/Section3/Section3'

class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            currentSection: 1,
            sectionCount: 3,
            changeCooldown: false,
            transitionTime: 500,
            scrollNotification: false,
            firstScroll: true
        }
    }

    ChangeSection = (nextSection) => {
        if (!this.state.changeCooldown) {
            if (this.state.firstScroll) {
                this.setState({scrollNotification: false, firstScroll: false})
            }

            if (nextSection > this.state.sectionCount) {
                if (this.state.currentSection !== this.state.sectionCount) {
                    this.setState({changeCooldown: true, currentSection: this.state.sectionCount}, () => this.ChangeHandler())
                    console.log("Max reached")
                }
            }
            else if (nextSection < 1) {
                if (this.state.currentSection !== 1) {
                    this.setState({changeCooldown: true, currentSection: 1}, () => this.ChangeHandler())
                    console.log("Min reached")
                }
            }
            else {
                this.setState({changeCooldown: true, currentSection: nextSection}, () => this.ChangeHandler())
                console.log("Changing Section...")
            }
        }
    }

    ChangeHandler = () => {
        if (this.state.currentSection === 1) {
            setTimeout(() => {
                window.dispatchEvent(
                    new KeyboardEvent("keydown", {
                        key: "]",
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
        if (this.props.DesktopBrowser) {
            window.addEventListener("wheel", (e) => {
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
    }

    render() {
        return (
            <Fragment>
                <div style={{pointerEvents: "none", position: "relative", top: "0", transform: `translateY(${(this.state.currentSection - 1) * (-100)}vh)`, transition: `transform ${this.state.transitionTime}ms cubic-bezier(0.19, 1, 0.22, 1)`}}>
                    <Container><Section1 showTitle={this.props.DesktopBrowser ? this.state.currentSection === 1 : false} scrollNotification={this.state.scrollNotification} firstScroll={this.state.firstScroll} /></Container>
                    <Container><Section2 showTitle={this.props.DesktopBrowser ? this.state.currentSection === 2 : false} /></Container>
                    <Container><Section3 showTitle={this.props.DesktopBrowser ? this.state.currentSection === 3 : false} /></Container>
                </div>
            </Fragment>
        )
    }
}

export default App;
