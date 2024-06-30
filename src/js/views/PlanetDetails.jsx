import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetails = ( uid ) => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    
    useEffect (() => {
        actions.getPlanetDetails(id)
    }, []);

    return (
        <></>
    );
}

export default PlanetDetails;
 
PlanetDetails.propTypes = {
	match: PropTypes.object
};
