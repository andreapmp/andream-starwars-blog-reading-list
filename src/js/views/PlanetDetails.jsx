import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PlanetDetails = ( uid ) => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect (() => {
        actions.getPlanetDetails(params.id);
    }, [])

    