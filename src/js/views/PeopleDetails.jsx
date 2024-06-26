import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleDetails = () => {
	const { store, actions } = useContext(Context);
	const { id }= useParams();

	useEffect(() => {
		actions.getPeopleDetails(id)
	}, []);
	
	return (
		<div className="jumbotron">
			<h1 className="display-4">Name: {store.peopleDetails.properties.name}</h1>
			<h1 className="display-4">Gender: {store.peopleDetails.properties.gender}</h1>
			<h1 className="display-4">Height: {store.peopleDetails.properties.height}</h1>
			<h1 className="display-4">Eye color: {store.peopleDetails.properties.eye_color}</h1>
			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

export default PeopleDetails;
 
PeopleDetails.propTypes = {
	match: PropTypes.object
};
