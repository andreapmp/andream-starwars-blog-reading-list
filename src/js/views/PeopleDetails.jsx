import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleDetails = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {
		actions.getPeopleDetails(params.id)
	}, [])
	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.peopleDetails.properties.name}</h1>
			<h1 className="display-4">Gender: {store.peopleDetails.properties.gender}</h1>
			<h1 className="display-4">{store.peopleDetails.properties.height}</h1>
			<h1 className="display-4">{store.peopleDetails.properties.eye_color}</h1>
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
