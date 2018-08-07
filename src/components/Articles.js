import React, { Component } from "react";
import { Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import { getTeamsArticles } from "../api";
import Article from "./Article";
import Loading from "./Loading";

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
        ? <Loading text="Loading"/>
        : <div className="container two-column">
            <Sidebar 
                loading={loading}
                title="Articles"
                list={teamArticles}
                {...this.props}
            />

            <Route path={`${url}/:articleId`} render={({ match }) => (
                <Article articleId={match.params.articleId} teamId={teamId}>
                    {(article) => !article ? <h1>LOADING</h1> : (
                        <div className="panel">
                            <article className="article" key={article.id}>
                                <h1 className="header">{article.title}</h1>
                                <p>{article.body}</p>
                            </article>
                        </div>
                    )}
                </Article>
            )}/>
        </div>
    }
}