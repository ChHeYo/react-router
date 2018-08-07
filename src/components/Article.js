import React, { Component } from "react";
import PropTypes from "prop-types";
import { getArticle } from "../api";

export default class Article extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            article: null
        }
    }
    componentDidMount() {
        const { teamId, articleId } = this.props;
        this.getArticle(teamId, articleId)
    }
    componentDidUpdate(prevProps){
        if (this.props.articleId !== prevProps.articleId){
            this.getArticle(this.props.teamId, this.props.articleId);
        }
    }
    getArticle(teamId, articleId){
        this.setState(() => ({ article: null }))

        getArticle(teamId, articleId)
        .then((article) => this.setState(() => ({
            article
        })))
    }
    render(){
        return this.props.children(this.state.article)
    }
}

Article.propTypes = {
    teamId: PropTypes.string.isRequired,
    articleId: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired
}