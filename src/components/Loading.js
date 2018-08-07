import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Loading extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: this.props.text
        }
    }
    componentDidMount(){
        const stopper = this.props.text + "...";
        this.interval = setInterval(() => {
            this.state.text === stopper
            ? this.setState(() => ({ text: this.props.text }))
            : this.setState(({ text }) => ({ text: text + "." }))
        }, 300);
    }
    componentWillUnmount(){
        window.clearInterval(this.interval);
    }
    render(){
        return (
            <div className="container">
                <p className="text-center">
                    {this.state.text}
                </p>
            </div>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string
}

Loading.defaultProps = {
    text: 'Loading'
}