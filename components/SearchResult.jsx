import React, { Component } from 'react'
import Link from 'next/link'
import ReactDOM from 'react-dom';

class SearchResult extends Component {
	constructor() {
		super()
		this.getNutrition = this.getNutrition.bind(this)
		this.mouseHover = this.mouseHover.bind(this)
		this.state = {
			mouseState: "auto",
		}
	}

	render() {
		return (
			<Link href={`/nutrition?ndbno=${this.props.result.ndbno}`}>
				<tr style={{cursor:this.state.mouseState}} onMouseOver={this.mouseHover}>
					<td>{this.props.result.name}</td>
					<td>{this.props.result.group}</td>
				</tr>
			</Link>
		)
	}

	mouseHover() {
		// change the mouse style to infer this is a clickable object
		this.setState({
			mouseState: "pointer",
		})
	}

	getNutrition() {
		console.log("hit!")
		// todo: redirect to template page that fills in data from usda api, need to look into react's template/dyanmic url thingy
	}
}

export default SearchResult