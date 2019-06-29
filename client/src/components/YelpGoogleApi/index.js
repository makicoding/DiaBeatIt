import React, { Component, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap/';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import './yelpGoogleApi.css';
// import {ButtonContainer} from "./ButtonContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { Container, Row, Col } from "../Grid";
import Br from "../CustomLineBreak";
import Br2 from "../CustomLineBreak2";
import { Link, withRouter } from "react-router-dom";

var storetype = 'healthmarkets';
function yelpApiCall(yelp_params, callback) {
	const axios = require('axios');
	axios
		.get(
			`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search?&location=` +
				yelp_params,
			{
				headers: {
					Authorization: `Bearer ` + process.env.REACT_APP_YELP_KEY
				},
				params: {
					categories: storetype
				}
			}
		)
		.then((res) => {
			callback(res.data);
			return res.data.businesses[0].id;
		})
		.catch((err) => {
			console.log(err);
			//    alert("please enter a city name or zip code")
		});
}

class Map extends Component {
	state = {
		stores: [],
		city: 'bronx',
		handleMarkerToggleWindowOpen: 1,
		value: 'healthmarkets'
	};

	componentDidMount() {
		// once the component mounts, i make the call to the api
		yelpApiCall((yelp) => {
			console.log(yelp.businesses[0].coordinates);
			this.setState({
				stores: yelp.businesses,
				city: this.state.yelp_params
			});
		});
	}

	yelpStoreTypes = (event) => {
		const value = event.target.value;
		storetype = value;
		this.setState({ value: value });
	};

	handleInputChange = (event) => {
		event.cancelable = false;
		event.persist();
		event.preventDefault();
		this.setState({
			city: event.target.value
		});
	};
	handleFormSubmit = (event) => {
		// Preventing the default behavior of the form submit (which is to refresh the page)
		event.preventDefault();
		yelpApiCall(this.state.city, (yelp) => {
			// Updating the input's state
			// console.log(yelp.businesses);

			this.setState({
				stores: yelp.businesses
			});
		});
	};

	static defaultProps = {
		googleMapURL:
			'https://maps.googleapis.com/maps/api/js?key=' +
			process.env.REACT_APP_GOOGLE_KEY +
			'&v=3.exp&libraries=geometry,drawing,places'
	};

	constructor(props) {
		super(props);
		yelpApiCall((yelp) => {
			this.state = {
				stores: yelp.businesses,
				city: this.state.yelp_params
			};
		});
	}

	handleMarkerToggleWindowOpen = (markerId) => {
		this.setState({
			handleMarkerToggleWindowOpen: markerId
		});
	};

	handleMarkerToggleWindowClose = () => {
		this.setState({
			handleMarkerToggleWindowClose: ''
		});
	};

	CMap = withScriptjs(
		withGoogleMap((props) => (
			<GoogleMap
				defaultZoom={10}
				defaultCenter={{ lat: 40.7799404643263, lng: -73.980282552649 }}
				defaultOptions={{ disableDefaultUI: true }}
			>
				{props.children}
			</GoogleMap>
		))
	);
	render() {
		this.state.stores.map((restaurant, i) => 'do');
		return (
			<div>
			{/* <div className="py-5"> */}
				{/* <div className="container d-flex justify-content-center">
					<div className="d-flex justify-content-center">
						<div className="row mt-5">
							<div className="col-sm-12"> */}
				<Container>
					<Row>
						<Col size="col-md-6 offset-md-3">
									<p className="mainContentTextBlack">Please enter a Location:</p>
									<input type="text" className="form-control" id="calorieEntryPage-ingredientGrams" onChange={this.handleInputChange}	name="name" placeholder="e.g. Manhattan or 10010" autoComplete="off"></input>    
						</Col>
					</Row>

					<Br />
					<Br />

					<Row>
						<Col size="col-md-6 offset-md-3">
							<p className="mainContentTextBlack">Please choose a store type:</p>
							<select className="chosen-select dropDownMenu1" id="calorieEntryPage-mealCategory">
								<option value="0"></option>
								<option value="farmersmarket" onClick={this.yelpStoreTypes}>Farmers market</option>
								<option value="markets" onClick={this.yelpStoreTypes}>Fruit and vegetable market</option>
								{/* <option value="organic_stores" onClick={this.onClickHandler}>Organic store</option> */}
								<option value="organic_stores" onClick={this.yelpStoreTypes}>Organic store</option>
								<option value="cardioclasses" onClick={this.yelpStoreTypes}>Cardio class</option>
								<option value="healthtrainers" onClick={this.yelpStoreTypes}>Health trainer</option>
								<option value="yoga" onClick={this.yelpStoreTypes}>Yoga studio</option>
							</select>
						</Col>
					</Row> 

					{/* <form>
						<MDBDropdown>
							<MDBDropdownToggle caret color="primary">
								Choose a Store Type
							</MDBDropdownToggle>
							<MDBDropdownMenu basic>
								<MDBDropdownItem value="farmersmarket" onClick={this.yelpStoreTypes}>
									Farmers Market
								</MDBDropdownItem>
								<MDBDropdownItem value="markets" onClick={this.yelpStoreTypes}>
									Fruit and Veggie Markets
								</MDBDropdownItem>{' '}
								<MDBDropdownItem value="organic_stores" onClick={this.onClickHandler}>
									Organic Stores
								</MDBDropdownItem>
								<MDBDropdownItem value="cardioclasses" onClick={this.yelpStoreTypes}>
									Cardio Classes
								</MDBDropdownItem>
								<MDBDropdownItem value="healthtrainers" onClick={this.yelpStoreTypes}>
									Health Trainers
								</MDBDropdownItem>
								<MDBDropdownItem value="yoga" onClick={this.yelpStoreTypes}>
									Yoga
								</MDBDropdownItem>
							</MDBDropdownMenu>
						</MDBDropdown>
					</form> */}

					<Br />
					<Br />

					<Row>
						<Col size="col-md-6 offset-md-3">
							<button className="button1" onClick={this.handleFormSubmit}>
								Search
							</button>
						</Col>
					</Row>	

					<Br />
					<Br />							

					{/* Google Map  */}
					{/* <Fragment> */}
						<div className="mapContainer">
							<this.CMap
								googleMapURL={this.props.googleMapURL}
								loadingElement={<div style={{ height: `100%` }} />}
								containerElement={<div style={{ width: '100%', height: '800px' }} />}
								mapElement={<div style={{ height: `100%` }} />}
								center={{ lat: 25.03, lng: 121.6 }}
							>
								{this.state.stores.slice(0, 5).map((restaurant, i) => (
									<Marker
										key={i}
										position={{
											lat: restaurant.coordinates.latitude,
											lng: restaurant.coordinates.longitude
										}}
										onClick={() => this.handleMarkerToggleWindowOpen(i)}
									>
										{this.state.handleMarkerToggleWindowOpen === i && (
											<InfoWindow 
												onCloseClick={() => this.handleMarkerToggleWindowClose(i)}
												position={{
													lat: restaurant.coordinates.latitude,
													lng: restaurant.coordinates.longitude
												}}
											>
												<div className="mapCard">
													<img className="mapCardImage"
														// variant="top"
														src={restaurant.image_url}
														// style={{ height: '100px' }}
													/>
													<Br />
													<p className="mainContentTextBlack">Rating: {restaurant.rating}{' '}</p>
													<p className="mainContentTextBlack">Phone number: {restaurant.phone}{' '}</p>

													{/* <h3>
														rating: {restaurant.rating}{' '}
														<Card.Img
															variant="top"
															src="http://pluspng.com/img-png/yellow-stars-png-hd-golden-star-rotate-3d-render-footage-in-4k-chroma-key-green-screen-852.jpg"
															style={{ width: '25%' }}
														/>
													</h3>
													<h3>
														phone number: {restaurant.phone}{' '}
														<Card.Img
															variant="top"
															src="http://pluspng.com/img-png/yellow-stars-png-hd-golden-star-rotate-3d-render-footage-in-4k-chroma-key-green-screen-852.jpg"
															style={{ width: '25%' }}
														/>
													</h3> */}
													
													<a 
														// variant="warning"
														// rel="noreferrer noopener"
														href={restaurant.url}
														target="_blank"
													>
														<button className="mapButton">
															{restaurant.name}
														</button>
													</a>

												</div>
											</InfoWindow>
										)}
									</Marker>
								))}
							</this.CMap>
						</div>
					{/* </Fragment> */}


				</Container>
							{/* </div>
						</div>
					</div>
				</div> */}
			</div>
		);
	}
}

export default Map;