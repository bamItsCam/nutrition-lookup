import Link from 'next/link'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'

class GithubUser extends Component {
	constructor() {
		super()
	}

	render() {
		console.log(this.props.user)
		if(this.props.user == null) {
			return (
				<div>
				</div>
			);
		}
		else {
			return (
				<div className="tile is-ancestor">
					<div className="tile is-1">
						<figure className="imagg">
							<img src={this.props.user.avatar_url}/>
						</figure>
					</div>
					<div className="tile is-2">
						{this.props.user.login}
					</div>
					<div className="tile is-3">
						{this.props.user.bio}
					</div>
					<div className="tile is-2">
						Member since {this.memberDate()}
					</div>
				</div>
			);
		}
	}

	memberDate() {
		let date = new Date(this.props.user.created_at)
		let day = date.getDate()+1
		let month = date.getMonth()+1
		let year = date.getFullYear()
		return month + "/" + day + "/" + year
	}
}

export default GithubUser