import React, { Component } from 'react'
import Head from 'next/head'
import axios from 'axios'

import Navbar from '../components/Navbar'

class Nutrition extends Component {
	constructor() {
		super()
		this.state = {
			name: null,
			measure: null,
			nutrition: {
				cals: null,
				proteins: null,
				fats: null,
				carbs: null,
			},
		}
	}

	componentDidMount() {
  	// make sure props exist, otherwise we don't know the query to use
  	if (this.props) {
    	let searchEndpoint="https://api.nal.usda.gov/ndb/nutrients/"
			let params = {
				api_key: "yBOTv6MZUbeX72vydCGuqRwnxbH6uY9YyVVefbnS",
				ndbno: this.props.url.query.ndbno,
				format: "json",
				// to get a list of nutrients, browse to
				//https://api.nal.usda.gov/ndb/list?format=json&lt=n&max=300&api_key=yBOTv6MZUbeX72vydCGuqRwnxbH6uY9YyVVefbnS
				nutrients: ["203","204","205","208"],
			}

			let paramString = ""
			Object.keys(params).forEach(key => {
				if( typeof params[key] == "object") {
					// step through and create a param for each value in the object (used for the nutrients field)
					Object.keys(params[key]).forEach(nid => {
						paramString = paramString + "&" + key + "=" + params[key][nid]
					})
				}
				else {
					paramString = paramString + "&" + key + "=" + params[key]
				}
			})

			let request = searchEndpoint + "?" + paramString

			axios.get(request).then( response => (
				this.setFoodState(response.data.report.foods != null ? response.data.report.foods[0] : null)		
			))
		}
  }

  setFoodState(food) {
  	let nutrients = new Map()
  	Object.keys(food.nutrients).forEach(key =>
  		nutrients.set(food.nutrients[key].nutrient.toLowerCase(),food.nutrients[key].value + " " + food.nutrients[key].unit)
  	)
  	console.log(food)
  	this.setState({
			name: food.name,
			measure: food.measure,
			nutrition: {
				proteins: nutrients.get("protein"),
				carbs: nutrients.get("carbohydrate, by difference"),
				fats: nutrients.get("total lipid (fat)"),
				cals: nutrients.get("energy"),
			}
  	})
  }

	render() {
		return (
			<div>
				<Head>
		      <title>LOL API Test</title>
		      <link href="/static/main.css" rel="stylesheet" />
		    </Head>
				<Navbar />
				{this.renderNutrition()}
			</div>
		)
	}

	renderNutrition() {
		if(this.state.name != null) {
			return (
				<div className="tile is-ancestor">
					<div className="tile is-vertical is-parent is-6">
						<div className="tile is-child box">
							<p class="title">{this.state.name}</p>
						</div>
						<div className="tile is-child box">
							Serving Size: {this.state.measure}
						</div>
					</div>
					<div className="tile is-vertical is-parent is-6">
						<div className="tile is-child box">
							<p className="subtitle">Calories</p>
							<p>{this.state.nutrition.cals}</p>
						</div>
						<div className="tile is-child box">
							<p className="subtitle">Proteins</p>
							<p>{this.state.nutrition.proteins}</p>
						</div>
						<div className="tile is-child box">
							<p className="subtitle">Carbs</p>
							<p>{this.state.nutrition.carbs}</p>
						</div>
						<div className="tile is-child box">
							<p className="subtitle">Fats</p>
							<p>{this.state.nutrition.fats}</p>
						</div>
					</div>
				</div>
			)
		}
		else {
			return (
				<div>
				</div>
			)
		}
	}
}

export default Nutrition