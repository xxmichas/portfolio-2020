import React, { Component, Fragment } from 'react'
import Container from './containers/Container/Container'

class App extends Component {
    state = {
        currentSection: 1,
        sectionCount: 4,
        changeCooldown: false,
        transitionTime: 500
    }

    ChangeSection = (nextSection) => {
        if (!this.state.changeCooldown) {
            if (nextSection > this.state.sectionCount) {
                this.setState({changeCooldown: true, currentSection: this.state.sectionCount})
                console.log("Max reached")
            }
            else if (nextSection < 1) {
                this.setState({changeCooldown: true, currentSection: 1})
                console.log("Min reached")
            }
            else {
                this.setState({changeCooldown: true, currentSection: nextSection})
                console.log("Changing Section...")
            }
            setTimeout(() => {
                this.setState({changeCooldown: false})
            }, this.state.transitionTime);
        }
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
    }

    render() {
        return (
            <Fragment>
                <div style={{position: "relative", top: `${(this.state.currentSection - 1) * (-100)}vh`, transition: `top ${this.state.transitionTime}ms cubic-bezier(0, 0, 0, 1)`}}>
                    <Container>111</Container>
                    <Container>222</Container>
                    <Container>333</Container>
                    <Container>444</Container>
                </div>
                <button style={{position: "fixed", top: "0", right: "60px"}} onClick={() => this.ChangeSection(4)}>last</button>
                <button style={{position: "fixed", top: "0", right: "30px"}} onClick={() => this.ChangeSection(this.state.currentSection - 1)}>-1</button>
                <button style={{position: "fixed", top: "0", right: "0"}} onClick={() => this.ChangeSection(this.state.currentSection + 1)}>+1</button>
            </Fragment>
        )
    }
}

export default App;
