import React, { Component } from "react";
import PropTypes from "prop-types";
import { getTeam } from "../api";

export default class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
            team: null
        }
    }
    componentDidMount(){
        this.fetchTeam(this.props.teamId)
    }
    componentDidUpdate(prevProps){
        if (this.props.teamId !== prevProps.teamId){
            this.fetchTeam(this.props.teamId);
        }
    }
    fetchTeam(id){
        this.setState(() => ({
            team: null
        }))

        getTeam(id)
        .then((team) => this.setState(() => ({ team })));
    }
    render(){
        return this.props.children(this.state.team)
    }
}

Team.propTypes = {
    teamId: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
}