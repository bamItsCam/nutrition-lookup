import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'

import Navbar from '../components/Navbar'
import SearchResult from '../components/SearchResult'


class Food extends Component {
	constructor() {
		super()
		this.handleFoodSearch = this.handleFoodSearch.bind(this)
		this.generateSearchResults = this.generateSearchResults.bind(this)
		this.state = {
			user: null,
			searchResults: null,
		}
	}

	render() {
		return (
			<div>
				<Head>
		      <title>LOL API Test</title>
		      <link href="/static/main.css" rel="stylesheet" />
		    </Head>
		    <Navbar />
				<div className="field is-grouped">
				  <p className="control is-expanded">
				    <input className="input" type="text" ref="food" placeholder="Search for food!"/>
				  </p>
				  <p className="control">
				    <a className="button is-info" onClick={this.handleFoodSearch}>
				      Search
				    </a>
				  </p>
				</div>
				<table className="table is-hoverable">
					<thead>

					</thead>
					<tbody>
						{this.generateSearchResults()}
					</tbody>
				</table>	
			</div>
		);
	}

	handleFoodSearch () {
		let searchEndpoint="https://api.nal.usda.gov/ndb/search/"

		let params = {
			api_key: "yBOTv6MZUbeX72vydCGuqRwnxbH6uY9YyVVefbnS",
			q: ReactDOM.findDOMNode(this.refs.food).value.trim(),
			max: 50,
			ds: "Standard Reference",
			format: "json",
		}

		let paramString = ""
		Object.keys(params).forEach(key =>
			paramString = paramString + "&" + key + "=" + params[key]
		)

		console.log(paramString)

		let request = searchEndpoint + "?" + paramString

		console.log(request)

		axios.get(request).then( response => (
			this.setState({
				searchResults: (response.data.list != null ? response.data.list.item : null),
			}),
			console.log(response.data.list.item)
		))
	}

	generateSearchResults() {
		if(this.state.searchResults != null) {
			return this.state.searchResults.map(result => (
				<SearchResult
					key={result.ndbno}
					result={result}
				/>
			))
		}
		else {
			return <tr></tr>
		}
	}
}

export default Food