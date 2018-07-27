import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getTeamsArticles } from "../api";

export default class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            teamArticles: []
        }
    }
    componentDidMount(){
        getTeamsArticles(this.props.match.params.teamId)
        .then((teamArticles) => {
            this.setState(() => ({
                loading: false,
                teamArticles: teamArticles.map((article) => article.title)
            }))
        })
    }
    render() {
        const { loading, teamArticles } = this.state;
        const { params, url } = this.props.match;
        const { teamId } = params;

        return loading === true
        ? <h1>LOADING</h1>
        : <div className="container two-column">
            <Sidebar 
                loading={loading}
                title="Articles"
                list={teamArticles}
                {...this.props}
            />
        </div>
    }
}