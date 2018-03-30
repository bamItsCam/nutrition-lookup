import Link from 'next/link'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'

import GithubUser from '../components/GithubUser'

class Github extends Component {
	constructor() {
		super()
		this.handleGithubUserSubmit = this.handleGithubUserSubmit.bind(this)
		this.state = {
			user: null,
		}
	}

	render() {
		return (
			<div>
				<div className="field is-grouped">
				  <p className="control is-expanded">
				    <input className="input" type="text" ref="githubUsername" placeholder="Find a github user"/>
				  </p>
				  <p className="control">
				    <a className="button is-info" onClick={this.handleGithubUserSubmit}>
				      Search
				    </a>
				  </p>
				</div>
				<GithubUser user={this.state.user}/>
			</div>
		);
	}

	handleGithubUserSubmit () {
		const USERS_END="https://api.github.com/users/"

		let githubUsername = ReactDOM.findDOMNode(this.refs.githubUsername).value.trim();

		let request = USERS_END + githubUsername

		axios.get(request).then( response =>
			this.setState({
				user: response.data
			})
		)
	}
}

export default Github