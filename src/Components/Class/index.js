import React, { Component } from 'react'

class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showText: true,
            count: 0,
            changeColor: false
        }
    }

    handleClick = () => {
        console.log("Button clicked")
        this.setState({
            showText: !this.state.showText
        })
    }


    componentDidMount() {
        console.log('This is component did mount')

    }

    handleIncrement = () => {
        this.setState({
            ...this.state.count,
            count: this.state.count + 1
        })
    }


    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps, prevState)
        if (prevState && prevState.count !== this.state.count && this.state.count === 10) {
            this.setState({
                ...this.state.count,
                changeColor: !this.state.changeColor
            })
        }
    }


    componentWillUnmount() {
        console.log("component is unmounted")
    }
    render() {
        return (
            <>
                {this.state.showText ? <h4 style={{ color: this.state.changeColor ? "red" : "black" }}>Class component</h4> : null}
                <button onClick={this.handleClick}>Toggle</button><br />
                {this.state.count >= 10 ? <h4> Count reached 10</h4> : null}
                {this.state.count} <br />
                <button onClick={this.handleIncrement}>Increment</button>
            </>
        )
    }
}

export default index